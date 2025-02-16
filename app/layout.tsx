export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="window">
          <div className="window-header">
            <span>zl's diary</span>
            <div className="window-controls">
              <button className="close-btn">X</button>
            </div>
          </div>
          <div className="window-content">{children}</div>
        </div>
      </body>
    </html>
  );
}
