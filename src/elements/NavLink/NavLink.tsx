import React, { FC, ReactNode, useEffect, useRef, useState } from "react";

import { F_Ubuntu } from "@/fonts";
import Link from "next/link";
import styles from "./NavLink.module.scss";

interface props {
  href: string;
name:string;
  onScroll:(e:any)=>void
  isActive:string
}

const NavLink: FC<props> = ({ href,name, onScroll,isActive }) => {

  
console.log(isActive)
  return (
    <div className={`${styles.desktopLinkWrapper} ${F_Ubuntu.className}`}>
      <Link onClick={onScroll} rel="preload" href={href} className={`${styles.navLink} ${isActive === name ? styles.active : ''}`}>
      {name}
      </Link>
    </div>
  );
};

export default NavLink;
