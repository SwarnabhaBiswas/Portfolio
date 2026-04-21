import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
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
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        {/* Image */}
        <div className="relative w-full h-[200px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* GitHub */}
          {source_code_link && (
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-9 h-9 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="mt-4">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[13px] leading-[20px]">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[12px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Live Link */}
        {live_link && (
          <div className="mt-4">
            <button
              onClick={() => window.open(live_link, "_blank")}
              className="w-full py-2 rounded-lg bg-secondary text-tertiary text-sm font-semibold active:opacity-70 transition"
            >
              View Live Project
            </button>
          </div>
        )}
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[15px] max-w-3xl leading-[24px]"
        >
          These projects reflect my journey in building full-stack applications,
          experimenting with real-world features, and integrating modern
          technologies. Each one highlights my approach to problem-solving,
          clean design, and writing reliable code.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");