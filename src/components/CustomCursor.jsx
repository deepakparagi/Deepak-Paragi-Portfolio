import { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';

const Particle = ({ x, y }) => (
    <motion.div
        initial={{ opacity: 0.8, scale: 1, x: x, y: y }}
        animate={{ opacity: 0, scale: 0, x: x + (Math.random() - 0.5) * 50, y: y + (Math.random() - 0.5) * 50 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed w-1 h-1 bg-accent rounded-full pointer-events-none z-[9998]"
        style={{ translateX: "-50%", translateY: "-50%" }}
    />
);

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [particles, setParticles] = useState([]);

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            // Generate particles
            if (Math.random() > 0.7) {
                const newParticle = { id: Date.now(), x: e.clientX, y: e.clientY };
                setParticles(prev => [...prev.slice(-15), newParticle]);
            }

            if (!isVisible) setIsVisible(true);
        };

        const handleHover = (e) => {
            const isClickable = e.target.closest('a, button, [role="button"], .magnetic-target');
            setIsHovered(!!isClickable);
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleHover);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleHover);
        };
    }, [isVisible]);

    useEffect(() => {
        const timer = setInterval(() => {
            setParticles(prev => prev.filter(p => Date.now() - p.id < 1000));
        }, 100);
        return () => clearInterval(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <>
            <AnimatePresence>
                {particles.map(p => (
                    <Particle key={p.id} x={p.x} y={p.y} />
                ))}
            </AnimatePresence>

            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-accent pointer-events-none z-[9999] mix-blend-difference hidden md:block"
                style={{
                    x: springX,
                    y: springY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    scale: isHovered ? 2.5 : 1,
                    backgroundColor: isHovered ? 'rgb(var(--accent))' : 'transparent',
                    borderWidth: isHovered ? 0 : 1
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            />
        </>
    );
};

export default CustomCursor;
