import React, { FC } from 'react'
import styles from './HamburgerBtn.module.scss'

interface Props {
    isMenuOpen: boolean;
    handleClick: (e: React.MouseEvent) => void;
  }
  const HamburgerBtn: React.FC<Props> = ({ isMenuOpen, handleClick }) => {
    return (
      <>
        <div
          className={`${styles.hamburgerBtn} ${styles.noSelect} ${
            isMenuOpen ? styles.clicked : ""
          }`}
          onClick={handleClick}
        >
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </>
    );
  };
  

export default HamburgerBtn