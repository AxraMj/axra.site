import React from "react";
import { SectionWrapper } from "../hoc"; // Higher-order component
import { FaReact, FaDocker, FaGithub } from 'react-icons/fa'; // Import React icon
import { SiRedux, SiMongodb, SiTailwindcss, SiTypescript, SiMeta, SiPython } from 'react-icons/si'; // Import package icons
import { DiNodejs } from 'react-icons/di'; // Import Node.js icon

// Import the Express and GSAP images
import expressIcon from "../assets/Expressjs.png"; // Adjust path if necessary
import GSAP from "../assets/GSAP-GIF.gif"; // Adjust path if necessary

// Define the technologies array with name and corresponding icons
const technologies = [
  {
    name: "MongoDB",
    icon: <SiMongodb className="text-green-500 w-full h-full" />, // MongoDB icon
    color: "hover:text-green-500",
  },
  {
    name: "Express",
    icon: <img src={expressIcon} alt="Express Icon" className="w-32 h-full object-cover" />, // Adjusted size for the Express image
    color: "hover:text-gray-500",
  },
  {
    name: "React.js",
    icon: <FaReact className="text-blue-500 w-full h-full" />, // React.js icon
    color: "hover:text-blue-500",
  },
  {
    name: "Node.js",
    icon: <DiNodejs className="text-green-600 w-full h-full" />, // Node.js icon
    color: "hover:text-green-600",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-teal-500 w-full h-full" />, // Tailwind CSS icon
    color: "hover:text-teal-500",
  },
  {
    name: "Python",
    icon: <SiPython className="text-blue-500 w-full h-full" />, // Python icon
    color: "hover:text-blue-500",
  },
  {
    name: "GSAP",
    icon: <img src={GSAP} alt="GSAP Icon" className="w-32 h-full object-cover" />, // Adjusted size for the GSAP image
    color: "hover:text-purple-500",
  },
  {
    name: "Docker",
    icon: <FaDocker className="text-blue-400 w-full h-full" />,
    color: "hover:text-blue-400",
  },
  {
    name: "GitHub Actions",
    icon: <FaGithub className="text-gray-800 w-full h-full" />,
    color: "hover:text-gray-800",
  },
];

// Tech component to display technology icons
const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div 
          key={technology.name}
          className='group relative w-28 h-28 flex justify-center items-center'
        >
          <div className={`w-full h-full flex justify-center items-center transition-all duration-300 transform group-hover:scale-110 ${technology.color}`}>
            {technology.icon}
          </div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white text-sm font-medium whitespace-nowrap">
              {technology.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

// Export the Tech component wrapped in the SectionWrapper HOC
export default SectionWrapper(Tech, "");
