import React, { FC, useState } from 'react'
import styles from './DesktopNavigation.module.scss'
import NavLink from '@/elements/NavLink/NavLink'

const DesktopNavigation: FC = () => {

const [isActive, setIsActive]=useState("Home")

const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    setIsActive(targetId)
   elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (

      <div className={styles.linksWrapper}>
        <NavLink name='Home' href="#Home" onScroll={handleScroll} isActive={isActive}/>

        <NavLink name='About' href="#About" onScroll={handleScroll}isActive={isActive} />

        <NavLink name='Projects' href="#Projects" onScroll={handleScroll} isActive={isActive} />

        <NavLink name='Contact' href="#Contact" onScroll={handleScroll} isActive={isActive}/>
        </div>  )
}

export default DesktopNavigation