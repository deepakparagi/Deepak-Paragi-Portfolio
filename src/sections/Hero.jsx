import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import profileImg from '../assets/roman_reigns.jpg';
import { ArrowUpRight, Download, Plus } from 'lucide-react';
import Magnetic from '../components/Magnetic';
import BitStream from '../components/BitStream';

const Hero = ({ onResumeClick }) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        const timer = setTimeout(() => setIsLoaded(true), 1200);
        return () => {
            window.removeEventListener('resize', checkMobile);
            clearTimeout(timer);
        };
    }, []);

    const { scrollY } = useScroll();
    const y1_transform = useTransform(scrollY, [0, 500], [0, 200]);
    const y2_transform = useTransform(scrollY, [0, 500], [0, 100]);
    
    const y1 = isMobile ? 0 : y1_transform;
    const y2 = isMobile ? 0 : y2_transform;

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const xSpring = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const ySpring = useSpring(mouseY, { stiffness: 100, damping: 20 });

    const handleMouseMove = (e) => {
        if (isMobile) return;
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set((clientX / innerWidth) - 0.5);
        mouseY.set((clientY / innerHeight) - 0.5);
    };

    const roles = ["intelligent logic.", "elite digital craft."];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            className="min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 relative overflow-hidden pt-12 md:pt-16 bg-background"
        >
            {/* Elite HUD Decor - Mobile & Desktop */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-10 md:opacity-20">
                    <motion.div 
                        style={{ 
                            x: useTransform(xSpring, [-0.5, 0.5], [-20, 20]), 
                            y: useTransform(ySpring, [-0.5, 0.5], [-20, 20]) 
                        }}
                        className="absolute inset-0 border-[1px] border-primary/5 m-4 md:m-24"
                    />
                    
                    {/* Floating Crosshairs */}
                    {[...Array(isMobile ? 4 : 6)].map((_, i) => (
                        <FloatingCrosshair key={i} index={i} xSpring={xSpring} ySpring={ySpring} />
                    ))}
                </div>

                {/* Corner System Metadata HUD */}
                <div className="absolute inset-x-0 inset-y-0 p-6 md:p-12 flex flex-col justify-between z-20 pointer-events-none mix-blend-difference">
                    <div className="flex justify-between items-start font-mono text-[7px] md:text-[8px] text-secondary/40 tracking-[0.3em] uppercase">
                        <div className="flex flex-col gap-1">
                            <span>SYS_AUTH_0x26</span>
                            <span className="opacity-60 font-mono italic">Loc: 15.3617 / 75.1243</span>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                            <span>Build.Deepak_V2.6</span>
                            <span className="opacity-60 font-mono italic">Access_Level: Root</span>
                        </div>
                    </div>
                </div>

                {/* Decorative Brackets for Technical Depth */}
                <div className="absolute top-1/2 left-4 h-32 w-[1px] bg-accent/20 -translate-y-1/2 hidden md:block" />
                <div className="absolute top-1/2 right-4 h-32 w-[1px] bg-accent/20 -translate-y-1/2 hidden md:block" />
            </div>

            <div className="max-w-screen-2xl mx-auto w-full z-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative">

                {/* Neural Golden Glow - Atmospheric Depth (Enhanced for Mobile) */}
                <motion.div 
                    style={{ 
                        x: useTransform(xSpring, [-0.5, 0.5], [-100, 100]), 
                        y: useTransform(ySpring, [-0.5, 0.5], [-100, 100]),
                        opacity: useTransform(scrollY, [0, 500], [0.25, 0])
                    }}
                    className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/30 rounded-full blur-[100px] md:blur-[160px] pointer-events-none z-0 mix-blend-screen"
                />
                <motion.div style={{ y: y2 }}>
                    <div className="flex items-center gap-2.5 mb-10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        <span className="font-mono text-[8px] tracking-[0.6em] text-secondary uppercase font-medium">
                            <BitStream text="STATUS: OPERATIONAL // AVAILABLE" trigger={isLoaded} className="font-mono" />
                        </span>
                    </div>

                    <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal tracking-tighter leading-[0.85] text-primary relative">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="block relative z-10"
                        >
                            Deepak <span className="text-accent drop-shadow-[0_0_15px_rgba(212,175,55,0.6)]">—</span>
                        </motion.span>
                        
                        {/* Secondary Concentrated Glow behind Name */}
                        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48 bg-accent/30 rounded-full blur-[80px] pointer-events-none z-0 mix-blend-screen opacity-50" />
                    </h1>

                    <div className="mt-6 space-y-0 font-display">
                        {["AI & Full", "Stack", "Developer"].map((text, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 0.3, x: 0 }}
                                transition={{ duration: 1.2, delay: 0.6 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="block italic font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.0] transition-all duration-700 hover:opacity-100 hover:text-accent/40"
                            >
                                {text}
                            </motion.span>
                        ))}
                    </div>

                    <div className="text-base md:text-xl text-secondary/80 max-w-2xl leading-relaxed font-sans mt-8 mb-10 min-h-[4rem]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <p className="flex flex-wrap items-center gap-x-4 gap-y-2">
                                <span className="opacity-40 uppercase tracking-[0.4em] text-[10px] font-bold">Orchestrating</span>
                                <span className="text-primary relative inline-block">
                                    <AnimatePresence mode="popLayout">
                                        <motion.span
                                            key={roleIndex}
                                            initial={{ y: 10, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -10, opacity: 0 }}
                                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                            className="inline-block text-accent font-display italic text-xl md:text-2xl"
                                        >
                                            {roles[roleIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </p>
                            <p className="mt-4 text-secondary/60 text-sm md:text-base font-light max-w-xl">
                                Bridging the gap between frontier AI intelligence and production-grade engineering to build the next generation of digital experiences.
                            </p>
                        </motion.div>
                    </div>

                    <div className="flex flex-wrap gap-10 items-center">
                        <Magnetic strength={isMobile ? 0 : 0.2}>
                            <motion.button
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                                whileHover="hover"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
                                className="group relative px-12 py-5 bg-primary text-background font-sans text-[10px] font-medium tracking-[0.3em] uppercase overflow-hidden"
                            >
                                <motion.div 
                                    variants={{
                                        hover: { x: "0%" }
                                    }}
                                    initial={{ x: "-101%" }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0 bg-accent"
                                />
                                <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-primary">
                                    View Project <ArrowUpRight size={14} />
                                </span>
                            </motion.button>
                        </Magnetic>
                        
                        <Magnetic strength={isMobile ? 0 : 0.3}>
                            <motion.button
                                onClick={onResumeClick}
                                whileHover="hover"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="group flex items-center gap-5 py-4 px-2 font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-secondary hover:text-primary transition-all"
                            >
                                <motion.span 
                                    variants={{
                                        hover: { width: 48, backgroundColor: "var(--accent)" }
                                    }}
                                    initial={{ width: 32 }}
                                    className="h-[1px] bg-secondary/30"
                                />
                                Get Resume
                            </motion.button>
                        </Magnetic>
                    </div>
                </motion.div>

                {/* Right Column: Neural Image Container - Optimized for all screens */}
                <motion.div
                    style={{ y: y1 }}
                    className="relative block h-[400px] md:h-[700px] lg:ml-auto w-full max-w-md group"
                >
                    <div className="absolute inset-0 border border-primary/5 -m-2 md:-m-8 transition-all duration-1000 z-0" />
                    
                    <div className="w-full h-full relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out rounded-sm">
                        <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
                        
                        <img
                            src={profileImg}
                            alt="Deepak Paragi"
                            className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                        />

                        {/* Scan Line Effect */}
                        <motion.div 
                            className="absolute top-0 left-0 w-full h-[1px] bg-accent/20 z-30 pointer-events-none"
                            animate={{ top: ["0%", "100%", "0%"] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />

                        {/* Interactive HUD Corner */}
                        <div className="absolute bottom-6 right-6 z-30 font-mono text-[7px] text-white/40 tracking-widest bg-background/40 backdrop-blur-md px-3 py-2 border border-white/5">
                            <motion.span animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
                                DATA_STREAM: OPERATIONAL
                            </motion.span>
                        </div>
                    </div>
                    
                    {/* Bottom Tag */}
                    <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-surface p-4 border border-primary/5 flex items-center gap-3 shadow-2xl">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        <span className="font-mono text-[8px] uppercase tracking-widest text-primary">
                            <BitStream text="INTERFACE_V2.0" trigger={isLoaded} delay={2} />
                        </span>
                    </div>
                </motion.div>

            </div>
        </section >
    );
};

const FloatingCrosshair = ({ index, xSpring, ySpring }) => {
    const x = useTransform(xSpring, [-0.5, 0.5], [index * -10, index * 10]);
    const y = useTransform(ySpring, [-0.5, 0.5], [index * -15, index * 15]);

    return (
        <motion.div 
            className="absolute text-accent/30"
            style={{ 
                top: `${20 + index * 30}%`, 
                left: `${10 + index * 35}%`,
                x,
                y
            }}
        >
            <Plus size={12} strokeWidth={1} />
        </motion.div>
    );
};

export default Hero;
