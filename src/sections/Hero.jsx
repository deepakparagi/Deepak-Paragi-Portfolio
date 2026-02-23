import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
import Hero3D from '../components/Hero3D';
import KineticText from '../components/KineticText';

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

    return (
        <section className="min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 relative overflow-hidden pt-20 bg-background transition-colors duration-500">
            <div className="max-w-screen-2xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">

                {/* Text Content */}
                <div className="flex flex-col items-start text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-4 mb-12"
                    >
                        <span className="h-px w-12 bg-primary/20"></span>
                        <span className="font-sans text-xs font-bold text-secondary tracking-[0.3em] uppercase italic">The Portfolio of Deepak Paragi</span>
                    </motion.div>

                    <div className="relative mb-12">
                        <KineticText>
                            <motion.h1
                                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                                className="text-[clamp(3rem,8vw,8rem)] font-display font-medium tracking-tighter leading-[0.9] text-primary"
                            >
                                FULL STACK <br />
                                <span className="font-serif italic font-light text-accent">Developer</span>
                            </motion.h1>
                        </KineticText>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="max-w-lg"
                    >
                        <p className="text-xl md:text-2xl text-secondary mb-12 leading-relaxed font-light font-sans">
                            Crafting <span className="text-primary italic font-serif">sophisticated digital experiences</span> through high-performance systems and AI-driven intelligence.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="group relative px-10 py-5 bg-primary text-background font-display font-bold uppercase tracking-widest overflow-hidden"
                            >
                                <span className="relative z-10 transition-colors duration-300 group-hover:text-primary">Exploration</span>
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]"></div>
                                <div className="absolute inset-0 bg-surface -translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1] delay-75"></div>
                            </a>

                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="font-display font-medium text-primary hover:text-accent transition-colors uppercase tracking-[0.2em] relative py-2 overflow-hidden group"
                            >
                                <span className="relative z-10">Get in touch</span>
                                <span className="absolute bottom-0 left-0 w-full h-px bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Visual Content / 3D */}
                <div className="relative h-[50vh] lg:h-[80vh] w-full flex items-center justify-center order-first lg:order-last">
                    <div className="absolute inset-0 scale-125 lg:scale-100">
                        <Hero3D />
                    </div>
                    {/* Floating Decorative Text */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-10 right-0 text-right hidden lg:block"
                    >
                        <span className="block text-[10vw] font-serif italic text-primary/[0.03] leading-none mb-4">CRAFT</span>
                        <span className="block text-[6vw] font-display font-black text-primary/[0.02] leading-none">PRECISION</span>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            >
                <span className="text-[10px] font-sans font-bold uppercase tracking-[0.5em] text-secondary/40 rotate-90 mb-4">SCROLL</span>
                <div className="w-px h-16 bg-gradient-to-b from-primary/20 to-transparent" />
            </motion.div>
        </section >
    );
};

export default Hero;
