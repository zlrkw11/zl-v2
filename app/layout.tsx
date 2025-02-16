import "./globals.css";
import Footer from "./components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <div className="flex justify-between border-b border-black p-8 mb-4">
          <h1 className="">[zl]</h1>
        </div>
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
