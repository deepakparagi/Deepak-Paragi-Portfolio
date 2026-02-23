import { motion, useScroll, useVelocity, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const KineticText = ({ children, className }) => {
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const [isHovered, setIsHovered] = useState(false);

    // Smooth the velocity values
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });

    // Map velocity to effects
    const skew = useTransform(smoothVelocity, [-1000, 1000], [-15, 15]);
    const scaleX = useTransform(smoothVelocity, [-1000, 0, 1000], [1.15, 1, 1.15]);

    // Chromatic Aberration (RGB Split)
    const offsetR = useTransform(smoothVelocity, [-1000, 1000], [-5, 5]);
    const offsetB = useTransform(smoothVelocity, [-1000, 1000], [5, -5]);
    const rgbOpacity = useTransform(smoothVelocity, [-1000, -100, 0, 100, 1000], [0.6, 0.4, 0, 0.4, 0.6]);

    // Ghost Trails based on velocity
    const ghostOpacity = useTransform(smoothVelocity, [-1000, -500, 0, 500, 1000], [0.3, 0.1, 0, 0.1, 0.3]);
    const ghostOffset1 = useTransform(smoothVelocity, [-1000, 1000], [-15, 15]);
    const ghostOffset2 = useTransform(smoothVelocity, [-1000, 1000], [-30, 30]);

    return (
        <div
            className="relative group cursor-none"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Ghost Trail 2 (Back) */}
            <motion.div
                style={{ skewX: skew, scaleX, x: ghostOffset2, opacity: ghostOpacity }}
                className={`absolute inset-0 text-primary opacity-0 pointer-events-none select-none blur-sm ${className}`}
            >
                {children}
            </motion.div>

            {/* Ghost Trail 1 (Middle) */}
            <motion.div
                style={{ skewX: skew, scaleX, x: ghostOffset1, opacity: ghostOpacity }}
                className={`absolute inset-0 text-primary opacity-0 pointer-events-none select-none blur-[2px] ${className}`}
            >
                {children}
            </motion.div>

            {/* Red Layer (Chromatic) */}
            <motion.div
                style={{ skewX: skew, scaleX, x: offsetR, opacity: rgbOpacity }}
                className={`absolute inset-0 text-red-500/50 mix-blend-screen pointer-events-none select-none ${className}`}
            >
                {children}
            </motion.div>

            {/* Blue Layer (Chromatic) */}
            <motion.div
                style={{ skewX: skew, scaleX, x: offsetB, opacity: rgbOpacity }}
                className={`absolute inset-0 text-blue-500/50 mix-blend-screen pointer-events-none select-none ${className}`}
            >
                {children}
            </motion.div>

            {/* Main Content with Glitch Mask on Hover */}
            <motion.div
                style={{ skewX: skew, scaleX }}
                animate={isHovered ? {
                    clipPath: [
                        "inset(0% 0% 0% 0%)",
                        "inset(10% 0% 50% 0%)",
                        "inset(80% 0% 5% 0%)",
                        "inset(0% 0% 0% 0%)"
                    ],
                    x: [0, -2, 2, 0]
                } : { clipPath: "inset(0% 0% 0% 0%)", x: 0 }}
                transition={isHovered ? {
                    duration: 0.2,
                    repeat: Infinity,
                    repeatType: "reverse"
                } : { duration: 0.4 }}
                className={`will-change-transform origin-left relative z-10 ${className}`}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default KineticText;
