import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STATUS_MESSAGES = [
    "Architecting Logic",
    "Sampling Aesthetics",
    "Mapping Grid Coordinates",
    "Orchestrating Motion",
    "Synchronizing Data",
    "System Ready"
];

const ArchitectureLogo = () => {
    return (
        <svg viewBox="0 0 100 100" className="w-24 h-24 md:w-32 md:h-32 text-accent" fill="none">
            {/* Outer Ring */}
            <motion.circle 
                cx="50" cy="50" r="45" 
                stroke="currentColor" 
                strokeWidth="0.5" 
                strokeDasharray="1 4"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            {/* Logo "D" Structure */}
            <motion.path 
                d="M35 25V75H55C68.8071 75 80 63.8071 80 50C80 36.1929 68.8071 25 55 25H35Z" 
                stroke="currentColor" 
                strokeWidth="1.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* Inner Details */}
            <motion.line 
                x1="35" y1="50" x2="65" y2="50" 
                stroke="currentColor" 
                strokeWidth="0.5"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1 }}
            />
            {/* Point Markers */}
            {[25, 50, 75].map((y, i) => (
                <motion.circle 
                    key={i}
                    cx="35" cy={y} r="1.5" 
                    fill="currentColor"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 + i * 0.1 }}
                />
            ))}
        </svg>
    );
};

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [statusIndex, setStatusIndex] = useState(0);
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        const duration = 1500; // Snappier duration
        const interval = 16;
        const totalSteps = duration / interval;
        const increment = 100 / totalSteps;

        const timer = setInterval(() => {
            setProgress(prev => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, interval);

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        const targetIndex = Math.floor((progress / 100) * STATUS_MESSAGES.length);
        if (targetIndex !== statusIndex && targetIndex < STATUS_MESSAGES.length) {
            setStatusIndex(targetIndex);
        }
    }, [progress, statusIndex]);

    useEffect(() => {
        if (progress >= 100) {
            const timer = setTimeout(() => {
                setIsExiting(true);
                setTimeout(onComplete, 600); // Optimized exit timing
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
            initial={{ opacity: 1 }}
            animate={isExiting ? { 
                opacity: 0,
                scale: 1.1,
                filter: "blur(20px)",
                transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
            } : { opacity: 1 }}
        >
            {/* Grain Texture Overlay */}
            <div className="absolute inset-0 z-[110] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />

            {/* Expanding Architectural Grid */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                <motion.div 
                    className="absolute w-[200%] h-[200%] opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:60px_60px]"
                    initial={{ scale: 0.5, rotate: 0 }}
                    animate={{ scale: 1, rotate: 5 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Radial Pulse */}
                <motion.div 
                    className="absolute w-1 h-1 rounded-full bg-accent/20"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1000, opacity: [0, 0.1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                />
            </div>

            {/* Corner Metadata HUD */}
            <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start font-mono text-[8px] opacity-20 tracking-[0.2em] md:tracking-[0.5em] uppercase">
                    <div>System_Architecture_V2.0</div>
                    <div>Global_Access_Granted</div>
                </div>
                <div className="flex justify-between items-end font-mono text-[8px] opacity-20 tracking-[0.2em] md:tracking-[0.5em] uppercase">
                    <div>User.Deepak.Ref_0xA1</div>
                    <div>Build.Code_2026.04</div>
                </div>
            </div>

            <div className="relative flex flex-col items-center z-20">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-12"
                >
                    <ArchitectureLogo />
                </motion.div>

                <div className="flex flex-col items-center gap-6">
                    <div className="h-[2px] w-48 bg-primary/5 relative overflow-hidden">
                        <motion.div 
                            className="absolute top-0 left-0 h-full bg-accent"
                            initial={{ width: 0 }}
                            animate={{ width: `${progress}%` }}
                            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.1 }}
                        />
                    </div>
                    
                    <div className="h-4 flex flex-col items-center">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={statusIndex}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[10px] md:text-[12px] text-primary/60 font-mono uppercase tracking-[0.5em]"
                            >
                                {STATUS_MESSAGES[statusIndex]}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="font-mono text-[10px] text-accent mt-4">
                        {Math.floor(progress)}%
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
