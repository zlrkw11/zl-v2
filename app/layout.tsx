import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="">
          <div className="flex justify-between border-b border-black p-8 mb-4">
            <h1 className="">[zl]</h1>
          </div>
          <div className="window-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
