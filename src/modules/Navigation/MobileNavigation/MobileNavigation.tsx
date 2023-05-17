import React, { FC, useState } from "react";
import styles from "./MobileNavigation.module.scss";
import HamburgerBtn from "@/elements/HamburgerBtn/HamburgerBtn";
import MobileNavLink from "@/elements/MobileNavLink/MobileNavLink";

const MobileNavigation: FC = () => {
  const [isMenuOpen, setIsMenuClicked] = useState<boolean>(false);
  const [isActive, setIsActive]=useState("Home")


  const handleClick = () => {
    setIsMenuClicked((prev) => !prev);
  };


  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    setIsMenuClicked((prev) => !prev);
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    setIsActive(targetId)

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
            isActive={isActive}
          />
          <MobileNavLink
            btnName={"About"}
            href={"#About"}
            onScroll={handleScroll}
            isActive={isActive}

          />
          <MobileNavLink
            btnName={"Projects"}
            href={"#Projects"}
            onScroll={handleScroll}
            isActive={isActive}

          />
          <MobileNavLink
            btnName={"Contact"}
            href={"#Contact"}
            onScroll={handleScroll}
            isActive={isActive}

          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
