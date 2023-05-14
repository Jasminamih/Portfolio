import React, { FC } from "react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { fadeIn, textVariant } from "../../utils/Motion";
import styles from "./ProjectCard.module.scss";
import { F_Open_Sans, F_Roboto } from "@/fonts";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image"

interface Props {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
  live_page:string
}

const ProjectCard: FC<Props> = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_page
}) => {
  return (
    <motion.div
      className={styles.cardWrapper}
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    >
      <Tilt className={styles.card}>
        <div className={styles.imgWrapper}>
          <Image fill src={image} alt="project_image" className={styles.img} />
        </div>

        <div className={`${styles.text} ${F_Open_Sans.className}`}>
          <div className={styles.iconsWrapper}>
            <div onClick={() => window.open(source_code_link, "_blank")}>
              <FaGithub className={styles.github} />
            </div>
            <div onClick={() => window.open(live_page, "_blank")}>
              <FaExternalLinkAlt className={styles.livePage} />
            </div>
          </div>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>{description}</p>

          <div className={styles.tags}>
            {tags.map((tag) => (
              <p key={`${name}-${tag.name}`} className={tag.color}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};
export default ProjectCard;
