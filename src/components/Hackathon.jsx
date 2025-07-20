import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { hackathons } from "../constants";

const HackathonCard = ({
  index,
  name,
  description,
  tags,
  image,
  github_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="relative p-6 sm:w-[320px] w-full border-l-2 border-[#2a3351]">
        <div className="w-16 h-16 mb-4">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-contain"
          />
        </div>

        <h3 className="text-white font-bold text-[20px] mb-3">{name}</h3>
        <p className="text-secondary text-[14px] leading-[1.5] mb-4">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className="px-3 py-1 text-[12px] text-secondary bg-[#1d2640]/50"
            >
              {tag.name}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <a
            href={github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-3 py-1 text-[12px] font-medium bg-[#1d2640]/50 text-secondary hover:text-white"
          >
            Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Hackathon = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="text-[28px] text-center font-bold text-white mb-8">
          Hackathon Participation
        </h2>
      </motion.div>

      <div className="flex justify-center items-center">
        <div className="flex flex-wrap gap-6 max-w-4xl justify-center">
          {hackathons.map((hackathon, index) => (
            <HackathonCard
              key={`hackathon-${index}`}
              index={index}
              {...hackathon}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Hackathon, "hackathon");
