import React, { FC, useState } from "react";
import styles from "./PopUpMessage.module.scss"
import { F_Open_Sans } from "@/fonts";

interface Props{
  title:string;
  text:string;
}


const PopUpMessage: FC<Props> = ({title, text}) => {
  const [isVisible, setIsVisible] = useState(true);

  const hidePopup = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          className={`${styles.successWrapper} ${F_Open_Sans.className}`}
          onClick={hidePopup}
        >
          <div className={styles.innerBox}>
            <p className={styles.closeBtn} onClick={hidePopup}>
              x
            </p>
            <h2>{title}</h2>
            <p>
              {text}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpMessage;
