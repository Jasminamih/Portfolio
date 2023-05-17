import React, { FC } from 'react'
import styles from './DesktopNavigation.module.scss'
import NavLink from '@/elements/NavLink/NavLink'

const DesktopNavigation: FC = () => {
  return (

      <div className={styles.linksWrapper}>
        <NavLink href="#home"> Home</NavLink>

        <NavLink href="#about">About</NavLink>

        <NavLink href="#projects">Projects</NavLink>

        <NavLink href="#contact">Contact</NavLink>
        </div>  )
}

export default DesktopNavigation