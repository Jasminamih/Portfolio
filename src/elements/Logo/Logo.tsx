import React, { FC } from 'react'
import styles from './Logo.module.scss'
import { F_Baskervville } from '@/fonts'
import Image from "next/image"

const Logo: FC = () => {
  return (
    <div className={styles.logo}>
<Image src={"/abd.png"} alt='logo' fill/>      </div>
  )
}

export default Logo