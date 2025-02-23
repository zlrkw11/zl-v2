import "./globals.css";
import Footer from "./components/footer";
import { Crimson_Text } from "next/font/google";
import Link from "next/link";
import Nav from "./components/nav";

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
        <div className="grid grid-cols-10 p-4 mb-4 ">
          <Link href="/" className="flex justify-center">
            <h1
              className="text-center md:text-2xl w-[100px] hidden hover:bg-red-600 items-center justify-center md:flex hover:text-white"
              id="title"
            >
              {`<ZL />`}
            </h1>
          </Link>
          <div className="w-full col-span-4 flex justify-center">
            <Nav />
          </div>
        </div>
        <div className="items-center flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
