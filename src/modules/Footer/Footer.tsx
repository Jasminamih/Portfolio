import React, { FC } from "react";
import styles from "./Footer.module.scss";
import { F_Open_Sans } from "@/fonts";

const Footer: FC = () => {
  return (
    <div className={`${F_Open_Sans.className} ${styles.footer}`}>
      © Copyright 2023. Made by Jasmina Mihajloska
    </div>
  );
};

export default Footer;
