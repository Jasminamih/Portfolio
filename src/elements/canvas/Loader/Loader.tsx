import { Html, useProgress } from "@react-three/drei";
import { RotatingLines } from "react-loader-spinner";
import styles from "./Loader.module.scss"
const CanvasLoader = () => {
  return (
    <Html
      as="div"
      center
      className={styles.loaderWrapper}

    >
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.30"
        width="54"
        visible={true}
      />
    </Html>
  );
};

export default CanvasLoader;
