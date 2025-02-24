import { Arimo } from "next/font/google";
import Link from "next/link";
const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const Card = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="border-2 border-b-red-600 p-2 gap-2 flex flex-col w-[410px] md:min-w-[600px]">
      <Link href="/">
        <h1 className="hover:text-red-600 ">./{title}</h1>
      </Link>

      <div className="">{description}</div>
    </div>
  );
};

const Menu = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${ArimoFont.className} text-gray-700 w-[800px]`}
    >
      <div className="w-[800px] flex flex-col items-center gap-4">
        <h1 className="text-red-600 underline text-2xl mb-4">Map</h1>
        <p className="mb-8">This page is a road map for this website {`:)`}</p>
        <h1 className="text-lg text-black">./Ground_Level</h1>
        <Card title="Home" description="As what the name says.." />
        <Card
          title="About"
          description="A page for the readers to know more about me and the background of this website."
        />
        <Card
          title="Projects"
          description="Past projects (web-dev & others) I have built both independently and collaboratively."
        />
        <Card
          title="Personal Blogs"
          description="A free space to express my personal ideas and thoughts."
        />
        <h1 className="text-lg text-black">./B1</h1>
        <Card
          title="LeetCode"
          description="This page is an online storage room for all the problems I have solved."
        />
        <Card
          title="Patch Notes"
          description="A page which records all the updates and version changes of this website."
        />
      </div>
    </div>
  );
};

export default Menu;
