export default function ProductionDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Features products</h2>
    </>
  );
}
