import "./globals.css";
import Footer from "./components/footer";
import { Crimson_Text } from "next/font/google";
import Link from "next/link";
import Nav from "./components/nav";
import zl from "../public/assets/zl.ico";

const crimsonFont = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "rayzhao web",
  description: "welcome to Ray Zhao's web space!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/zl.ico" sizes="any" />
      </head>
      <body className={`min-h-screen flex flex-col ${crimsonFont.className}`}>
        <Link href="/" className="absolute mr-auto">
          <h1
            className="text-center md:text-2xl w-[100px] hidden hover:bg-red-600 items-center justify-center md:flex hover:text-white"
            id="title"
          >
            {`<ZL />`}
          </h1>
        </Link>
        <div className="flex items-center justify-center w-full mb-4">
          <Nav />
        </div>
        <div className="items-center flex flex-col">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
{
  /*  */
}
