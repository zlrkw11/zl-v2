import { Arimo } from "next/font/google";
import { list } from "postcss";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const Project = ({
  name,
  tech,
  des,
  link1,
  image,
  time,
}: {
  name: string;
  tech: string[];
  des: string;
  link1: string;
  image?: string;
  time: string;
}) => {
  return (
    <div
      className={`md:min-w-[730px] ${ArimoFont.className} border-l-2 border-l-red-600 bg-gradient-to-r from-white to-gray-300`}
    >
      <h1 className="border-b-2 border-dashed border-b-red-600 text-black text-2xl m-2">
        {name}
      </h1>
      <ul className="flex gap-2 m-2">
        {tech.map((s, i) => (
          <li
            className="border border-gray-500 text-sm rounded-full p-1"
            key={i}
          >
            {s}
          </li>
        ))}
      </ul>
      <p className="m-2">{des}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col md:w-[800px] items-center gap-4 text-gray-700">
      <Project
        name="UASC"
        tech={["React", "TailwindCSS", "TypeScript", "Storybook"]}
        des="A fully functional website made for the University of Auckland's Snow Sports Club with a complete user-registration 
        and admin system that can handle large-scale online transfer and bookings with a professional procedure."
        link1="uasc.co.nz"
        time="2024.4"
      />
    </div>
  );
};

export default Projects;
