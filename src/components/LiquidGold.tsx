'use client';

import { Canvas } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere, Float, Environment, Lightformer } from '@react-three/drei';

export default function LiquidGold() {
    return (
        <div className="h-full w-full">
            <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}> {/* dpr makes it sharper on retina screens */}

                {/* 1. Ambient Light: Raise the base brightness so shadows aren't pitch black */}
                <ambientLight intensity={2} />

                {/* 2. Spot Light: Adds a strong highlight on the top right */}
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} castShadow />

                <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                    <Sphere args={[1, 64, 64]} scale={1.6}>
                        <MeshDistortMaterial
                            color="#F5E0B6"    // CHANGED: Much lighter "Champagne" color
                            attach="material"
                            distort={0.3}      // LOWERED: Less "lumpy", more "fluid"
                            speed={2}
                            roughness={0.1}    // Ultra polished
                            metalness={1.0}    // 100% Metal
                            bumpScale={0.005}
                            clearcoat={1}      // Adds a layer of "varnish" for extra shine
                            clearcoatRoughness={0.1}
                        />
                    </Sphere>
                </Float>

                {/* 3. The Environment: "City" provides bright white reflections (windows/lights) */}
                {/* We reduce background blur to keep reflections sharp */}
                <Environment preset="city">
                    {/* Optional: Add extra light panels behind the scenes to force reflections */}
                    <Lightformer intensity={4} rotation-x={Math.PI / 2} position={[0, 5, -9]} scale={[10, 10, 1]} />
                    <Lightformer intensity={2} rotation-y={Math.PI / 2} position={[-5, 1, -1]} scale={[10, 2, 1]} />
                </Environment>
            </Canvas>
        </div>
    );
}