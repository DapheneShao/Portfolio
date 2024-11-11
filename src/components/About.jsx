import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction</p>
        <h2 className={styles.sectionHeadText}> Overview </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl laeding-[30px]
      "
      >
        Hello! I'm <strong>Zhuojun Shao</strong>, with over <strong>three years of experience </strong> 
        in <strong>frontend</strong> and <strong>full-stack development</strong>, focusing on   
        <strong> React</strong>, <strong>MongoDB</strong>, and <strong>Node.js</strong>. I'm passionate 
        about leveraging technology to solve <strong>real-world problems</strong> and creating products 
        with a strong emphasis on <strong>user experience</strong>. My work in areas like <strong>pollution 
        monitoring</strong>, <strong>financial systems</strong>, and <strong>health platforms</strong> has 
        allowed me to optimize performance, enhance usability, and integrate tools like  
        <strong> Mapbox GL JS</strong>, <strong>Socket.io</strong>, and <strong>AWS</strong>. I'm actively 
        seeking a <strong>Software Engineer intern position</strong> for <strong>Summer 2025</strong> to 
        continue applying my skills to impactful projects that make a difference.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
