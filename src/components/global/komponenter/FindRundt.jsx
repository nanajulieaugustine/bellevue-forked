"use client";

import { Canvas } from "@react-three/fiber";
import { PositionPoint, useGLTF } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/kort/foyer_stueplan.glb");

  scene.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.flatShading = true;

      child.material.transparent = true; // Gør opacity muligt
      child.material.opacity = 0.8; // 50% gennemsigtighed

      child.material.depthWrite = false; // Forhindrer "dark artifacts"
      child.material.color.set("#bfbfbf"); // Din grå farve
    }
  });

  return <primitive object={scene} />;
}

export default function FindRundt() {
  return (
    <section className="h-screen relative">
      <div className="absolute left-20 h-full w-full">
        <Canvas camera={{ position: [150, 20, 90], fov: 45 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[50, 50, 50]} intensity={10} />
          <directionalLight position={[-50, 50, -50]} intensity={10} />
          <Model />
        </Canvas>
      </div>
    </section>
  );
}
