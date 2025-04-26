import { Arimo } from "next/font/google";
import Link from "next/link";
import { FolderIcon } from "@heroicons/react/16/solid";

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
    <li className="border-l-2 border-l-red-600 pl-2 bg-gray-200 dark:bg-neutral-800 py-2 rounded-r-md bg-opacity-35">
      <p className="gap-8 flex">
        <span className="font-bold italic dark:text-neutral-300">
          ver {ver}
        </span>
        <span className="text-gray-500 dark:text-neutral-600">{date}</span>
      </p>
      <p className="dark:text-neutral-500">{des}</p>
    </li>
  );
};
const PatchNotes = () => {
  return (
    <div
      className={`flex flex-col md:w-[800px] md:m-0 m-4 ${ArimoFont.className} gap-8 text-gray-700`}
    >
      <h1 className="text-black text-lg dark:text-neutral-400 flex gap-2">
        <FolderIcon className="h-6 w-6 text-gray-400 dark:text-neutral-400 inline-block" />
        Patch_Notes
      </h1>
      <p className="dark:text-neutral-400">
        This page records all the version updates and new features being added
        to this website. For more infomation, please visit the github repo:{" "}
        <Link href={"https://github.com/zlrkw11/zl-v2"}>
          <span className="text-gray-500 dark:text-neutral-500 dark:hover:text-neutral-400 hover:text-red-600 underline">
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
        <Note
          ver="1.0.1"
          date="2025/02/25"
          des="All (main) pages completed and deployed the website. Fixed the responsiveness and the overflowing issue on mobile viewports."
        />{" "}
        <Note
          ver="1.0.1s"
          date="2025/02/26"
          des="Full responsiveness on the mobile viewport by removing limited 'max-width' properties. pages involved: blogs,
          individual blog, contents map."
        />{" "}
        <Note
          ver="1.0.2"
          date="2025/03/01"
          des="LeetCode page made (almost fully complete for the summary page), 
          however each page of the problem still needs further work. Credits page created and finished.
          Added icon & changed name of the site."
        />{" "}
        <Note
          ver="1.0.3"
          date="2025/03/01"
          des="Restyled the Project component. Implemented Grid for mobile viewports."
        />{" "}
        <Note
          ver="1.0.4"
          date="2025/03/04"
          des="Functioning LeetCode page made for individual problems. Styled the code section with markdown plugins and
          adjusted element-positionings to make the page mobile-friendly."
        />{" "}
        <Note
          ver="1.0.5"
          date="2025/03/09"
          des="Added a CV page with a pdf viewer, refined About page to be more professional and 
          adjusted the styling on the LeetCode problem page."
        />{" "}
        <Note
          ver="1.0.6"
          date="2025/03/13"
          des="Pagination system applied on the LeetCode listing page (reducing loading & rendering time). Added 
          a redirect component for every LeetCode problem to the official site."
        />{" "}
        <Note
          ver="1.0.7"
          date="2025/03/16"
          des="Added a folder to store all LeetCode Problems files instead of stuffing every problem into 1. Applied an extra layer to process 
          the problem data."
        />{" "}
        <Note
          ver="1.0.8"
          date="2025/03/18"
          des="Replaced the difficulty tags of the LeetCode page with buttons on mobile viewports, restyled appearance on desktop version. 
          Restyled the code section on individual problem pages (added line numbers & applied Syntax highlight)."
        />{" "}
        <Note
          ver="1.0.9"
          date="2025/04/01"
          des="Added a new background inspired by Taroj1205. Restyled most of the card-like components on pages: Projects, Contents, LeetCode.
          Implemented animations for certain elements to move when on hover and shifted the aesthetic of the website to be more modern."
        />{" "}
        <Note
          ver="1.1.0"
          date="2025/04/16"
          des="Implemented intro animations on all pages using Motion & CSS (Blogs). Created a new navbar with a more sleek look to match the 
          theme."
        />{" "}
        <Note ver="1.1.1" date="2025/04/24" des="Implemented dark mode." />
      </ul>
    </div>
  );
};

export default PatchNotes;
