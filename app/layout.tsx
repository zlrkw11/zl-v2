import "./globals.css";
import Footer from "./components/footer";
import { Crimson_Text } from "next/font/google";
import Link from "next/link";

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
        <div className="flex justify-between p-8 mb-4">
          <Link href="/">
            <h1
              className="md:text-2xl text-lg hover:bg-red-600 hover:text-white"
              id="title"
            >
              {`<ZL />`}
            </h1>
          </Link>
        </div>
        <div className="flex-grow">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
