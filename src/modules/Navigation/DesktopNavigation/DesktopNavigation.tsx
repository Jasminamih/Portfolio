import React, { FC, useState } from "react";
import styles from "./DesktopNavigation.module.scss";
import NavLink from "@/elements/NavLink/NavLink";

const DesktopNavigation: FC = () => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
   

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.linksWrapper}>
      <NavLink
        name="Home"
        href="#Home"
        onScroll={handleScroll}
      />

      <NavLink
        name="About"
        href="#About"
        onScroll={handleScroll}
      />

      <NavLink
        name="Projects"
        href="#Projects"
        onScroll={handleScroll}
      />

      <NavLink
        name="Contact"
        href="#Contact"
        onScroll={handleScroll}
      />
    </div>
  );
};

export default DesktopNavigation;
