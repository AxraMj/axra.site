import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { SiReact, SiExpress, SiMongodb, SiDocker, SiGithubactions, SiNodedotjs } from "react-icons/si";

const FeaturedProjects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const totalImages = 10;

  const technologies = [
    { name: "React Native", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express.js", icon: SiExpress },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Docker", icon: SiDocker },
    { name: "GitHub Actions", icon: SiGithubactions }
  ];

  const images = Array.from({ length: totalImages }, (_, i) => `/Featured_Project/image${i + 1}.png`);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 1 ? totalImages : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === totalImages ? 1 : prevIndex + 1
    );
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Featured Work</p>
        <h2 className='text-white font-black text-[28px] mt-2 uppercase tracking-wider'>
          TRAVEL & EXPLORATION MOBILE APP
        </h2>
      </motion.div>

      <div className='mt-10 flex flex-col md:flex-row gap-10 items-center'>
        {/* Left side - Image with controls */}
        <div className='w-full md:w-[40%] relative'>
          <div className='relative overflow-hidden rounded-2xl'>
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex - 1]}
                alt={`Project Image ${currentImageIndex}`}
                className='w-full h-auto'
                style={{ 
                  maxHeight: '400px', 
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto'
                }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { duration: 0.5, ease: "easeInOut" }
                }}
                exit={{ opacity: 0 }}
                loading="eager"
              />
            </AnimatePresence>
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={handlePrevious}
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 flex items-center justify-center text-white transition-colors"
              aria-label="Previous image"
            >
              <span className="text-2xl">&larr;</span>
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/75 flex items-center justify-center text-white transition-colors"
              aria-label="Next image"
            >
              <span className="text-2xl">&rarr;</span>
            </button>
          </div>
        </div>

        {/* Right side - Description */}
        <div className='w-full md:w-[60%]'>
          <p className='text-secondary text-[16px] leading-[26px] space-y-2'>
            <span className="block">Developed a full-stack mobile application connecting travel creators with explorers using React Native and Node.js.</span>
            <span className="block">Implemented real-time communication features using WebSocket technology.</span>
            <span className="block">Built location-based services and social networking features for enhanced user interaction.</span>
            <span className="block">Created a scalable microservices architecture using Docker containers.</span>
            <span className="block">Set up a CI/CD pipeline with GitHub Actions for automated testing and deployment.</span>
          </p>
          <div className='mt-4 flex flex-wrap gap-2'>
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className='text-[14px] text-white-100 bg-tertiary px-3 py-1 rounded-full flex items-center gap-1'
              >
                <tech.icon className="w-4 h-4" />
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(FeaturedProjects, "featured"); 