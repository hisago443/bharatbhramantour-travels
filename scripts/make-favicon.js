const sharp = require("sharp");
const path = require("path");

const SRC = path.join(__dirname, "..", "public", "logo.png");
const OUT_DIR = path.join(__dirname, "..", "public");

async function main() {
  // Crop to just the circular emblem (exclude the wordmark text below it)
  const img = sharp(SRC).extract({ left: 555, top: 65, width: 570, height: 535 });
  const meta = await img.metadata();
  console.log("cropped size", meta.width, meta.height);

  const { data, info } = await img.raw().ensureAlpha().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  const bg = [data[0], data[1], data[2]];
  console.log("bg sample", bg);

  const out = Buffer.from(data);
  const thresh = 18;
  const feather = 25;
  for (let i = 0; i < width * height; i++) {
    const o = i * channels;
    const r = data[o], g = data[o + 1], b = data[o + 2];
    const dist = Math.sqrt((r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2);
    if (dist < thresh) {
      out[o + 3] = 0;
    } else if (dist < thresh + feather) {
      out[o + 3] = Math.round(((dist - thresh) / feather) * 255);
    }
  }

  const buf = await sharp(out, { raw: { width, height, channels } }).png().toBuffer();
  const trimmedBuf = await sharp(buf).trim({ threshold: 10 }).toBuffer();
  const trimmedMeta = await sharp(trimmedBuf).metadata();
  console.log("trimmed size", trimmedMeta.width, trimmedMeta.height);

  const targets = [
    ["favicon.png", 32],
    ["apple-touch-icon.png", 180],
    ["icon-512.png", 512],
  ];
  for (const [file, size] of targets) {
    await sharp(trimmedBuf)
      .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(path.join(OUT_DIR, file));
  }

  console.log("done");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
