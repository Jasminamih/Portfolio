import React, { FC, useState } from "react";
import styles from "./ErrorMessage.module.scss";
import { F_Open_Sans } from "@/fonts";

const ErrorMessage: FC = () => {
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
            <h2>Sorry</h2>
            <p>
           Something went wrong. Please try again
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
