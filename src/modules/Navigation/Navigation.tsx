import Image from "next/image";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import NavLink from "@/elements/NavLink/NavLink";
import Logo from "@/elements/Logo/Logo";
import HamburgerBtn from "@/elements/HamburgerBtn/HamburgerBtn";
import MobileNavLink from "@/elements/MobileNavLink/MobileNavLink";
import { useMediaQuery } from "react-responsive";
import { F_Open_Sans } from "@/fonts";

const Navigation: FC = () => {
  const { push } = useRouter();
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuClicked] = useState<boolean>(false);

  const handleClick = () => {

    setIsMenuClicked((prev) => !prev);
  };

  const matches = useMediaQuery({ minWidth: 800 });
  useEffect(() => {
    setIsDesktop(matches);
  }, [matches]);
  return (
    <>
      <div className={`${styles.desktopNavWrapper} ${F_Open_Sans.className}`}>
        <div className={styles.logoWrapper} onClick={() => push("/")}>
          <Logo />
        </div>
        {isDesktop ? (
          <div className={styles.linksWrapper}>
            <NavLink href="#home"> Home</NavLink>

            <NavLink href="#about">About</NavLink>

            <NavLink href="#projects">Projects</NavLink>

            <NavLink href="#contact">Contact</NavLink>
            <div></div>
          </div>
        ) : (
          <>
            <HamburgerBtn isMenuOpen={isMenuOpen} handleClick={handleClick} />

            <div
              className={`${styles.slidingNav} ${
                isMenuOpen ? styles.clicked : ""
              }`}
            >
              <div className={styles.linksWrapperM}>
                <MobileNavLink
                  btnName={"Home"}
                  href={"#home"}
                  onClick={handleClick}
                />
                <MobileNavLink
                  btnName={"About"}
                  href={"#about"}
                  onClick={handleClick}
                />
                <MobileNavLink
                  btnName={"Projects"}
                  href={"#projects"}
                  onClick={handleClick}
                />
                <MobileNavLink
                  btnName={"Contact"}
                  href={"#contact"}
                  onClick={handleClick}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navigation;
