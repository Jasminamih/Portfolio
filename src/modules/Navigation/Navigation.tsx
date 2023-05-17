import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import styles from "./Navigation.module.scss";
import NavLink from "@/elements/NavLink/NavLink";
import Logo from "@/elements/Logo/Logo";
import { useMediaQuery } from "react-responsive";
import { F_Open_Sans } from "@/fonts";
import dynamic from "next/dynamic";

const DesktopNavigation = dynamic(
  () => import("./DesktopNavigation/DesktopNavigation"),
  {
    ssr: false,
  }
);
const MobileNavigation = dynamic(
  () => import("./MobileNavigation/MobileNavigation"),
  {
    ssr: false,
  }
);

const Navigation: FC = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);





  // const handleClick = () => {
  //   setIsMenuClicked((prev) => !prev);
  // };

  const matches = useMediaQuery({ minWidth: 800 });
  useEffect(() => {
    setIsDesktop(matches);
  }, [matches]);
  return (
    <>
      <div className={`${styles.desktopNavWrapper} ${F_Open_Sans.className}`}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        {isDesktop ? <DesktopNavigation /> : <MobileNavigation />}
      </div>
    </>
  );
};

export default Navigation;
