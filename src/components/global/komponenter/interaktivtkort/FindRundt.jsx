"use client";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import PopOverFindRundt from "./PopOverFindRundt";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

//id'er, der skal kunne klikkes på - er definerert fra objekters navn i Blender
const interactiveIds = [
  "foyerbar",
  "billetkontor",
  "gulv",
  "nordbar",
  "scenen",
  "sydbar",
  "balkon",
  "tagteresse",
  "øvrebar",
  "nordtoilet",
  "sydtoilet",
  "handicaptoilet",
  "sydgarderobe",
  "nordgarderobe",
  "merch",
  "cafeen",
  "foyeren"
];
//blokerer facaderne, så interactiveIds bliver klikbare
const nonInteractiveIds = ["facade", "facade.001", "facade.002", "facade.003"];

function formatIdLabel(id) {
  switch (id) {
    case "nordbar":
    case "sydbar":
    case "foyerbar":
    case "øvrebar":
      return "Barer";

          case "merch":
      return "Merchandise";

    case "scenen":
      return "Salen";

    case "nordtoilet":
    case "sydtoilet":
    case "handicaptoilet":
      return "Toiletter";

    case "nordgarderobe":
    case "sydgarderobe":
      return "Garderobe";

    case "billetkontor":
      return "Billetkontor";

        case "cafeen":
      return "Cafeen";


        case "tagteresse":
      return "Tagteresse";

    default:
      return null;
  }
}

const buttons = interactiveIds.reduce((acc, id) => {
  const label = formatIdLabel(id);
  if (label && !acc.find((b) => b.label === label)) {
    acc.push({ label });
  }
  return acc;
}, []);

function RotateCamera({ controlsRef, targetAngle, onDone }) {
  const { camera } = useThree();
  const currentAngle = useRef(null);

  useFrame(() => {
    if (!controlsRef.current || targetAngle === null) return;

    if (currentAngle.current === null) {
      currentAngle.current = Math.atan2(camera.position.z, camera.position.x);
    }

    // rotation mod target på x-aksen
    currentAngle.current += (targetAngle - currentAngle.current) * 0.1;

    const radius = Math.sqrt(camera.position.x ** 2 + camera.position.z ** 2);
    camera.position.x = Math.cos(currentAngle.current) * radius;
    camera.position.z = Math.sin(currentAngle.current) * radius;

    controlsRef.current.target.set(0, 0, 0);
    controlsRef.current.update();

    //  Gør det muligt stadig at rotere i modellens viewport efter rotationen
    if (Math.abs(targetAngle - currentAngle.current) < 0.01) {
      onDone();
    }
  });

  return null;
}

import * as THREE from "three";
import { useInView } from "framer-motion";

