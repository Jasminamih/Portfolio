import React, { FC, useState } from "react";
import styles from "./MobileNavigation.module.scss";
import HamburgerBtn from "@/elements/HamburgerBtn/HamburgerBtn";
import MobileNavLink from "@/elements/MobileNavLink/MobileNavLink";

const MobileNavigation: FC = () => {
  const [isMenuOpen, setIsMenuClicked] = useState<boolean>(false);


  const handleClick = () => {
    setIsMenuClicked((prev) => !prev);
  };


  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();

    setIsMenuClicked((prev) => !prev);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);

    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div>
      <HamburgerBtn isMenuOpen={isMenuOpen} handleClick={handleClick} />

      <div
        className={`${styles.slidingNav} ${isMenuOpen ? styles.clicked : ""}`}
      >
        <div className={styles.linksWrapperM}>
          <MobileNavLink
            btnName={"Home"}
            href={"#Home"}
            onScroll={handleScroll}
          />
          <MobileNavLink
            btnName={"About"}
            href={"#About"}
            onScroll={handleScroll}

          />
          <MobileNavLink
            btnName={"Projects"}
            href={"#Projects"}
            onScroll={handleScroll}

          />
          <MobileNavLink
            btnName={"Contact"}
            href={"#Contact"}
            onScroll={handleScroll}

          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
