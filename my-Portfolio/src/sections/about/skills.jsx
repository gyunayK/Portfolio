import { FaReact, FaHtml5, FaSass, FaNodeJs } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const skillsArray = [
  {
    name: "React",
    icon: <FaReact className="text-4xl " />,
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs className="text-4xl " />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-4xl " />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-4xl " />,
  },

  {
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl " />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-4xl " />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl " />,
  },
  {
    name: "SASS",
    icon: <FaSass className="text-4xl " />,
  },

  {
    name: "HTML",
    icon: <FaHtml5 className="text-4xl " />,
  },
];
