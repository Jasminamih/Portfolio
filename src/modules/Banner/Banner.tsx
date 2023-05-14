import React, { FC } from 'react'
import styles from './Banner.module.scss'
import EarthCanvas from '../../elements/canvas/Moon/Moon'

const Banner: FC = () => {
  return (
    <div id='home' className={`${styles.bannerWrapper}`}><div><h3>Hi, my name is</h3>
    <h1>Jasmina Mihajloska</h1>
    <h2>A Front-End developer </h2>
   
    {/* <h3>Code under the stars and reach out for the moon</h3></div> */}
  </div>
<EarthCanvas/>
</div>)
}

export default Banner