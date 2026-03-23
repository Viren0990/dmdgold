import React, { useRef, useEffect, useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, PresentationControls, useGLTF, Loader } from '@react-three/drei';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import * as THREE from 'three';
import { useScreenTexture, paintOrderTracking, paintInventory, paintDashboard, paintBilling, paintProduct } from './ScreenTextures';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

useGLTF.preload('/models/laptop/scene.glb');

const LaptopGroup = () => {
    const groupRef = useRef<THREE.Group>(null);
    const lidRef = useRef<THREE.Group>(null);

    // REFS FOR THE 4 SIDE SCREENS
    const leftScreen1 = useRef<THREE.Mesh>(null);
    const leftScreen2 = useRef<THREE.Mesh>(null);
    const rightScreen1 = useRef<THREE.Mesh>(null);
    const rightScreen2 = useRef<THREE.Mesh>(null);

    const { nodes, materials } = useGLTF('/models/laptop/scene.glb') as any;

    // --- RESPONSIVE LOGIC ---
    const [screenMode, setScreenMode] = React.useState(0);

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
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // --- ROSE GOLD TINT ---
    useEffect(() => {
        if (materials.ComputerFrame) {
            materials.ComputerFrame.color.set('#e8b594');
            materials.ComputerFrame.metalness = 0.8;
            materials.ComputerFrame.roughness = 0.2;
            materials.ComputerFrame.needsUpdate = true;
        }
    }, [materials]);

    // --- CANVAS TEXTURES (coded UI screens) ---
    const texCenter = useScreenTexture(paintDashboard, 960, 540);
    const texInnerLeft = useScreenTexture(paintInventory, 860, 500);
    const texInnerRight = useScreenTexture(paintBilling, 860, 500);
    const texFarLeft = useScreenTexture(paintOrderTracking, 800, 470);
    const texFarRight = useScreenTexture(paintProduct, 800, 470);

    const matCenter = useMemo(() => new THREE.MeshBasicMaterial({ map: texCenter, toneMapped: false, side: THREE.DoubleSide }), [texCenter]);
    const matInnerLeft = useMemo(() => new THREE.MeshBasicMaterial({ map: texInnerLeft, toneMapped: false, side: THREE.DoubleSide }), [texInnerLeft]);
    const matInnerRight = useMemo(() => new THREE.MeshBasicMaterial({ map: texInnerRight, toneMapped: false, side: THREE.DoubleSide }), [texInnerRight]);
    const matFarLeft = useMemo(() => new THREE.MeshBasicMaterial({ map: texFarLeft, toneMapped: false, side: THREE.DoubleSide }), [texFarLeft]);
    const matFarRight = useMemo(() => new THREE.MeshBasicMaterial({ map: texFarRight, toneMapped: false, side: THREE.DoubleSide }), [texFarRight]);

    // --- ANIMATION LOGIC ---
    useGSAP(() => {
        if (!groupRef.current || !lidRef.current) return;

        // --- Robust scroll lock during intro animation ---
        // Blocks wheel, touch, and keyboard scroll so user can't
        // scroll past the ScrollTrigger zone before it's set up
        const preventScroll = (e: Event) => e.preventDefault();
        const preventScrollKeys = (e: KeyboardEvent) => {
            const keys = ['ArrowDown', 'ArrowUp', 'Space', 'PageDown', 'PageUp', 'Home', 'End'];
            if (keys.includes(e.code)) e.preventDefault();
        };

        window.scrollTo(0, 0);
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        window.addEventListener('wheel', preventScroll, { passive: false });
        window.addEventListener('touchmove', preventScroll, { passive: false });
        window.addEventListener('keydown', preventScrollKeys, { passive: false });

        const unlockScroll = () => {
            document.body.style.overflow = '';
            document.documentElement.style.overflow = '';
            window.removeEventListener('wheel', preventScroll);
            window.removeEventListener('touchmove', preventScroll);
            window.removeEventListener('keydown', preventScrollKeys);
        };

        if (leftScreen1.current) gsap.set(leftScreen1.current.position, { x: 0, z: -0.1 });
        if (leftScreen2.current) gsap.set(leftScreen2.current.position, { x: 0, z: -0.1 });
        if (rightScreen1.current) gsap.set(rightScreen1.current.position, { x: 0, z: -0.1 });
        if (rightScreen2.current) gsap.set(rightScreen2.current.position, { x: 0, z: -0.1 });

        const isScrolled = window.scrollY > 100;
        const introDuration = isScrolled ? 0 : 2.0;

        const introTl = gsap.timeline({
            onComplete: () => {
                // Unlock scroll now that ScrollTrigger is about to be set up
                unlockScroll();
                initScrollAnimation();
            }
        });

        introTl
            .to(groupRef.current.position, { y: -1.9, duration: introDuration, ease: 'power3.out' })
            .to(lidRef.current.rotation, { x: -0.2, duration: introDuration, ease: 'power2.inOut' }, isScrolled ? "<" : "-=1.2");

        if (screenMode >= 2) {
            if (leftScreen1.current) {
                introTl.to(leftScreen1.current.position, { x: -30, z: 0.5, duration: 1.0, ease: 'power2.out' }, isScrolled ? "<" : "-=0.5")
                    .to(leftScreen1.current.rotation, { y: 0.2, duration: 1.0, ease: 'power2.out' }, "<");
            }
            if (rightScreen1.current) {
                introTl.to(rightScreen1.current.position, { x: 30, z: 0.5, duration: 1.0, ease: 'power2.out' }, "<")
                    .to(rightScreen1.current.rotation, { y: -0.2, duration: 1.0, ease: 'power2.out' }, "<");
            }
        }

        if (screenMode >= 4) {
            if (leftScreen2.current) {
                introTl.to(leftScreen2.current.position, { x: -56, z: 2, duration: 1.0, ease: 'power2.out' }, "<+0.1")
                    .to(leftScreen2.current.rotation, { y: 0.35, duration: 1.0, ease: 'power2.out' }, "<");
            }
            if (rightScreen2.current) {
                introTl.to(rightScreen2.current.position, { x: 56, z: 2, duration: 1.0, ease: 'power2.out' }, "<")
                    .to(rightScreen2.current.rotation, { y: -0.35, duration: 1.0, ease: 'power2.out' }, "<");
            }
        }

        function initScrollAnimation() {
            ScrollTrigger.getAll().forEach(t => t.kill());

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

            const tl = scrollTl;

            if (screensPos.length > 0) {
                tl.to(screensPos, { x: 0, z: -0.1, duration: 0.5 });
                tl.to(screensRot, { y: 0, duration: 0.5 }, "<");
                tl.to(lidRef.current!.rotation, { x: 1.57, duration: 1 }, ">");
            } else {
                tl.to(lidRef.current!.rotation, { x: 1.57, duration: 1 });
            }

            tl.to(groupRef.current!.position, { y: -6, duration: 1 }, "<")
                .to(groupRef.current!.rotation, { x: 0.2 }, "<");
        }

        // Cleanup: ensure scroll is unlocked on unmount or re-run
        return () => {
            unlockScroll();
        };
    }, [screenMode]);

    return (
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
                    material={matCenter}
                >
                    <planeGeometry args={[29, 16]} />
                </mesh>

                {/* --- SIDE SCREENS (CONDITIONAL) --- */}

                {/* Inner Left - Inventory */}
                {screenMode >= 2 && (
                    <mesh ref={leftScreen1} rotation={[Math.PI, Math.PI, Math.PI]} position={[0, 10.5, -0.2]} scale={[1, -1, 1]} material={matInnerLeft}>
                        <planeGeometry args={[24, 14]} />
                    </mesh>
                )}

                {/* Inner Right - Billing */}
                {screenMode >= 2 && (
                    <mesh ref={rightScreen1} rotation={[Math.PI, Math.PI, Math.PI]} position={[0, 10.5, -0.2]} scale={[1, -1, 1]} material={matInnerRight}>
                        <planeGeometry args={[24, 14]} />
                    </mesh>
                )}

                {/* Far Left - Order Tracking */}
                {screenMode >= 4 && (
                    <mesh ref={leftScreen2} rotation={[Math.PI, Math.PI, Math.PI]} position={[0, 10.5, -0.2]} scale={[1, -1, 1]} material={matFarLeft}>
                        <planeGeometry args={[22, 13]} />
                    </mesh>
                )}

                {/* Far Right - Product */}
                {screenMode >= 4 && (
                    <mesh ref={rightScreen2} rotation={[Math.PI, Math.PI, Math.PI]} position={[0, 10.5, -0.2]} scale={[1, -1, 1]} material={matFarRight}>
                        <planeGeometry args={[22, 13]} />
                    </mesh>
                )}

            </group>
        </group>
    );
};

const HeroScene = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-0 bg-[#FAF9F6]">
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