import React, { FC } from "react";
import { motion } from "framer-motion";

import  projects  from "../../data/data";
import { fadeIn, textVariant } from "../../utils/Motion";
import ProjectCard from "../../elements/ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";
import { F_Open_Sans } from "@/fonts";

const Works: FC = ()=>{
    return (
      <div id={"projects"}
      className={`${styles.projects}  ${F_Open_Sans.className}`}>
        <div className={styles.text}>
        <motion.div variants={textVariant()}>
          <h2 >Projects.</h2>
        </motion.div>
  
        <div className='w-full flex'>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described with
            links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </motion.p>
        </div>
        </div>
  
        <div className={styles.cards}>
          {projects.map((project, index) => (
            <ProjectCard key={index} image={project.image} index={index} name={project.name} description={project.description} tags={project.tags} source_code_link={project.source_code_link}  live_page={project.live_page}/>
          ))}
        </div>
      
      </div>
    );
  };

  export default Works