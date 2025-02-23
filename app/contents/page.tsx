import { Arimo } from "next/font/google";
const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});
const Menu = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center ${ArimoFont.className} text-gray-700`}
    >
      <div className="w-[800px] flex flex-col items-center ">
        <h1 className="text-red-600 underline text-2xl ">Map</h1>
        <p className="mb-8">This page is a road map for this website</p>
        <div>
          <h1>LeetCode records</h1>
          <div>
            This page is a online storage room for all the problems I have
            solved
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
