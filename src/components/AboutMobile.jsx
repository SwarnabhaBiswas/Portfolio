import React from "react";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
    <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
      <img
        src={icon}
        alt="web-development"
        className="w-16 h-16 object-contain"
      />

      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
  </div>
);

const AboutMobile = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </div>

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        I’m a MERN focused full-stack developer with a strong foundation in DSA
        using Java, driven by curiosity and a focus on building clean, scalable
        applications. I pay close attention to reliability by testing edge cases
        and am currently exploring cloud and DevOps to build production ready,
        impactful systems.
      </p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(AboutMobile, "about");
