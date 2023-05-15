import React, { Suspense } from "react";
import {Canvas } from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import styles from "./Moon.module.scss"
import CanvasLoader from "../Loader/Loader";
import Moon from "./Moon";

const EarthCanvas = () => {
    return (
      <div className={styles.moonWrapper}
       
      >
        <Canvas
          frameloop="demand"
          dpr={[1, 2]}
          gl={{ preserveDrawingBuffer: true }}
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [-4, 9, 6],
          }}
        >
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
            autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Stage environment={"city"} intensity={0.2}><Moon/></Stage>
          </Suspense>
        </Canvas>
      </div>
    );
  };
  
  export default EarthCanvas;
  