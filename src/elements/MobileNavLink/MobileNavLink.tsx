import React, { FC } from "react";
import styles from "./MobileNavLink.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface props {
  btnName: string;
  href: string;
  onClick: () => void;  
  path:string

}

export interface NavBtnInterface {
  name: string;
  href: string;

}

const MobileNavLink: FC<props> = ({ btnName, href, onClick,path}) => {
  const router = useRouter();
 
  return (
    <div className={`${styles.linkWrapper}  `}>
      <Link
        rel="preload"
        href={href}
        onClick={onClick}
        className={`${styles.navLink} ${router.asPath == path ? styles.activeLink : "" }`}
      >
        <p className={styles.btnName}>{btnName}</p>{" "}
      </Link>
    </div>
  );
};

export default MobileNavLink;
