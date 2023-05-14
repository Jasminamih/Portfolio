import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload} from "@react-three/drei";
import styles from "./Moon.module.scss"
import CanvasLoader from "../Loader/Loader";
import Earth from "./Moon";
const EarthCanvas = () => {
    return (
      <div className={styles.moonWrapper}
       
      >
        <Canvas
         className={styles.moon}
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
          <ambientLight intensity={0.1} />
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
            autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Earth />
            <Preload  all />
          </Suspense>
        </Canvas>
      </div>
    );
  };
  
  export default EarthCanvas;
  