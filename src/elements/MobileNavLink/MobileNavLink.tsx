import React, { FC } from "react";
import styles from "./MobileNavLink.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

interface props {
  btnName: string;
  href: string;
  onScroll: (e:any) => void;  
  isActive:string


}

export interface NavBtnInterface {
  name: string;
  href: string;

}

const MobileNavLink: FC<props> = ({ btnName, href, onScroll ,isActive}) => {
  const router = useRouter();
 
  return (
    <div className={`${styles.linkWrapper}  `}>
      <Link
        rel="preload"
        href={href}
        onClick={onScroll}
        className={`${styles.navLink} ${isActive == btnName ? styles.activeLink : "" }`}
      >
        <p className={styles.btnName}>{btnName}</p>{" "}
      </Link>
    </div>
  );
};

export default MobileNavLink;
