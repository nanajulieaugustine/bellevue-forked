"use client";

import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import PopOverFindRundt from "./PopOverFindRundt";
import PrimaryButton from "../knapper/PrimaryButton";

//id'er, der skal kunne klikkes på - er definerert fra objekters navn i Blender
const interactiveIds = [
  "foyerbar", "billetkontor", "gulv", "nordbar", "sydbar", "balkon", "tagteresse",
  "øvrebar", "nordtoilet", "sydtoilet",
  "handicaptoilet", "sydgarderobe", "nordgarderobe"
];
//blokerer facaderne, så interactiveIds bliver klikbare
const nonInteractiveIds = ["facade", "facade.001", "facade.002", "facade.003"];

function RotateCamera({ controlsRef, targetAngle, onDone }) {
  const { camera } = useThree();
  const currentAngle = useRef(null);

  useFrame(() => {
    if (!controlsRef.current || targetAngle === null) return;

    if (currentAngle.current === null) {
      currentAngle.current = targetAngle;
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

function Model({ onMeshClick, hoveredId, setHoveredId, selected }) {
  const { scene } = useGLTF("/kort/bellevue.glb");
  const originalPositions = useRef(new Map());

  useEffect(() => {
    scene.traverse((child) => {
      if (!child.isMesh) return;

      child.userData.id = child.name;

      // Gem original Y-position
      if (!originalPositions.current.has(child.name)) {
        originalPositions.current.set(child.name, child.position.y);
      }

      const isGlass = child.material.name.includes("Glass");
      if (isGlass) {
        child.material.transparent = true;
        child.material.opacity = 1;
      } else {
        child.material.flatShading = true;
        child.material.transparent = true;
        child.material.opacity = 0.8;
        child.material.depthWrite = false;
      }

      // Deaktivér objekter, der ikke skal være interaktive
      if (nonInteractiveIds.includes(child.name) || !interactiveIds.includes(child.name)) {
        child.raycast = () => {};
      }
    });
  }, [scene]);

  useFrame(() => {
    scene.traverse((child) => {
      if (!child.isMesh) return;

      const id = child.userData.id;
      const originalY = originalPositions.current.get(id);
      if (originalY == null) return;

      // Hover animation
      const isHovered = hoveredId === id;
      const targetY = isHovered ? originalY + 1 : originalY;
      child.position.y += (targetY - child.position.y) * 0.15;

      const label = formatIdLabel(id);
      const isSelectedGroup = selected && label === formatIdLabel(selected);

      if (selected) {
        if (isSelectedGroup) {
          child.material.opacity = 1;
          child.visible = true;
          // Aktiver raycast på den valgte gruppe
          child.raycast = THREE.Mesh.prototype.raycast;
        } else {
          child.material.opacity = 0.05;
          child.visible = true;
          child.raycast = () => {}; // fjern interaktivitet
        }
      } else {
        // Ingen selection: vis alle normalt
        child.material.opacity = child.material.name.includes("Glass") ? 1 : 0.8;
        child.visible = true;
        if (interactiveIds.includes(id)) {
          child.raycast = THREE.Mesh.prototype.raycast; // aktiver raycast på alle interaktive
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
          (!selected || label === formatIdLabel(selected))
        ) {
          onMeshClick(clickedId);
        }
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        const id = e.object.userData.id;
        const label = formatIdLabel(id);

        if (id && interactiveIds.includes(id) && (!selected || label === formatIdLabel(selected))) {
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




function formatIdLabel(id) {
  switch(id) {
    case "nordbar":
    case "sydbar":
    case "foyerbar":
    case "øvrebar": return "Barer";

    case "gulv":
    case "balkon": return "Salen";

    case "nordtoilet":
    case "sydtoilet":
    case "handicaptoilet": return "Toiletter";

    case "nordgarderobe":
    case "sydgarderobe": return "Garderobe";

    case "billetkontor": return "Billetkontor";
  }
}

//  array med unikke knapper baseret på formatIdLabel
const buttons = interactiveIds.reduce((acc, id) => {
  const label = formatIdLabel(id);
  if (label && !acc.find((b) => b.label === label)) {
    acc.push({ id, label });
  }
  return acc;
}, []);





export default function FindRundt() {
  const [direction, setDirection] = useState(null);
  const [activeId, setActiveId] = useState(null);
  const [activeHeading, setActiveHeading] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [select, setSelected] = useState(null)


  function TrackHeading({ camera, setActiveHeading }) {
  const prevHeading = useRef(null);

  useFrame(() => {
    if (!camera) return;

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

    // Kun opdater state hvis heading har ændret sig, så der ikke sker rerender
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
          <div className="bg-(--moerkblaa-600) py-20 mt-20">
        <section className="flex flex-col gap-8 items-center">
          <h3 className="beige-100">Find rundt - helt enkelt</h3>
          <p className="text-(--beige-100) text-center max-w-xl">
            Gå på opdagelse i vores interaktive kort og se Bellevue Teatret
            hjemmefra. Her kan du nemt orientere dig, finde din plads og få et
            trygt overblik, før du ankommer.
          </p>
        </section>
      </div>
    <div className="h-screen relative flex">
      <div className="flex flex-col w-fit gap-10 sticky p-15">
        {buttons.map(({ id, label }) => (
            <PrimaryButton key={id} onClick={() => setSelected(id)}>
            {label}
            </PrimaryButton>
        ))}
        </div>




         {/* Infoboks */}
       <PopOverFindRundt activeId={activeId} setActiveId={setActiveId}/>

      {/* Nord */}
      <button
        className="absolute top-20 right-20 rotate-90 z-50"
        onClick={() => setDirection("north")}
      >
        <h3 className={`${activeHeading === "north" ? "bellevueblaa-600" : ""} underline`}>
        Nord
        </h3>
      </button>

      {/* Syd */}
      <button
        className="absolute bottom-20 left-70 -rotate-90 z-50"
        onClick={() => setDirection("south")}
      >
        <h3 className={`${activeHeading === "south" ? "bellevueblaa-600" : ""} underline`}>
        Syd
        </h3>
      </button>

      {select && (
  <button
    onClick={() => setSelected(null)}
    className="absolute top-15 right-170 z-50 text-(--hvid) bg-(--moerkblaa-600) rounded-full w-10 h-10 flex items-center justify-center shadow-lg"
    title="Tilbage til oversigt"
  >
    ✕
  </button>
)}


    <Canvas camera={{ position: [200, 70, 10], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[50, 50, 50]} intensity={10} />
        <directionalLight position={[-50, 50, -50]} intensity={10} />
        <OrbitControls ref={controlsRef} enableZoom={false} />
        <RotateCamera controlsRef={controlsRef} targetAngle={targetAngle} onDone={() => setDirection(null)} />
        <TrackHeading camera={controlsRef.current?.object} setActiveHeading={setActiveHeading} />
        <Model
            onMeshClick={setActiveId}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
            selected={select}
        />


    </Canvas>

    </div>
    </>
  );
}
