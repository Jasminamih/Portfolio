import React, { Suspense, useEffect, useState } from "react";
import {Canvas } from "@react-three/fiber";
import {OrbitControls, Stage} from "@react-three/drei";
import styles from "./Moon.module.scss"
import CanvasLoader from "../Loader/Loader";
import { Model } from "./Moon";
// import Moon from "./Moon";

const EarthCanvas = () => {




  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event:any) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
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
          }}
        >
           <Suspense fallback={<CanvasLoader />}> 
            <OrbitControls
            autoRotate
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <Stage><Model isMobile={isMobile}/></Stage>
         </Suspense> 
        </Canvas>
      </div>
    );
  };
  
  export default EarthCanvas;
  