import Footer from "./components/footer";
import { Crimson_Text } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";
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
        <link rel="icon" href="/assets/zlnew.ico" sizes="any" />
      </head>
      <body
        className={`min-h-screen flex flex-col ${crimsonFont.className} overflow-x-hidden`}
      >
        <div className="flex items-center justify-center w-full mb-4">
          <Navbar />
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
