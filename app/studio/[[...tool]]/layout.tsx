export const metadata = {
  title: "Studio | Bharat Bhraman",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="h-screen">{children}</div>;
}
