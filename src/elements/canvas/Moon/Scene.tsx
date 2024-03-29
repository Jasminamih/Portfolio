/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 scene.gltf --transform
Author: Akshat (https://sketchfab.com/shooter24994)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/moon-4db2273f6dd943b8ad7fa5e3b1b2431a
Title: Moon
*/


import * as THREE from "three";
import React from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Sphere_Material002_0: THREE.Mesh;
  };
  materials: {
    ["Material.002"]: THREE.MeshStandardMaterial;
  };
};

type ModelProps = JSX.IntrinsicElements["group"] & {
  isMobile: boolean;
};
 function Scene(props: ModelProps) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Sphere_Material002_0.geometry} material={materials['Material.002']} rotation={[-Math.PI / 2, 0, 0]} scale={100} />
    </group>
  );
};

useGLTF.preload('/scene-transformed.glb');

export default Scene;


