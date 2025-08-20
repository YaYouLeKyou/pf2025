import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        padding: isMobile ? "10px 15px" : "20px 30px",
      }}
      contentArrowStyle={{ borderRight: isMobile ? "5px solid #232631" : "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, width: isMobile ? 40 : 60, height: isMobile ? 40 : 60 }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className={`object-contain ${isMobile ? "w-[50%] h-[50%]" : "w-[60%] h-[60%]"}`}
          />
        </div>
      }
    >
      <div>
        <h3 className={`text-white font-bold ${isMobile ? "text-[18px]" : "text-[24px]"}`}>
          {experience.title}
        </h3>
        <p
          className={`text-secondary font-semibold ${isMobile ? "text-[14px]" : "text-[16px]"}`}
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className={`mt-3 ${isMobile ? "ml-4 space-y-1" : "ml-5 space-y-2"} list-disc`}>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className={`text-white-100 tracking-wider ${isMobile ? "text-[12px]" : "text-[14px]"}`}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const isMobile = useMediaQuery({ maxWidth: 640 });

  return (
    <>
      <motion.div variants={isMobile ? {} : textVariant()} initial="hidden" whileInView={isMobile ? undefined : "show"} viewport={{ once: true, amount: 0.3 }}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
