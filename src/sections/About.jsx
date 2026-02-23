import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import KineticText from '../components/KineticText';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const watermarkY = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const timelineData = [
        {
            type: "EXP",
            id: "2023",
            title: "Full Stack Developer Intern",
            location: "GTTC, Hubli",
            desc: "Developed core UI components and integrated complex REST APIs for high-traffic media applications.",
            status: "COMPLETED"
        },
        {
            type: "EDU",
            id: "2023 — 2026",
            title: "B.E. in AI & ML",
            location: "NMIT, Bengaluru",
            desc: "Specializing in specialized AI architectures and machine learning optimization.",
            status: "IN_PROGRESS"
        },
        {
            type: "EDU",
            id: "2020 — 2023",
            title: "CSE Diploma",
            location: "GP, Gadag",
            desc: "Foundational computer science and engineering principles.",
            status: "COMPLETED"
        }
    ];

    return (
        <section id="about" ref={containerRef} className="py-32 md:py-64 px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Parallax Identity Watermark with Glitch */}
            <motion.div
                style={{ y: watermarkY }}
                animate={{
                    skewX: [0, -10, 5, 0],
                    x: [0, -5, 10, 0],
                    opacity: [0.02, 0.05, 0.02]
                }}
                transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: "mirror",
                    repeatDelay: 2
                }}
                className="absolute right-0 top-0 text-[30vw] font-display font-black text-primary leading-none pointer-events-none select-none -translate-y-1/4"
            >
                IDENTITY
            </motion.div>

            <div className="max-w-screen-2xl mx-auto w-full z-10 relative">
                <div className="grid lg:grid-cols-12 gap-24 items-start">

                    {/* Left side: Cinematic Bio */}
                    <div className="lg:col-span-7 space-y-16">
                        <div className="flex items-center gap-4 mb-12 text-accent">
                            <span className="h-px w-12 bg-accent opacity-50"></span>
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em]">01 / Identity</h2>
                        </div>

                        <div className="space-y-12 md:space-y-20">
                            <ScrollReveal>
                                <KineticText>
                                    <h3 className="text-4xl md:text-6xl font-display font-medium text-primary leading-tight tracking-tighter">
                                        Product-focused Engineer based in <span className="text-accent italic font-light">Bengaluru</span>.
                                    </h3>
                                </KineticText>
                            </ScrollReveal>

                            <ScrollReveal delay={0.2}>
                                <p className="text-2xl md:text-4xl text-secondary font-light leading-tight max-w-3xl">
                                    Building systems that bridge <span className="text-primary font-normal">technical depth</span> with <span className="text-primary font-normal">human intuition</span>.
                                </p>
                            </ScrollReveal>

                            <ScrollReveal delay={0.4}>
                                <div className="flex flex-col md:flex-row gap-12 items-start md:items-center">
                                    <div className="max-w-md space-y-6">
                                        <p className="text-lg text-secondary/80 leading-relaxed font-sans uppercase tracking-widest text-xs font-bold">
                                            Focus: 0 → 1 Execution
                                        </p>
                                        <p className="text-xl text-primary font-light leading-relaxed">
                                            Currently completing my B.E. in AI & Machine Learning, I thrive on solving complex architectural problems where code meets creative strategy.
                                        </p>
                                    </div>

                                    {/* Blueprint pin detail */}
                                    <div className="p-6 border border-primary/5 bg-surface/30 backdrop-blur-sm hidden md:block">
                                        <div className="flex flex-col gap-2">
                                            <span className="text-[10px] font-mono text-accent">LOC_080</span>
                                            <span className="text-[10px] font-mono opacity-50 uppercase tracking-tighter">Current Lat: 12.9716° N</span>
                                            <span className="text-[10px] font-mono opacity-50 uppercase tracking-tighter">Current Lng: 77.5946° E</span>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    </div>

                    {/* Right side: Industrial Timeline */}
                    <div className="lg:col-span-5 relative mt-12 lg:mt-0">
                        <div className="flex items-center gap-4 mb-12">
                            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent">TIMELINE_LOG</h4>
                            <div className="h-px flex-1 bg-primary/10"></div>
                        </div>

                        <div className="space-y-16 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-[3px] top-2 bottom-0 w-px bg-primary/10" />

                            {timelineData.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="relative pl-12 group"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-primary/20 group-hover:bg-accent transition-colors" />

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-[10px] font-mono font-bold text-accent py-0.5 px-2 border border-accent/20">
                                                {item.type}
                                            </span>
                                            <span className="text-xs font-mono text-secondary tracking-widest">
                                                {item.id}
                                            </span>
                                        </div>

                                        <div className="space-y-1">
                                            <h4 className="text-xl md:text-2xl font-display text-primary group-hover:text-accent transition-colors">
                                                {item.title}
                                            </h4>
                                            <p className="text-xs font-bold uppercase tracking-widest text-secondary/60">
                                                {item.location}
                                            </p>
                                        </div>

                                        <p className="text-sm text-secondary font-light leading-relaxed max-w-sm">
                                            {item.desc}
                                        </p>

                                        <div className="flex items-center gap-2 opacity-30 group-hover:opacity-100 transition-opacity">
                                            <div className={`w-1 h-3 ${item.status === 'COMPLETED' ? 'bg-accent' : 'bg-primary animate-pulse'}`} />
                                            <span className="text-[10px] font-mono uppercase tracking-tighter">{item.status}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
