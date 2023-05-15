import React, { FC } from "react";
import styles from "./Logo.module.scss";
import Image from "next/image";

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
      <Image src="/logoJM.png" alt="logo" fill />{" "}
    </div>
  );
};

export default Logo;
