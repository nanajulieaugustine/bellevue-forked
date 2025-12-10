"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useState } from "react";

// Liste over interaktive objekters ID'er
const interactiveIds = [
  "foyerbar",
  "billetten",
  "salen",
  "nordbar",
  "sydbar",
  "øvrebar",
  "teresse",
  "balkon",
  "nordtoilet",
  "sydtoilet",
  "handicaptoilet",
  "sydgarderobe",
  "nordgarderobe"
];

const nonInteractiveIds = [
  "facade",
  "facade.001",
  "facade.002",
  "facade.003"
];



function Model({ onMeshClick, setHoveredId }) {
  const { scene } = useGLTF("/kort/bellevue.glb");

  scene.traverse((child) => {
  if (child.isMesh) {
    child.userData.id = child.name;

    const isGlass = child.material.name.includes("Glass");

    if (isGlass) {
      child.material.transparent = true;
      child.material.opacity = 1;
      child.material.transmission = 1;
      child.material.roughness = 0;
      child.material.ior = 1.45;
      child.material.thickness = 1;
    } else {
      child.material.flatShading = true;
      child.material.transparent = true;
      child.material.opacity = 0.8;
      child.material.depthWrite = false;
    }

    //  Deaktiver klik for facade-objekter
    if (nonInteractiveIds.includes(child.name)) {
      child.raycast = () => {};
      return;
    }

    // Deaktiver klik for alt der ikke er interaktivt
    if (!interactiveIds.includes(child.name)) {
      child.raycast = () => {};
    }
  }
});


  return (
    <primitive
      object={scene}
     onPointerDown={(e) => {
            e.stopPropagation();
            const clickedId = e.object.userData.id;
            if (clickedId && interactiveIds.includes(clickedId)) {
                onMeshClick(clickedId);
            }
            }}    
      onPointerOver={(e) => {
        e.stopPropagation();
        const id = e.object.userData.id;
        if (id && interactiveIds.includes(id)) {
          setHoveredId(id);
       
        }
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        const id = e.object.userData.id;
        if (id && interactiveIds.includes(id)) {
          setHoveredId(null);
       
        }
      }}
    />
  );
}

export default function FindRundt() {
  const [activeId, setActiveId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="h-screen relative">

      {/* Infoboks */}
      {activeId && (
        <div className="absolute top-10 right-10 p-4 bg-white shadow-lg rounded-xl z-50">
          <h2 className="font-bold mb-2">Du klikkede på:</h2>
          <p>{activeId}</p>
          <button
            className="mt-4 px-4 py-2 bg-black text-white rounded"
            onClick={() => setActiveId(null)}
          >
            Luk
          </button>
        </div>
      )}

      <div className="absolute h-full w-full">
        <Canvas camera={{ position: [200, 70, 100], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[50, 50, 50]} intensity={10} />
          <directionalLight position={[-50, 50, -50]} intensity={10} />
          <OrbitControls enableZoom={false} />

          <Model
            onMeshClick={(id) => setActiveId(id)}
            setHoveredId={setHoveredId}
          />
        </Canvas>
      </div>
    </div>
  );
}
