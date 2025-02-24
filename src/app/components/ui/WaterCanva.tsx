"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import WaterBackground from "../threeJS/WaterBackground";

const WaterCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 w-full h-full">
      <Canvas camera={{ position: [0, 0, 2] }}>
        <Suspense fallback={null}>
          <WaterBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default WaterCanvas;
