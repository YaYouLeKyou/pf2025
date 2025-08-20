import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Service Card Component
const ServiceCard = ({ index, title, icon }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <motion.div
      variants={isMobile ? {} : fadeIn("", "spring", index * 0.2, 0.75)}
      initial="hidden"
      whileInView={isMobile ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
      className={`w-[250px] sm:w-[220px] flex-shrink-0 green-pink-gradient p-[1px] rounded-[20px] shadow-card`}
    >
      <div className="bg-tertiary rounded-[20px] py-4 sm:py-5 px-8 sm:px-12 min-h-[260px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-14 h-14 sm:w-16 sm:h-16 object-contain" />
        <h3 className="text-white text-[18px] sm:text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

// About Section Component
const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <>
      {/* Section Header */}
      <motion.div
        variants={isMobile ? {} : textVariant()}
        initial="hidden"
        whileInView={isMobile ? undefined : "show"}
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      {/* Description */}
      <motion.p
        variants={isMobile ? {} : fadeIn("", "", 0.1, 1)}
        initial="hidden"
        whileInView={isMobile ? undefined : "show"}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-[28px] sm:leading-[30px]"
      >
        Creative Front-End Developer building responsive, high-performance web interfaces using React, Vue.js, and modern UI/UX practices. Skilled in integrating REST APIs, handling dynamic data with MySQL and MongoDB, and delivering clean, scalable code. I turn ideas into fast, functional, and visually engaging web apps.
      </motion.p>

      {/* Cards */}
      <div className="mt-16 sm:mt-20 flex flex-wrap gap-6 sm:gap-10 justify-center sm:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
