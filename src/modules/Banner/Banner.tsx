import React, { FC } from "react";
import styles from "./Banner.module.scss";
import EarthCanvas from "@/elements/canvas/Moon/MoonCanvas";
import { F_Open_Sans } from "@/fonts";
import MoonCanvas from "@/elements/canvas/Moon/MoonCanvas";

const Banner: FC = () => {
  return (
    <div
      id="home"
      className={`${styles.bannerWrapper} ${F_Open_Sans.className}`}
    >
      <div>
        <h3>Hi, my name is</h3>
        <h1>Jasmina Mihajloska</h1>
        <h2>A Front-End developer </h2>
      </div>
<MoonCanvas/>    </div>
  );
};

export default Banner;
