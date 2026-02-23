import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';

const Scene = () => {
    const meshRef = useRef();
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useFrame((state) => {
        const { x, y } = state.mouse;
        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.005;

        // Follow mouse subtly
        meshRef.current.position.x = x * 1.2;
        meshRef.current.position.y = y * 1.2;
    });

    return (
        <>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
            <Float speed={4} rotationIntensity={1} floatIntensity={2}>
                <mesh ref={meshRef} scale={1.5}>
                    <octahedronGeometry args={[1, 0]} />
                    <MeshDistortMaterial
                        color="rgb(var(--accent))"
                        speed={3}
                        distort={0.4}
                        radius={1}
                    />
                </mesh>
            </Float>
        </>
    );
};

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <Scene />
            </Canvas>
        </div>
    );
};

export default Hero3D;
