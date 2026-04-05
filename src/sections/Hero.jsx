import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import profileImg from '../assets/roman_reigns.jpg';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const { scrollY } = useScroll();
    const scrollYAnimated = useTransform(scrollY, [0, 500], [0, 200]);
    const scrollYAnimatedText = useTransform(scrollY, [0, 500], [0, 100]);

    const y1 = isMobile ? 0 : scrollYAnimated;
    const y2 = isMobile ? 0 : scrollYAnimatedText; 

    const roles = ["scalable web apps.", "intelligent systems.", "premium digital experiences."];
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 relative overflow-hidden pt-32 md:pt-40">

            <div className="max-w-screen-2xl mx-auto w-full z-10 grid md:grid-cols-[1.5fr_1fr] gap-12 items-center relative">

                {/* Left Column: Typography */}
                <motion.div style={{ y: y2 }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                            </span>
                            <span className="font-mono text-sm tracking-[0.2em] text-secondary uppercase">Available for work</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display font-medium tracking-tighter leading-[0.95] mb-12 text-primary">
                            Hi, I’m Deepak — <br />
                            <span className="text-secondary italic font-light opacity-80">AI & Full Stack Developer</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-lg md:text-xl text-secondary max-w-lg leading-relaxed font-mono mt-8 mb-12 min-h-[4rem] md:min-h-[3rem]"
                    >
                        <p className="flex flex-wrap items-center gap-2">
                            <span>Building</span>
                            <span className="text-primary relative inline-block">
                                <AnimatePresence mode="popLayout">
                                    <motion.span
                                        key={roleIndex}
                                        initial={{ y: 20, opacity: 0, rotateX: -90 }}
                                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                                        exit={{ y: -20, opacity: 0, rotateX: 90 }}
                                        transition={{ duration: 0.5, ease: "circOut" }}
                                        className="inline-block origin-top text-accent font-sans"
                                        style={{ transformStyle: "preserve-3d" }}
                                    >
                                        {roles[roleIndex]}
                                    </motion.span>
                                </AnimatePresence>
                            </span>
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                    >
                        <div className="flex flex-wrap gap-6 items-center">
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="group relative px-6 py-3 bg-primary text-background font-mono text-sm tracking-widest uppercase overflow-hidden flex items-center justify-center min-w-[200px]"
                            >
                                <span className="relative z-10 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-[250%]">View Projects</span>
                                <span className="absolute inset-0 z-10 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] translate-y-full group-hover:translate-y-0">View Projects</span>
                            </a>
                            
                            <a
                                href="/deepak-resume.pdf"
                                download
                                className="group relative px-6 py-3 font-mono text-sm tracking-widest uppercase border border-primary/20 hover:border-accent text-secondary hover:text-primary transition-colors flex items-center justify-center gap-2 min-w-[200px]"
                            >
                                <span>Download Resume</span>
                                <span className="relative w-4 h-4 flex items-center justify-center overflow-hidden">
                                     <motion.svg 
                                        className="w-full h-full text-accent" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor"
                                        animate={{ y: [0, 3, 0] }}
                                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                                     >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                     </motion.svg>
                                </span>
                            </a>
                            
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="relative pb-1 font-mono text-sm tracking-widest uppercase text-secondary hover:text-accent transition-colors"
                            >
                                Contact Me
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent origin-right scale-x-0 transition-transform duration-500 ease-out hover:scale-x-100 hover:origin-left"></span>
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Minimalist Visual (Optional, can be a profile shot or empty) */}
                <motion.div
                    style={{ y: y1 }}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="relative block max-w-sm md:max-w-md mx-auto md:ml-auto mt-12 md:mt-0"
                >
                    {/* Placeholder for Profile Image or Minimal Graphic */}
                    {/* Profile Image */}
                    <div className="md:aspect-[3/4] rounded-lg bg-surface border border-primary/5 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                        <img
                            src={profileImg}
                            alt="Deepak Paragi"
                            className="w-full h-auto md:h-full object-cover md:object-[center_25%]"
                        />
                    </div>
                </motion.div>

            </div>
        </section >
    );
};

export default Hero;
