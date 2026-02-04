import React, { useRef, useEffect, useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, PresentationControls, useGLTF, useTexture, Loader } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import * as THREE from 'three';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

useGLTF.preload('/models/laptop/scene.glb');
useTexture.preload('/textures/screen1.png');

const LaptopGroup = () => {
    const groupRef = useRef<THREE.Group>(null);
    const lidRef = useRef<THREE.Group>(null);

    // REFS FOR THE 4 NEW SCREENS
    const leftScreen1 = useRef<THREE.Mesh>(null);
    const leftScreen2 = useRef<THREE.Mesh>(null);
    const rightScreen1 = useRef<THREE.Mesh>(null);
    const rightScreen2 = useRef<THREE.Mesh>(null);

    const { nodes, materials } = useGLTF('/models/laptop/scene.glb') as any;

    // --- RESPONSIVE LOGIC ---
    const [screenMode, setScreenMode] = React.useState(0); // 0 = laptop only, 2 = 2 screens, 4 = 4 screens

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1060) {
                setScreenMode(4);
            } else if (width >= 768) {
                setScreenMode(2);
            } else {
                setScreenMode(0);
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- 1. ROSE GOLD TINT ---
    useEffect(() => {
        if (materials.ComputerFrame) {
            materials.ComputerFrame.color.set('#e8b594');
            materials.ComputerFrame.metalness = 0.8;
            materials.ComputerFrame.roughness = 0.2;
            materials.ComputerFrame.needsUpdate = true;
        }
    }, [materials]);

    // --- 2. TEXTURES ---
    const tex1 = useTexture('/textures/screen1.png');
    tex1.flipY = false;
    tex1.colorSpace = THREE.SRGBColorSpace;

    const screenMat = useMemo(() => {
        return new THREE.MeshBasicMaterial({
            map: tex1,
            toneMapped: false,
            side: THREE.DoubleSide
        });
    }, [tex1]);

    // --- 3. ANIMATION LOGIC ---
    useGSAP(() => {
        if (!groupRef.current || !lidRef.current) return;

        // Reset positions initially (checking if refs exist)
        if (leftScreen1.current) gsap.set(leftScreen1.current.position, { x: 0, z: -0.1 });
        if (leftScreen2.current) gsap.set(leftScreen2.current.position, { x: 0, z: -0.1 });
        if (rightScreen1.current) gsap.set(rightScreen1.current.position, { x: 0, z: -0.1 });
        if (rightScreen2.current) gsap.set(rightScreen2.current.position, { x: 0, z: -0.1 });

        const isScrolled = window.scrollY > 100;
        const introDuration = isScrolled ? 0 : 1.5;

        // A. INTRO TIMELINE
        const introTl = gsap.timeline({
            onComplete: () => {
                initScrollAnimation();
            }
        });

        introTl
            .to(groupRef.current.position, { y: -1.9, duration: introDuration, ease: 'power3.out' }) // 1. Laptop Up
            .to(lidRef.current.rotation, { x: -0.2, duration: introDuration, ease: 'power2.inOut' }, isScrolled ? "<" : "-=1.0"); // 2. Lid Open

        // 3. EXPAND SCREENS (Conditional)
        if (screenMode >= 2) {
            if (leftScreen1.current) {
                introTl.to(leftScreen1.current.position, { x: -30, z: 0.5, duration: 0.8, ease: 'power2.out' }, isScrolled ? "<" : "-=0.5")
                    .to(leftScreen1.current.rotation, { y: 0.2, duration: 0.8, ease: 'power2.out' }, "<");
            }
            if (rightScreen1.current) {
                introTl.to(rightScreen1.current.position, { x: 30, z: 0.5, duration: 0.8, ease: 'power2.out' }, "<")
                    .to(rightScreen1.current.rotation, { y: -0.2, duration: 0.8, ease: 'power2.out' }, "<");
            }
        }

        if (screenMode >= 4) {
            if (leftScreen2.current) {
                introTl.to(leftScreen2.current.position, { x: -56, z: 2, duration: 1, ease: 'power2.out' }, "<+0.1")
                    .to(leftScreen2.current.rotation, { y: 0.35, duration: 1, ease: 'power2.out' }, "<");
            }
            if (rightScreen2.current) {
                introTl.to(rightScreen2.current.position, { x: 56, z: 2, duration: 1, ease: 'power2.out' }, "<")
                    .to(rightScreen2.current.rotation, { y: -0.35, duration: 1, ease: 'power2.out' }, "<");
            }
        }


        // Function to initialize ScrollTrigger
        function initScrollAnimation() {
            ScrollTrigger.getAll().forEach(t => t.kill());

            // Collect available screens for the scroll timeline
            const screensPos: THREE.Vector3[] = [];
            const screensRot: THREE.Euler[] = [];

            if (leftScreen1.current) { screensPos.push(leftScreen1.current.position); screensRot.push(leftScreen1.current.rotation); }
            if (rightScreen1.current) { screensPos.push(rightScreen1.current.position); screensRot.push(rightScreen1.current.rotation); }
            if (leftScreen2.current) { screensPos.push(leftScreen2.current.position); screensRot.push(leftScreen2.current.rotation); }
            if (rightScreen2.current) { screensPos.push(rightScreen2.current.position); screensRot.push(rightScreen2.current.rotation); }

            const scrollTl = gsap.timeline({
                scrollTrigger: {
                    trigger: document.body,
                    start: "top top",
                    end: "500px top",
                    scrub: 1,
                    invalidateOnRefresh: true,
                }
            });

            // Base animation
            const tl = scrollTl;

            // Only animate screens if we have any
            if (screensPos.length > 0) {
                tl.to(screensPos, { x: 0, z: -0.1, duration: 0.5 });
                tl.to(screensRot, { y: 0, duration: 0.5 }, "<");
                tl.to(lidRef.current!.rotation, { x: 1.57, duration: 1 }, ">");
            } else {
                // Just close the lid directly if no screens
                tl.to(lidRef.current!.rotation, { x: 1.57, duration: 1 });
            }

            tl.to(groupRef.current!.position, { y: -6, duration: 1 }, "<")
                .to(groupRef.current!.rotation, { x: 0.2 }, "<");
        }

    }, [screenMode]); // Re-run if screenMode changes

    return (
        // CHANGE HERE: Changed starting position from -5 to -3
        // This makes it start closer to the viewport so it appears immediately
        <group ref={groupRef} position={[0, -3, 0]} scale={0.08}>
            {/* BASE */}
            <mesh
                geometry={nodes.Frame_ComputerFrame_0.geometry}
                material={materials.ComputerFrame}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
            />

            {/* LID GROUP */}
            <group ref={lidRef} position={[0, 0.65, -10.3]} rotation={[1.57, 0, 0]}>

                {/* ORIGINAL BEZEL */}
                <mesh
                    geometry={nodes.Screen_ComputerScreen_0.geometry}
                    material={materials.ComputerScreen}
                    position={[0, 0, 0]}
                    rotation={[Math.PI, 0, -Math.PI]}
                    scale={[100, 100, 88.235]}
                />

                {/* --- MAIN CENTER SCREEN --- */}
                <mesh
                    rotation={[Math.PI, Math.PI, Math.PI]}
                    position={[0, 10.5, 0.15]}
                    scale={[1, -1, 1]}
                    material={screenMat}
                >
                    <planeGeometry args={[29, 16]} />
                </mesh>

                {/* --- EMERGING SIDE SCREENS (CONDITIONAL) --- */}

                {/* 2 Screens Mode (Medium + Large) */}
                {screenMode >= 2 && (
                    <>
                        <mesh ref={leftScreen1} rotation={[Math.PI, Math.PI, Math.PI]} position={[0, 10.5, -0.2]} scale={[1, -1, 1]} material={screenMat}>
                            <planeGeometry args={[26, 14]} />
                        </mesh>
                        <mesh ref={rightScreen1} rotation={[Math.PI, Math.PI, Math.PI]} position={[0, 10.5, -0.2]} scale={[1, -1, 1]} material={screenMat}>
                            <planeGeometry args={[26, 14]} />
                        </mesh>
                    </>
                )}

                {/* 4 Screens Mode (Large only) */}
                {screenMode >= 4 && (
                    <>
                        <mesh ref={leftScreen2} rotation={[Math.PI, Math.PI, Math.PI]} position={[0, 10.5, -0.2]} scale={[1, -1, 1]} material={screenMat}>
                            <planeGeometry args={[24, 13]} />
                        </mesh>
                        <mesh ref={rightScreen2} rotation={[Math.PI, Math.PI, Math.PI]} position={[0, 10.5, -0.2]} scale={[1, -1, 1]} material={screenMat}>
                            <planeGeometry args={[24, 13]} />
                        </mesh>
                    </>
                )}

            </group>
        </group>
    );
};

const HeroScene = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-0 bg-[#FAF9F6]">
            {/* PERFORMANCE FIX: Added 'dpr' to prevent lag on high-res screens */}
            <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, 1.5, 7], fov: 40 }} gl={{ antialias: true }}>
                <ambientLight intensity={1} />
                <spotLight position={[10, 10, 10]} intensity={1.5} castShadow />
                <Environment preset="city" environmentIntensity={1} />

                <PresentationControls
                    global
                    polar={[-0.2, 0.2]}
                    azimuth={[-0.4, 0.4]}
                    cursor={true}
                >
                    <Suspense fallback={null}>
                        <LaptopGroup />
                    </Suspense>
                </PresentationControls>

                <ContactShadows position={[0, -2, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#8a7e70" />
            </Canvas>
            <Loader
                containerStyles={{ background: 'transparent' }}
                innerStyles={{ background: 'rgba(255, 255, 255, 0.5)', width: '200px', height: '10px' }}
                barStyles={{ background: '#C6A87C', height: '10px' }}
                dataStyles={{ display: 'none' }}
            />
        </div>
    );
};

export default HeroScene;