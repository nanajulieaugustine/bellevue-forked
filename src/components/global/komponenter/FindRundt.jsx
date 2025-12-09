"use client";

import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useState } from "react";
import PrimaryButton from "../knapper/PrimaryButton";

function Model() {
  const { scene } = useGLTF("/kort/foyer_stueplan.glb");

  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.flatShading = true;
      child.material.transparent = true;
      child.material.opacity = 0.8;
      child.material.depthWrite = false;
      child.material.color.set("#bfbfbf");
    }
  });

  return <primitive object={scene} />;
}

export default function FindRundt() {
  const [rotation, setRotation] = useState([0, 0, 0]);

  const views = {
    front: [0, 0, 0],
    north: [0, Math.PI / 2, 0],
    south: [0, -Math.PI / 2, 0],
  };

  return (
    <section className="h-screen relative">
      <div className="absolute z-10 top-4 left-4 flex gap-3">
        <PrimaryButton onClick={() => setRotation(views.front)}>Front</PrimaryButton>
        <PrimaryButton onClick={() => setRotation(views.north)}>Nord</PrimaryButton>
        <PrimaryButton onClick={() => setRotation(views.south)}>Syd</PrimaryButton>
      </div>

      <div className="absolute left-20 h-full w-full">
        <Canvas camera={{ position: [150, 20, 90], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[50, 50, 50]} intensity={10} />
          <directionalLight position={[-50, 50, -50]} intensity={10} />
          <OrbitControls enableZoom={false} />

          {/* Roter hele scenen efter valgt view */}
          <group rotation={rotation}>
            <Model />
          </group>
        </Canvas>
      </div>
    </section>
  );
}