import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOADING_LOGS = [
    "[SYSTEM] INITIATING_VANGUARD_PROTOCOL_v7.0",
    "[CLIENT] DEEPAK_PARAGI // PORTFOLIO_CORE",
    "[ENV] BENGALURU_SOUTH_REGION_080",
    "[KERN] LOADING_GEOMETRY_THREE.JS",
    "[KERN] SYNCHRONIZING_HUD_PARALLAX",
    "[KERN] INJECTING_ARTISTIC_MANIFESTO",
    "[NET] ESTABLISHING_SECURE_COLLABORATION_TUNNEL",
    "[DISP] LIQUID_DISTORTION_ENGINE_READY",
    "[AUTH] INITIALIZATION_COMPLETE",
];

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [currentLog, setCurrentLog] = useState(0);
    const [showManifesto, setShowManifesto] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                const next = prev + Math.random() * 2;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, 30);

        const logTimer = setInterval(() => {
            setCurrentLog(prev => (prev < LOADING_LOGS.length - 1 ? prev + 1 : prev));
        }, 200);

        const manifestoTimer = setTimeout(() => setShowManifesto(true), 1500);

        return () => {
            clearInterval(timer);
            clearInterval(logTimer);
            clearTimeout(manifestoTimer);
        };
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(onComplete, 1200);
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[1000] bg-background flex flex-col items-center justify-center p-6 md:p-12 overflow-hidden"
            exit={{ opacity: 0, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
        >
            {/* Background Data Stream (Subtle) */}
            <div className="absolute inset-0 opacity-[0.03] select-none pointer-events-none font-mono text-[8px] leading-none overflow-hidden">
                {[...Array(50)].map((_, i) => (
                    <div key={i} className="whitespace-nowrap">
                        {Math.random().toString(36).substring(2).repeat(10)}
                    </div>
                ))}
            </div>

            <div className="max-w-2xl w-full space-y-12 z-20">
                {/* Branding ASCII / Visual */}
                <div className="flex flex-col items-center gap-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-accent font-display text-4xl font-black tracking-[0.5em] relative"
                    >
                        DP_V4
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.8 }}
                            className="absolute -right-6 top-0 w-2 h-full bg-accent"
                        />
                    </motion.div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-secondary">Creative_System_Initialization</span>
                </div>

                {/* Progress & Terminal */}
                <div className="space-y-6">
                    <div className="flex justify-between items-end">
                        <div className="flex flex-col gap-1">
                            <span className="text-[10px] font-mono text-accent">ALLOC_MEMORY: {Math.floor(progress * 102.4)}MB</span>
                            <div className="h-1 w-48 bg-primary/5 relative overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-accent"
                                    animate={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                        <span className="text-4xl font-display font-medium text-primary tabular-nums">
                            {Math.floor(progress).toString().padStart(3, '0')}%
                        </span>
                    </div>

                    {/* Scrolling Logs */}
                    <div className="bg-surface/50 border border-primary/5 p-4 h-48 font-mono text-[10px] flex flex-col justify-end gap-1 overflow-hidden backdrop-blur-sm">
                        <AnimatePresence mode='popLayout'>
                            {LOADING_LOGS.slice(0, currentLog + 1).map((log, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className={`${i === currentLog ? 'text-accent' : 'text-secondary/50'}`}
                                >
                                    {log}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                        <motion.div
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ repeat: Infinity, duration: 0.5 }}
                            className="w-1.5 h-3 bg-accent"
                        />
                    </div>
                </div>

                {/* Technical Manifesto (Overlay effect) */}
                <AnimatePresence>
                    {showManifesto && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-12 left-6 md:left-12 border-l border-accent pl-4 space-y-1"
                        >
                            <span className="text-[10px] font-mono text-accent block">MANIFESTO_CMD:</span>
                            <span className="text-xl md:text-3xl font-display text-primary leading-none uppercase max-w-sm block">
                                Design is the <span className="italic">soul</span> of the machine.
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Corner Metadata Decoration */}
            <div className="absolute top-6 left-6 flex flex-col gap-1 opacity-20 hidden md:flex">
                <span className="text-[8px] font-mono">SYS_CORE: ARM64_V8</span>
                <span className="text-[8px] font-mono">NET_PROTO: TLS_1.3</span>
            </div>
            <div className="absolute bottom-6 right-6 flex flex-col items-end gap-1 opacity-20 hidden md:flex">
                <span className="text-[8px] font-mono">LOC_TAG: {new Date().getTime()}</span>
                <span className="text-[8px] font-mono">VER_TAG: {Math.random().toString(36).substring(7).toUpperCase()}</span>
            </div>
        </motion.div>
    );
};

export default Loader;
