import React, { FC, useState } from "react";
import styles from "./MobileNavigation.module.scss";
import HamburgerBtn from "@/elements/HamburgerBtn/HamburgerBtn";
import MobileNavLink from "@/elements/MobileNavLink/MobileNavLink";

const MobileNavigation: FC = () => {
  const [isMenuOpen, setIsMenuClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsMenuClicked((prev) => !prev);
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
            href={"/"}
            onClick={handleClick}
            path={"/"}
          />
          <MobileNavLink
            btnName={"About"}
            href={"#about"}
            onClick={handleClick}
            path={"/#about"}
          />
          <MobileNavLink
            btnName={"Projects"}
            href={"#projects"}
            onClick={handleClick}
            path={"/#projects"}
          />
          <MobileNavLink
            btnName={"Contact"}
            href={"#contact"}
            onClick={handleClick}
            path={"/#contact"}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
