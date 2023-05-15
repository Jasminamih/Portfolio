import * as THREE from "three";
import React, { useRef, useEffect, useState } from "react";

const ThreeScene = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      90,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    const starGeometry = new THREE.SphereGeometry(5000, 64, 64);
    const starMaterial = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load("/stars.jpg"),
      side: THREE.BackSide,
    });
    const starField = new THREE.Mesh(starGeometry, starMaterial);
    scene.add(starField);

    const starCount = Math.floor(Math.random() * 5000) + 1000;
    const starGeometrySmall = new THREE.SphereGeometry(0.2, 16, 16);
    const starMaterialSmall = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const stars: any[] = [];
    for (let i = 0; i < starCount; i++) {
      const star = new THREE.Mesh(starGeometrySmall, starMaterialSmall);
      const x = THREE.MathUtils.randFloatSpread(2000);
      const y = THREE.MathUtils.randFloatSpread(2000);
      const z = THREE.MathUtils.randFloatSpread(2000);
      star.position.set(x, y, z);
      stars.push(star);
      scene.add(star);
    }

    // Render the scene and animate the stars
    function animate() {
      requestAnimationFrame(animate);
      starField.rotation.y += 0.001;
      for (let i = 0; i < starCount; i++) {
        const star = stars[i];
        star.position.z += 0.5;
        if (star.position.z > 1000) {
          star.position.z = THREE.MathUtils.randFloatSpread(-2000);
        }
      }

      renderer.render(scene, camera);
    }
    animate();

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener("resize", onWindowResize, false);

    return () => {
      window.removeEventListener("resize", onWindowResize, false);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div id="three-container">
      {isLoaded === true ? (
        <div ref={mountRef} />
      ) : (
        <h1 style={{ color: "black", fontSize: "100px" }}>heloo</h1>
      )}
    </div>
  );
};

export default ThreeScene;