function Model({ onMeshClick, hoveredId, setHoveredId, selectedGroup }) {
  const { scene } = useGLTF("/kort/bellevue.glb");
  const originalY = useRef(new Map());

  useEffect(() => {
    scene.traverse((child) => {
      if (!child.isMesh) return;

      child.userData.id = child.name;

      if (!originalY.current.has(child.name)) {
        originalY.current.set(child.name, child.position.y);
      }

     // Ensure each mesh gets its own material instance
     if (child.material) {
       if (Array.isArray(child.material)) {
         child.material = child.material.map((m) => m.clone());
         child.material.forEach((m) => {
           m.transparent = true;
           m.opacity = 0.8;
           m.depthWrite = false;
           m.needsUpdate = true;
         });
       } else {
         child.material = child.material.clone();
         child.material.transparent = true;
         child.material.opacity = 0.8;
         child.material.depthWrite = false;
         child.material.needsUpdate = true;
       }
     }

      if (
        nonInteractiveIds.includes(child.name) ||
        !interactiveIds.includes(child.name)
      ) {
        child.raycast = () => {};
      }
    });
  }, [scene]);

  useFrame(() => {
    scene.traverse((child) => {
      if (!child.isMesh) return;

      const id = child.userData.id;
      const baseY = originalY.current.get(id);
      if (baseY == null) return;

      const label = formatIdLabel(id);
      const isHovered = hoveredId === id;
      const isActiveGroup = selectedGroup && label === selectedGroup;

      // Hover lift
      const targetY = isHovered ? baseY + 1 : baseY;
      child.position.y += (targetY - child.position.y) * 0.15;

      if (selectedGroup) {
        const targetOpacity = isActiveGroup ? 1 : 0.05;
        child.material.opacity +=
          (targetOpacity - child.material.opacity) * 0.1;

        child.raycast = isActiveGroup
          ? THREE.Mesh.prototype.raycast
          : () => {};
      } else {
        child.material.opacity += (0.8 - child.material.opacity) * 0.1;
        if (interactiveIds.includes(id)) {
          child.raycast = THREE.Mesh.prototype.raycast;
        }
      }
    });
  });

  return (
    <primitive
      object={scene}
      className="cursor-pointer"
      onPointerDown={(e) => {
        e.stopPropagation();
        const clickedId = e.object.userData.id;
        const label = formatIdLabel(clickedId);

      if (
      clickedId &&
      interactiveIds.includes(clickedId) &&
      (!selectedGroup || label === selectedGroup)
    ) {
      onMeshClick(clickedId);
    }

      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        const id = e.object.userData.id;
        const label = formatIdLabel(id);

        // Allow hover if no group is selected, or if this mesh belongs to the selected group
        if (id && interactiveIds.includes(id) && (!selectedGroup || label === selectedGroup)) {
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

export default function FindRundt({ item }) {
  const containerRef = useRef(null);
  const [direction, setDirection] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [activeHeading, setActiveHeading] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
const [selectedGroup, setSelectedGroup] = useState(null);
  const [showLottie, setShowLottie] = useState(false);

  const isInView = useInView(containerRef, {
  amount: 0.5, // fx 50% synlig
});

  // Lottie animation effect
  useEffect(() => {
  if (!isInView) return;

  setShowLottie(true);

  const timer = setTimeout(() => {
    setShowLottie(false);
  }, 4000);

  return () => clearTimeout(timer);
}, [isInView]);



  // Her filtrerer vi item baseret på clickedId
  const activeItem = activeId ? item.find((i) => i.objekt === activeId) : null;

  function TrackHeading({ setActiveHeading }) {
    const { camera } = useThree();
    const prevHeading = useRef(null);

    useFrame(() => {
      const angle = Math.atan2(camera.position.z, camera.position.x);

      const northAngle = -Math.PI / 2;
      const southAngle = Math.PI / 2;
      const tolerance = (30 * Math.PI) / 180;

      let newHeading = null;

      if (Math.abs(angle - northAngle) < tolerance) {
        newHeading = "north";
      } else if (Math.abs(angle - southAngle) < tolerance) {
        newHeading = "south";
      }

      if (newHeading !== prevHeading.current) {
        prevHeading.current = newHeading;
        setActiveHeading(newHeading);
      }
    });

    return null;
  }

  const controlsRef = useRef();

  const targetAngle =
    direction === "north"
      ? -Math.PI / 2
      : direction === "south"
      ? Math.PI / 2
      : null;

  return (
    <>
    <div className="h-screen relative flex" ref={containerRef}>

        {/* Infoboks */}
        <PopOverFindRundt
          item={activeItem}
          activeId={activeId}
          setActiveId={setActiveId}
        />

        {/* Nord */}
        <button
          className="absolute top-20 right-20 rotate-90 z-50 hover:scale-110 transition-all duration-300"
          onClick={() => setDirection("north")}
        >
          <h3
            className={`${
              activeHeading === "north" ? "bellevueblaa-600" : ""
            } underline`}
          >
            Nord
          </h3>
        </button>

        {/* Syd */}
        <button
          className="absolute bottom-20 left-20 -rotate-90 z-50 hover:scale-110 transition-all duration-300"
          onClick={() => setDirection("south")}
        >
          <h3
            className={`${
              activeHeading === "south" ? "bellevueblaa-600" : ""
            } underline`}
          >
            Syd
          </h3>
        </button>

        {selectedGroup && (
          <button
            onClick={() => setSelectedGroup(null)}
            className="absolute top-15 right-130 z-50 text-(--hvid) bg-(--moerkblaa-600) rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
            title="Tilbage til oversigt"
          >
            ✕
          </button>
        )}

          {showLottie && (
        <DotLottieReact
          src="https://lottie.host/b3026a43-db70-4b8d-a4d9-3422f1669b6f/shENEAkoS3.lottie"
          autoplay
          loop
          className="absolute inset-0 z-50 pointer-events-none w-100 h-100 top-50 left-80"
        />
      )}

        <Canvas camera={{ position: [200, 70, 10], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[50, 50, 50]} intensity={10} />
          <directionalLight position={[-50, 50, -50]} intensity={10} />
          <OrbitControls ref={controlsRef} enableZoom={false} />
          <RotateCamera
            controlsRef={controlsRef}
            targetAngle={targetAngle}
            onDone={() => setDirection(null)}
          />
          <TrackHeading setActiveHeading={setActiveHeading} />

         <Model
        onMeshClick={(id) => {
          const label = formatIdLabel(id);
          setActiveId(id);
          setSelectedGroup(label);
        }}
        hoveredId={hoveredId}
        setHoveredId={setHoveredId}
        selectedGroup={selectedGroup}
      />
        </Canvas>

         {/* BUNDKNAPPER */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-50 flex flex-col md:flex-row gap-3 bg-white/80 backdrop-blur px-4 py-3 rounded-full shadow-lg">
        {buttons.map(({ label }) => (
          <button
            key={label}
            onClick={() =>
              setSelectedGroup((prev) => (prev === label ? null : label))
            }
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300
              ${
                selectedGroup === label
                  ? "bg-(--moerkblaa-600) text-white scale-105"
                  : "bg-white hover:bg-gray-100"
              }`}
          >
            {label}
          </button>
        ))}
      </div>
      </div>
    </>
  );
}
