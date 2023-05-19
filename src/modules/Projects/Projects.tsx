import React, { FC } from "react";
import projects from "../../data/data";
import ProjectCard from "../../elements/ProjectCard/ProjectCard";
import styles from "./Projects.module.scss";
import { F_Open_Sans } from "@/fonts";

const Works: FC = () => {
  return (
    <div
      id={"Projects"}
      className={`${styles.projects}  ${F_Open_Sans.className}`}
    >
      <div className={styles.text}>
        <h2 className={styles.title}>Projects.</h2>
        <p className={styles.desc}>
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className={styles.cards}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            index={index}
            name={project.name}
            description={project.description}
            tags={project.tags}
            source_code_link={project.source_code_link}
            live_page={project.live_page}
          />
        ))}
      </div>
    </div>
  );
};

export default Works;
