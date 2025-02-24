import { Arimo } from "next/font/google";
import Link from "next/link";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const Note = ({
  ver,
  date,
  des,
}: {
  ver: string;
  date: string;
  des: string;
}) => {
  return (
    <li className="border-l-2 border-l-red-600 pl-2">
      <p className="gap-8 flex">
        <span className="font-bold">ver {ver}</span>
        <span className="text-gray-500">{date}</span>
      </p>
      <p>{des}</p>
    </li>
  );
};
const PatchNotes = () => {
  return (
    <div
      className={`flex flex-col md:w-[800px] ${ArimoFont.className} gap-8 text-gray-700`}
    >
      <h1 className="text-black text-lg">
        <span className="text-red-600">{`[`}</span>Patch_Notes
        <span className="text-red-600">{`]`}</span>
      </h1>
      <p>
        This page records all the version updates and new features being added
        to this website. For more infomation, please visit the github repo:{" "}
        <Link href={"https://github.com/zlrkw11/zl-v2"}>
          <span className="text-gray-500 hover:text-red-600 underline">
            Take me there
          </span>
        </Link>
      </p>
      <ul className="gap-4 flex flex-col">
        <Note
          ver="1.0.0"
          date="2025/02/24"
          des="Completed the basic functionalities of all the main pages beside <Projects> and not yet deployed publicly."
        />
      </ul>
    </div>
  );
};

export default PatchNotes;
