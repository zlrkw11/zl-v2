import { Arimo } from "next/font/google";
import { Crimson_Text } from "next/font/google";
import Link from "next/link";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const crimsonFont = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

const Card = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="border-2 border-b-red-600 p-2 m-2 gap-2 flex flex-col w-[370px] md:min-w-[600px]">
      <Link href={link}>
        <h1 className="hover:text-red-600 ">./{title}</h1>
      </Link>

      <div className="">{description}</div>
    </div>
  );
};

const Menu = () => {
  return (
    <div
      className={`flex flex-col justify-center md:items-center ${ArimoFont.className} text-gray-700`}
    >
      <div className="md:w-[800px] flex flex-col items-center gap-4">
        <div className={` ${crimsonFont.className} md:min-w-[600px]`}>
          <h1 className="text-black border-b-2 border-red-600 md:min-w-[600px] w-[370px] text-2xl mb-2">
            Map
          </h1>
          <p className="text-black">
            This page is a road map for this website {`:)`}
          </p>
        </div>

        <h1 className="text-lg text-black m-4">
          <span className="text-red-600">./</span>Ground_Level
        </h1>
        <Card title="Home" description="As what the name says.." link="/" />
        <Card
          title="About"
          description="A page for the readers to know more about me and the background of this website."
          link="/about"
        />
        <Card
          title="Projects"
          description="Past projects (web-dev & others) I have built both independently and collaboratively."
          link="/projects"
        />
        <Card
          title="Personal Blogs"
          description="A free space to express my personal ideas and thoughts."
          link="/blogs"
        />
        <h1 className="text-lg text-black m-4">
          <span className="text-red-600">./</span>B1
        </h1>
        <Card
          title="LeetCode"
          description="This page is an online storage room for all the problems I have solved."
          link="/contents/leetcode"
        />
        <Card
          title="Patch Notes"
          description="A page which records all the updates and version changes of this website."
          link="/contents/patchnotes"
        />

        <h1 className="text-lg text-black m-4">
          <span className="text-red-600">./</span>External_Links
        </h1>
        <Card
          title="Github"
          description="A link to my Github profile."
          link="https://github.com/zlrkw11"
        />
        <Card
          title="LinkedIn"
          description="A link to my Linkedin profile."
          link="https://www.linkedin.com/in/ray-zhao-kaede11/"
        />
      </div>
      <div className="text-md mt-12 m-2 md:min-w-[600px] w-[370px] flex flex-col gap-4">
        Emails:
        <p className="border-l-2 border-red-600 p-2">Ray040406@gmail.com</p>
        <p className="border-l-2 border-red-600 p-2">
          lzha641@aucklanduni.ac.nz
        </p>
      </div>
      <div>
        <Link href="/contents/credits">
          <p className="border-b-2 border-red-600 hover:text-gray-500">
            Credits
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
