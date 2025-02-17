import "./globals.css";
import Footer from "./components/footer";
import { Crimson_Text } from "next/font/google";

const crimsonFont = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`min-h-screen flex flex-col ${crimsonFont.className}`}>
        <div className="flex justify-between border-b border-black p-8 mb-4">
          <h1 className="" id="title">
            ZL
          </h1>
        </div>
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
