import React, { memo } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { styles } from "../styles";
import { github, websiteicon } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

const ProjectCard = memo(({ index, name, description, tags, image, source_code_link, web_link, isMobile }) => {
  const CardContent = () => (
    <div className="bg-tertiary p-4 sm:p-5 rounded-2xl w-full overflow-hidden">
      <div className={`relative w-full ${isMobile ? "h-[200px]" : "h-[230px]"}`}>
        <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />

        {/* GitHub */}
        <div className="absolute top-2 left-2 z-30">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={github} alt="source code" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>

        {/* Website */}
        <div className="absolute top-2 right-2 z-30">
          <div
            onClick={() => window.open(web_link, "_blank")}
            className="black-gradient w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img src={websiteicon} alt="visit website" className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>
      </div>

      <div className="mt-4 sm:mt-5">
        <h3 className={`text-white font-bold ${isMobile ? "text-[20px]" : "text-[24px]"}`}>{name}</h3>
        <p className={`mt-2 text-secondary ${isMobile ? "text-[13px]" : "text-[14px]"}`}>{description}</p>
      </div>

      <div className="mt-3 sm:mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[12px] sm:text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );

  if (isMobile) {
    // ⚡ Plain, no animation on mobile
    return (
      <div className="w-full sm:w-full">
        <CardContent />
      </div>
    );
  }

  // 🎬 Animated with Tilt on desktop
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full sm:w-[360px]"
    >
      <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={400}>
        <CardContent />
      </Tilt>
    </motion.div>
  );
});

const Works = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <div>
      {/* Section Title */}
      <div>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </div>

      {/* Intro Text */}
      <p className="mt-3 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px] text-center sm:text-left">
        Following projects showcase my skills and experience through real-world examples. Each project
        is briefly described with links to code repositories and live demos. It reflects my ability to
        solve complex problems, work with different technologies, and manage projects effectively.
      </p>

      {/* Project Cards */}
      <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row flex-wrap justify-center gap-5 sm:gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} isMobile={isMobile} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
