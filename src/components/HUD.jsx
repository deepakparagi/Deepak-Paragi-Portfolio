import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HUD_ELEMENTS = [
    { label: "SYS_LAT", value: "12.9716", speed: 0.2, top: "20%", left: "5%" },
    { label: "SYS_LNG", value: "77.5946", speed: 0.5, top: "60%", right: "8%" },
    { label: "FPS_VAL", value: "060", speed: 0.3, bottom: "10%", left: "12%" },
    { label: "NET_SPD", value: "1.2GB", speed: 0.8, top: "15%", right: "15%" },
    { label: "MEM_USE", value: "142MB", speed: 0.4, bottom: "25%", right: "5%" },
];

const HUD = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll();

    return (
        <div ref={containerRef} className="fixed inset-0 pointer-events-none z-50 overflow-hidden select-none">
            {HUD_ELEMENTS.map((el, i) => {
                // Each element has a different parallax speed based on global scroll
                const y = useTransform(scrollYProgress, [0, 1], [0, -1000 * el.speed]);

                return (
                    <motion.div
                        key={i}
                        style={{
                            y,
                            top: el.top,
                            left: el.left,
                            right: el.right,
                            bottom: el.bottom
                        }}
                        className="absolute flex flex-col gap-0.5 opacity-20"
                    >
                        <span className="text-[8px] font-mono text-accent uppercase tracking-tighter">
                            {el.label}
                        </span>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-primary font-bold">
                                {el.value}
                            </span>
                            <div className="h-px w-8 bg-primary/20" />
                        </div>
                    </motion.div>
                );
            })}

            {/* Global Frame Decoration */}
            <div className="absolute top-12 left-12 right-12 bottom-12 border border-primary/[0.03] pointer-events-none hidden md:block" />
            <div className="absolute top-12 left-12 w-8 h-8 border-t border-l border-accent opacity-30" />
            <div className="absolute bottom-12 right-12 w-8 h-8 border-b border-r border-accent opacity-30" />
        </div>
    );
};

export default HUD;
