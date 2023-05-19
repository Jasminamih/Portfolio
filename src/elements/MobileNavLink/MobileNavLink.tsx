import React, { FC } from "react";
import styles from "./MobileNavLink.module.scss";
import Link from "next/link";

interface props {
  btnName: string;
  href: string;
  onScroll: (e: any) => void;
}

export interface NavBtnInterface {
  name: string;
  href: string;
}

const MobileNavLink: FC<props> = ({ btnName, href, onScroll }) => {

  return (
    <div className={`${styles.linkWrapper}  `}>
      <Link
        rel="preload"
        href={href}
        onClick={onScroll}
        className={`${styles.navLink}`}
      >
        <p className={styles.btnName}>{btnName}</p>{" "}
      </Link>
    </div>
  );
};

export default MobileNavLink;
