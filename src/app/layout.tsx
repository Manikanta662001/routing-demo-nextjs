export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: "lightblue", padding: "20px" }}>
          <h1>Header</h1>
        </header>
        {children}
        <footer style={{ backgroundColor: "lightCyan", padding: "20px" }}>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
