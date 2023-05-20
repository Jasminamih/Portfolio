import React, { FC } from "react";
import styles from "./About.module.scss";
import Image from "next/image";
import { F_Open_Sans } from "@/fonts";
import { HiDocumentDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import Link from "next/link";

const About: FC = () => {
  return (
    <div id="About" className={styles.about}>
      <div className={styles.image}>
        <Image priority src={"/me.jpg"} fill alt="myPhoto" />
      </div>
      <div className={`${styles.text} ${F_Open_Sans.className}`}>
        <h1 className={styles.title}>About me</h1>
        <p className={styles.desc}>
          I am a junior front-end developer with a strong passion for creating
          visually appealing and user-friendly websites. Recently I have
          completed the Front end Academy at Brainster. I am proficient in HTML,
          CSS and JavaScript and popular front-end frameworks such as React.js
          and Next.js. I am a quick learner and have a strong desire to grow my
          skills and experience in the field. I am excited to connect with
          industry professionals and learn more about the opportunities
          available in front-end development. I am open to internships,
          freelance projects and entry-level positions.
        </p>
        <div className={styles.socials}>
          <Link
            rel="preload"
            target="_blank"
            href="/cv.pdf"
            download="cv"
            className={styles.socialsButton}
          >
            {" "}
            <HiDocumentDownload /> <p> Resume</p>
          </Link>
          <Link
            rel="preload"
            href={"https://github.com/Jasminamih"}
            className={styles.socialsButton}
            target="_blank"
          >
            {" "}
            <FaGithub /> <p> Github</p>
          </Link>
          <Link
            rel="preload"
            href={"https://www.linkedin.com/in/jasmina-mihajloska-170b37148/"}
            className={styles.socialsButton}
            target="_blank"
          >
            {" "}
            <AiFillLinkedin />
            <p>Linkedin</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
