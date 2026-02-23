import { motion, useMotionValue, useSpring, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const GridBackground = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const { scrollY } = useScroll();

    // Smooth spring physics for fluid movement
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    // Generative Noise values based on scroll and mouse
    const noiseFreq = useTransform(scrollY, [0, 5000], [0.01, 0.05]);
    const distortionScale = useTransform(springX, [-500, 500], [20, 100]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX - window.innerWidth / 2);
            mouseY.set(e.clientY - window.innerHeight / 2);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
            {/* Generative SVG Noise Filter */}
            <svg className="absolute scale-0">
                <defs>
                    <filter id="generative-noise">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.02"
                            numOctaves="3"
                            result="noise"
                        >
                            <animate attributeName="baseFrequency" dur="20s" values="0.01; 0.03; 0.01" repeatCount="indefinite" />
                        </feTurbulence>
                        <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
                    </filter>
                </defs>
            </svg>

            {/* Interactive Fluid Aura 01 */}
            <motion.div
                style={{ x: springX, y: springY, filter: "url(#generative-noise)" }}
                className="absolute top-[10%] left-[20%] w-[60vw] h-[60vw] bg-accent/10 rounded-full blur-[120px] mix-blend-screen opacity-30"
            />
            {/* Interactive Fluid Aura 02 */}
            <motion.div
                style={{ x: springX, y: springY, filter: "url(#generative-noise)" }}
                className="absolute bottom-[0%] right-[10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[150px] mix-blend-screen opacity-20"
            />

            {/* Main Blueprint Grid with subtle noise */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

            {/* Technical HUD Overlay (Macro Grid) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--primary)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--primary)/0.02)_1px,transparent_1px)] bg-[size:200px_200px] mask-radial" />

            {/* Corner Technical Detail */}
            <div className="absolute inset-0 border-[20vw] border-transparent border-t-primary/[0.01] border-l-primary/[0.01] pointer-events-none" />
        </div>
    );
};

export default GridBackground;
