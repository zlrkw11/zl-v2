import Link from "next/link";
import { Arimo } from "next/font/google";
import { Crimson_Text } from "next/font/google";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "400",
});

const crimsonFont = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

const credits = () => {
  return (
    <div
      className={`md:w-[800px] m-4 w-[370px] gap-4 items-center flex flex-col ${ArimoFont.className}`}
    >
      <h1
        className={`${crimsonFont.className} text-2xl border-b-2 border-b-red-600 mr-auto`}
      >
        Dev
      </h1>
      <p className="mb-2 text-lg">
        This website was designed, developed and deployed completely
        independently by{" "}
        <span className="text-red-600 hover:text-red-400">Ray Zhao</span> in Feb
        2025 and is completely open source.
      </p>
      <h1
        className={`${crimsonFont.className} text-2xl border-b-2 border-b-red-600 mr-auto`}
      >
        Inspirations
      </h1>
      <p className="text-lg">
        I drew a lot of design inspiration from Eric's website, which I
        discovered while working on mine. His creative use of HTML and CSS to
        build a unique, professional site sparked several ideas for my own
        design.
      </p>
      <p className={`text-xl ${crimsonFont.className}`}>
        Check out Eric's Website:
      </p>
      <Link
        className="underline text-red-600 hover:text-red-400 text-lg"
        href="https://ericzheng.nz/"
      >
        <p>ericzheng.co.nz</p>
      </Link>
    </div>
  );
};

export default credits;
