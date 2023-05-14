import { Html, useProgress } from "@react-three/drei";
import { RotatingLines } from "react-loader-spinner";

const CanvasLoader = () => {
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
       <RotatingLines
  strokeColor="grey"
  strokeWidth="5"
  animationDuration="0.75"
  width="96"
  visible={true}
/>
    </Html>
  );
};

export default CanvasLoader;