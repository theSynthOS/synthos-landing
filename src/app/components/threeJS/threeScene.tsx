"use client"
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { EthModel } from "./EthModel";
import { ScrollControls } from "@react-three/drei";


export function ThreeScene() {
    return (
        <Canvas>
            <ambientLight intensity={1} />
            <Environment preset="sunset" />
            <ScrollControls pages={3} damping={0.25}>
                <EthModel />
            </ScrollControls>
            <OrbitControls enableZoom={true} />
        </Canvas>
        
    )
}