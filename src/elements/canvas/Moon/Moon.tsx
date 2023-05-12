import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import styles from "./Moon.module.scss"
import CanvasLoader from "../Loader";
import { RotatingLines } from "react-loader-spinner";
const Earth = () => {
  const earth = useGLTF("/moon/scene_moon.glb");

  return (
    <mesh>
      <hemisphereLight intensity={0.1} groundColor="black" />
      <spotLight
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />

      <pointLight intensity={0.3} />
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
        castShadow
        receiveShadow
      />
    </mesh>
  );
};

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
