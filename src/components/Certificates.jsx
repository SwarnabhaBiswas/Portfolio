import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { certificates } from "../constants";

const CertificateCard = ({
  index,
  name,
  company_name,
  icon,
  iconBg,
  date,
  link,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full flex flex-col items-center text-center'
  >
    <div
      className='w-16 h-16 rounded-full flex justify-center items-center'
      style={{ background: iconBg }}
    >
      <img
        src={icon}
        alt={company_name}
        className='w-[60%] h-[60%] object-contain'
      />
    </div>

    <div className='mt-5'>
      <h3 className='text-white font-bold text-[20px]'>{name}</h3>
      <p className='mt-2 text-secondary text-[14px]'>{company_name}</p>
      <p className='mt-1 text-secondary text-[12px]'>{date}</p>
    </div>

    <div className='mt-7'>
      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:bg-white-100 hover:text-tertiary transition-all duration-300'
      >
        View Certificate
      </a>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My achievements</p>
          <h2 className={styles.sectionHeadText}>Certificates.</h2>
        </motion.div>
      </div>
      <div className={`-mt-40 sm:-mt-20 pb-14 ${styles.paddingX} flex flex-wrap justify-center gap-7`}>
        {certificates.map((certificate, index) => (
          <CertificateCard key={`certificate-${index}`} index={index} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates, "certificates");
