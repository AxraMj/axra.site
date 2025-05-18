import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { github, external } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-[280px] sm:w-[360px] mx-auto">
      <Tilt
        options={{
          max: 0,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-3 sm:p-5 rounded-2xl w-full min-h-[400px] flex flex-col'
      >
        <div className='relative w-full h-[160px] sm:h-[200px]'>
          <img
            src={image}
            alt={`${name} preview`}
            className='w-full h-full object-cover rounded-2xl'
            loading="lazy"
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover gap-2'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-110'
            >
              <img
                src={github}
                alt='source code'
                className='w-4 h-4 sm:w-5 sm:h-5 object-contain'
              />
            </div>
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className='black-gradient w-8 h-8 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-110'
            >
              <img
                src={external}
                alt='live demo'
                className='w-4 h-4 sm:w-5 sm:h-5 object-contain invert'
              />
            </div>
          </div>
        </div>

        <div className='flex-grow mt-3 sm:mt-4 flex flex-col'>
          <h3 className='text-white font-bold text-[15px] sm:text-[24px] leading-tight'>{name}</h3>
          <p className='mt-2 text-secondary text-[12px] sm:text-[14px] leading-[1.5] flex-grow'>{description}</p>
        </div>

        <div className='mt-2 sm:mt-3 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[10px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <div className="w-full px-4 sm:px-8">
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>My work</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[13px] sm:text-[17px] max-w-3xl leading-[20px] sm:leading-[30px]'
        >
          A quick look at the projects I've worked on—covering both web and mobile. Each one shows how I approach building, debugging, and shipping usable products with different tech stacks.
        </motion.p>
      </div>

      <div className='mt-7 sm:mt-20 flex flex-col sm:flex-row flex-wrap gap-7 justify-center items-center px-2 sm:px-0'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");