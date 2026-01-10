import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, TorusKnot, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const Geometries = () => {
    // 1. Torus Knot wireframe - "The Knot"
    // Floating complex shape
    return (
        <group>
            <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
                <TorusKnot args={[0.6, 0.2, 128, 16]} position={[-3, 1, -5]}>
                    <meshStandardMaterial
                        color="#4f46e5"
                        wireframe
                        transparent
                        opacity={0.15}
                    />
                </TorusKnot>
            </Float>

            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                {/* 2. Abstract Icosahedron - "The Core" */}
                <Icosahedron args={[0.8, 0]} position={[3, -1, -2]}>
                    <meshStandardMaterial
                        color="#06b6d4"
                        wireframe
                        transparent
                        opacity={0.15}
                    />
                </Icosahedron>
            </Float>

            <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* 3. Tiny floating "Datapoints" (Spheres) */}
                <points position={[0, 0, -8]}>
                    <sphereGeometry args={[5, 32, 32]} />
                    <pointsMaterial size={0.02} color="#ffffff" transparent opacity={0.1} sizeAttenuation />
                </points>
            </Float>
        </group>
    )
}

const ThreeBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none fade-in-scale">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
                <Geometries />
            </Canvas>
        </div>
    );
};

export default ThreeBackground;
