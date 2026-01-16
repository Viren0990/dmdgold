'use client';

import { useRef } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, RoundedBox, Environment, Float, PresentationControls, ContactShadows } from '@react-three/drei';
import Image from 'next/image';

function LaptopModel() {
    const group = useRef<THREE.Group>(null);
    const lidRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (lidRef.current) {
            lidRef.current.rotation.x = THREE.MathUtils.lerp(lidRef.current.rotation.x, -0.25, 0.05);
        }
    });

    return (
        <group ref={group} position={[0, -1.5, 0]}>
            {/* ... Base and Keyboard code remains exactly the same ... */}
            <RoundedBox args={[3.4, 0.15, 2.4]} radius={0.08} smoothness={4}>
                <meshStandardMaterial color="#2D2D2D" roughness={0.3} metalness={0.9} />
            </RoundedBox>

            <mesh position={[0, 0.08, 0.1]} rotation={[-Math.PI / 2, 0, 0]}>
                <planeGeometry args={[2.8, 1.2]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.8} metalness={0.3} />
            </mesh>
            {/* ... (Keep your existing keyboard keys logic here) ... */}


            {/* 2. The Lid Group */}
            <group ref={lidRef} position={[0, 0.075, -1.2]} rotation={[Math.PI / 2, 0, 0]}>

                <group position={[0, 1.2, 0]}>
                    {/* Back of Lid */}
                    <RoundedBox args={[3.4, 2.4, 0.08]} radius={0.08} smoothness={4}>
                        <meshStandardMaterial color="#2D2D2D" roughness={0.2} metalness={0.95} />
                    </RoundedBox>

                    {/* Logo */}
                    <mesh position={[0, 0, -0.045]} rotation={[0, Math.PI, 0]}>
                        <circleGeometry args={[0.15, 32]} />
                        <meshStandardMaterial color="#D4AF37" roughness={0.1} metalness={1} />
                    </mesh>

                    {/* Screen Bezel */}
                    <RoundedBox args={[3.2, 2.2, 0.02]} radius={0.04} smoothness={4} position={[0, 0, 0.05]}>
                        <meshStandardMaterial color="#1a1a1a" roughness={0.3} metalness={0.8} />
                    </RoundedBox>

                    {/* The Black Screen Mesh (Background for the HTML) */}
                    <mesh position={[0, 0, 0.065]}>
                        <planeGeometry args={[2.9, 1.9]} />
                        <meshStandardMaterial color="#000000" roughness={0.1} metalness={0.5} />
                    </mesh>

                    {/* Camera dot */}
                    <mesh position={[0, 1.0, 0.065]}>
                        <circleGeometry args={[0.02, 16]} />
                        <meshStandardMaterial color="#222222" roughness={0.2} metalness={0.8} />
                    </mesh>

                    {/* 3. THE FIXED HTML SCREEN */}
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={1}
                        position={[0, 0, 0.09]}
                        rotation={[0, 0, 0]} /* FIX: Set to 0 so it lays flat against the lid */
                        scale={[0.0025, 0.0025, 0.0025]} /* FIX: Precision scaling (2.9 units / 1160px) */
                        occlude
                    >
                        {/* FIX: Doubled dimensions (1160x760) for high-res sharpness, matches 2.9/1.9 aspect ratio */}
                        <div className="w-[1160px] h-[760px] origin-center bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-lg overflow-hidden shadow-2xl flex flex-col">

                            {/* Screen Header Bar */}
                            {/* FIX: Increased padding and icon sizes to match new resolution */}
                            <div className="flex items-center gap-3 px-6 py-4 bg-black/30">
                                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                <span className="ml-6 text-[#D4AF37] text-lg font-serif tracking-widest">DMD GOLD COLLECTION</span>
                            </div>

                            {/* Jewelry Image */}
                            <div className="flex-1 relative">
                                <Image
                                    src="/jewelry.png"
                                    alt="Luxury Jewelry"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                {/* Text overlay */}
                                <div className="absolute bottom-10 left-10 right-10">
                                    <h2 className="text-white text-5xl font-serif mb-2">Timeless Elegance</h2>
                                    <p className="text-gray-300 text-xl tracking-wider">Pure 24K Gold Collection</p>
                                </div>
                            </div>
                        </div>
                    </Html><Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={1}
                        position={[0, 0, 0.07]}
                        rotation={[0, 0, 0]} /* FIX: Set to 0 so it lays flat against the lid */
                        scale={[0.0025, 0.0025, 0.0025]} /* FIX: Precision scaling (2.9 units / 1160px) */
                        occlude
                    >
                        {/* FIX: Doubled dimensions (1160x760) for high-res sharpness, matches 2.9/1.9 aspect ratio */}
                        <div className="w-[1160px] h-[760px] origin-center bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-lg overflow-hidden shadow-2xl flex flex-col">

                            {/* Screen Header Bar */}
                            {/* FIX: Increased padding and icon sizes to match new resolution */}
                            <div className="flex items-center gap-3 px-6 py-4 bg-black/30">
                                <div className="w-4 h-4 rounded-full bg-red-500"></div>
                                <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
                                <div className="w-4 h-4 rounded-full bg-green-500"></div>
                                <span className="ml-6 text-[#D4AF37] text-lg font-serif tracking-widest">DMD GOLD COLLECTION</span>
                            </div>

                            {/* Jewelry Image */}
                            <div className="flex-1 relative">
                                <Image
                                    src="/jewelry.png"
                                    alt="Luxury Jewelry"
                                    fill
                                    className="object-cover"
                                    priority
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                {/* Text overlay */}
                                <div className="absolute bottom-10 left-10 right-10">
                                    <h2 className="text-white text-5xl font-serif mb-2">Timeless Elegance</h2>
                                    <p className="text-gray-300 text-xl tracking-wider">Pure 24K Gold Collection</p>
                                </div>
                            </div>
                        </div>
                    </Html>
                </group>
            </group>

            {/* Hinge detail */}
            <mesh position={[0, 0.05, -1.15]} rotation={[0, 0, Math.PI / 2]}>
                <cylinderGeometry args={[0.05, 0.05, 2.8, 16]} />
                <meshStandardMaterial color="#1a1a1a" roughness={0.4} metalness={0.8} />
            </mesh>
        </group>
    );
}
export default function LaptopCanvas() {
    return (
        <div className="w-full h-full">
            <Canvas camera={{ position: [0, 2, 8], fov: 35 }}>
                {/* Lighting */}
                <Environment preset="city" />
                <ambientLight intensity={0.8} />
                <spotLight position={[5, 5, 5]} intensity={0.5} castShadow />

                {/* Controls: Allows user to rotate/tilt the object */}
                <PresentationControls
                    global
                    rotation={[0.13, 0.1, 0]}
                    polar={[-0.4, 0.2]}
                    azimuth={[-1, 1]}
                    snap={true}
                >
                    <Float rotationIntensity={0.3} floatIntensity={0.3}>
                        <LaptopModel />
                    </Float>
                </PresentationControls>

                {/* Soft shadow underneath */}
                <ContactShadows position={[0, -2.4, 0]} opacity={0.5} scale={12} blur={2} far={4} />
            </Canvas>
        </div>
    );
}