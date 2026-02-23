import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GlobalGlitch = () => {
    const [glitchActive, setGlitchActive] = useState(false);

    useEffect(() => {
        const trigger = () => {
            setGlitchActive(true);
            setTimeout(() => setGlitchActive(false), 200);

            // Random interval between 5-15 seconds
            const nextTrigger = Math.random() * 10000 + 5000;
            setTimeout(trigger, nextTrigger);
        };

        const initialDelay = Math.random() * 5000;
        setTimeout(trigger, initialDelay);
    }, []);

    return (
        <div className="fixed inset-0 z-[9999] pointer-events-none mix-blend-overlay">
            {/* Rare High-Intensity Glitch */}
            {glitchActive && (
                <motion.div
                    className="absolute inset-0 bg-accent/5"
                    animate={{
                        clipPath: [
                            "inset(10% 0 10% 0)",
                            "inset(40% 0 40% 0)",
                            "inset(70% 0 10% 0)",
                            "inset(0 0 0 0)"
                        ],
                        x: [-10, 10, -5, 0],
                        filter: ["hue-rotate(0deg)", "hue-rotate(90deg)", "hue-rotate(-90deg)", "hue-rotate(0deg)"]
                    }}
                    transition={{ duration: 0.2 }}
                />
            )}

            {/* Continuous "Heartbeat" Pulse */}
            <motion.div
                className="absolute inset-0 bg-primary/[0.02]"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    filter: ["brightness(1) contrast(1)", "brightness(1.1) contrast(1.05)", "brightness(1) contrast(1)"]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};

export default GlobalGlitch;
