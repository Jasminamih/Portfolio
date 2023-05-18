import React, { FC, useState } from "react";
import styles from "./SuccessMessage.module.scss";
import { F_Open_Sans } from "@/fonts";

const SuccessMessage: FC = () => {
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
            <h2>Thank you for reaching out to me!</h2>
            <p>
              I appreciate your interest and taking the time to connect. Your
              message has been received, and I will make sure to respond as soon
              as possible.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SuccessMessage;
