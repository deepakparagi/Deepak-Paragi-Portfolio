import { motion, useScroll, useTransform, AnimatePresence, useSpring, useMotionValue } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import profileImg from '../assets/deepak_portrait.jpg';
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

    const roles = ["production web apps.", "AI-powered systems.", "automation workflows."];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-[90svh] lg:h-screen flex items-center px-6 md:px-12 pt-24 md:pt-0 overflow-hidden bg-background" onMouseMove={handleMouseMove}>
            
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
                 style={{ 
                     backgroundImage: `linear-gradient(to right, rgb(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--primary)) 1px, transparent 1px)`,
                     backgroundSize: '4rem 4rem',
                     maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 20%, transparent 100%)',
                     WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 20%, transparent 100%)'
                 }} 
            />

            <div className="absolute inset-0 z-0 opacity-10 md:opacity-20 sm:visible hidden">
                <motion.div 
                    style={{ 
                        x: useTransform(xSpring, [-0.5, 0.5], [-20, 20]), 
                        y: useTransform(ySpring, [-0.5, 0.5], [-20, 20]) 
                    }}
                    className="absolute inset-0 border-[1px] border-primary/10 m-4 md:m-12"
                />
                
                <motion.div 
                    style={{ 
                        x: useTransform(xSpring, [-0.5, 0.5], [-40, 40]), 
                        y: useTransform(ySpring, [-0.5, 0.5], [-40, 40]) 
                    }}
                    className="absolute inset-0 border-[1px] border-primary/10 m-12 md:m-24"
                />
                
                {/* Floating Crosshairs */}
                {[...Array(isMobile ? 4 : 8)].map((_, i) => (
                    <FloatingCrosshair key={i} index={i} xSpring={xSpring} ySpring={ySpring} />
                ))}
            </div>

            {/* Corner System Metadata HUD */}
                <div className="absolute inset-x-0 inset-y-0 p-6 md:p-12 pt-[100px] md:pt-[120px] flex flex-col justify-between z-20 pointer-events-none mix-blend-difference">
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
                <div className="absolute top-1/2 left-4 h-32 w-[1px] bg-accent/30 -translate-y-1/2 hidden md:block" />
                <div className="absolute top-1/2 right-4 h-32 w-[1px] bg-accent/30 -translate-y-1/2 hidden md:block" />

            <div className="w-full z-10 flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-center relative">

                {/* Neural Golden Glow - Removed as per request */}
                <motion.div style={{ y: y2 }} className="min-h-[90svh] lg:min-h-0 flex flex-col justify-center pt-10 sm:pt-0">
                    <div className="flex items-center gap-4 mb-8 sm:mb-12 mt-4 sm:mt-0">
                        <div className="flex items-center gap-2.5">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                            </span>
                            <span className="font-display italic text-[10px] md:text-[11px] tracking-[0.3em] text-secondary uppercase font-medium">
                                <BitStream text="STATUS: OPERATIONAL" trigger={isLoaded} />
                            </span>
                        </div>
                        <div className="h-[1px] w-8 md:w-12 bg-primary/10" />
                        <span className="font-mono text-[8px] md:text-[9px] tracking-[0.2em] text-secondary/40 uppercase">
                            Available // 2026
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

                    <div className="mt-4 sm:mt-6 flex flex-wrap gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 items-center">
                        <motion.span
                            initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display italic text-accent drop-shadow-lg text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.0]"
                        >
                            AI &
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1.2, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display font-medium text-primary text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[1.0]"
                        >
                            Full Stack
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                            animate={{ opacity: 0.7, x: 0, filter: 'blur(0px)' }}
                            transition={{ duration: 1.2, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="font-display font-light text-secondary text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.0] ml-1"
                        >
                            Developer
                        </motion.span>
                    </div>

                    <div className="text-base md:text-xl text-secondary/80 max-w-2xl leading-relaxed font-sans mt-10 mb-14 min-h-[4rem]">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
                                <span className="opacity-50 uppercase tracking-[0.3em] text-[10px] md:text-[11px] font-bold border border-secondary/20 px-4 py-1.5 rounded-full">
                                    Engineering
                                </span>
                                <span className="text-primary relative inline-block">
                                    <AnimatePresence mode="popLayout">
                                        <motion.span
                                            key={roleIndex}
                                            initial={{ y: 15, opacity: 0, filter: 'blur(4px)' }}
                                            animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                            exit={{ y: -15, opacity: 0, filter: 'blur(4px)' }}
                                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                            className="inline-block text-accent font-display italic text-2xl md:text-3xl"
                                        >
                                            {roles[roleIndex]}
                                        </motion.span>
                                    </AnimatePresence>
                                </span>
                            </div>
                            <p className="text-secondary/70 text-sm md:text-lg font-light max-w-xl leading-relaxed border-l-2 border-accent/40 pl-5 py-1">
                                Building production web applications, REST APIs, and AI systems that bridge the gap between frontier intelligence and scalable engineering.
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
                                className="group relative px-10 py-5 bg-transparent border border-primary/20 hover:border-accent text-primary font-sans text-[10px] md:text-[11px] font-medium tracking-[0.3em] uppercase overflow-hidden transition-colors duration-500 rounded-sm"
                            >
                                <motion.div 
                                    variants={{
                                        hover: { y: "0%" }
                                    }}
                                    initial={{ y: "101%" }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute inset-0 bg-accent/15 backdrop-blur-sm"
                                />
                                <span className="relative z-10 flex items-center gap-3 transition-colors duration-500 group-hover:text-accent drop-shadow-md">
                                    View Work <ArrowUpRight size={15} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                </span>
                            </motion.button>
                        </Magnetic>
                        
                        {isMobile ? (
                            <motion.button
                                onClick={(e) => {
                                    e.preventDefault();
                                    onResumeClick();
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="group flex items-center gap-5 py-6 px-4 -ml-4 font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-secondary active:text-primary relative z-[60] pointer-events-auto touch-action-manipulation"
                            >
                                <span className="h-[1px] w-8 bg-secondary/30" />
                                Get Resume
                            </motion.button>
                        ) : (
                            <Magnetic strength={0.3}>
                                <motion.button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        onResumeClick();
                                    }}
                                    whileHover="hover"
                                    whileTap={{ scale: 0.95 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="group flex items-center gap-5 py-6 px-4 -ml-4 font-sans text-[10px] font-medium tracking-[0.3em] uppercase text-secondary hover:text-primary transition-all relative z-50 pointer-events-auto"
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
                        )}
                    </div>
                </motion.div>

                {/* Right Column: Neural Image Container - Optimized for all screens */}
                <motion.div
                    style={{ y: y1 }}
                    className="relative flex-shrink-0 aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[700px] mb-8 lg:mb-0 mx-auto lg:ml-auto w-[85%] max-w-[340px] md:max-w-md lg:w-full group"
                >
                    <div className="absolute inset-0 border border-primary/5 -m-2 md:-m-8 transition-all duration-1000 z-0" />
                    
                    <div className="w-full h-full relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out rounded-sm">
                        <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] blend-overlay" />
                        
                        <img
                            src={profileImg}
                            alt="Deepak Paragi"
                            className="w-full h-full object-cover object-top scale-110 group-hover:scale-100 transition-transform duration-1000"
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
