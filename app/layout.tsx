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
          <div className="flex justify-between border-2 border-gray-600 p-2">
            <h1 className="">zl's diary</h1>

            <div className="">
              <button className="">X</button>
            </div>
          </div>
          <div className="window-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
