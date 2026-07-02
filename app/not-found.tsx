import Container from "@/components/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-night">
      <Container className="text-center">
        <p className="text-caption font-medium uppercase tracking-caps text-saffron">
          404
        </p>
        <h1 className="mt-4 font-display text-h1 leading-heading text-snow">
          Trail Not Found
        </h1>
        <p className="mx-auto mt-6 max-w-md text-body font-light leading-body text-stone">
          The page you&apos;re looking for doesn&apos;t exist — perhaps the road
          hasn&apos;t opened yet. Let us help you find your way.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="/"
            className="inline-block bg-saffron px-8 py-4 text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:bg-saffron-hover"
          >
            Back to Home
          </a>
          <a
            href="/packages"
            className="inline-block border border-snow/20 px-8 py-4 text-small font-semibold uppercase tracking-caps text-snow transition-colors hover:border-snow/40"
          >
            View Packages
          </a>
        </div>
      </Container>
    </main>
  );
}
