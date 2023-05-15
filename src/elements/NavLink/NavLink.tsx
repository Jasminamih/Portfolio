import React, { FC, ReactNode } from "react";

import { F_Ubuntu } from "@/fonts";
import Link from "next/link";
import styles from "./NavLink.module.scss";

interface props {
  href: string;
  children: string | ReactNode;
}

const NavLink: FC<props> = ({ href, children }) => {
  return (
    <div className={`${styles.desktopLinkWrapper} ${F_Ubuntu.className}`}>
      <Link rel="preload" href={href} className={`${styles.navLink}`}>
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
