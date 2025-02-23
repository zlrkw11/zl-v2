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
    <div className="border-2 border-b-red-600 p-2 gap-4 flex flex-col">
      <Link href="/">
        <h1 className="hover:text-red-600 ">./{title}</h1>
      </Link>

      <div>{description}</div>
    </div>
  );
};

const Menu = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${ArimoFont.className} text-gray-700`}
    >
      <div className="w-[800px] flex flex-col items-center ">
        <h1 className="text-red-600 underline text-2xl mb-4">Map</h1>
        <p className="mb-8">This page is a road map for this website</p>

        <Card
          title="LeetCode"
          description="This page is a online storage room for all the problems I have solved"
        />
      </div>
    </div>
  );
};

export default Menu;
