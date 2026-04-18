import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const experienceData = [
    {
        id: 1,
        role: "Full Stack Engineering Intern",
        company: "GTTC, Hubli",
        duration: "Feb 2023 — Jun 2023",
        description: "Architected and deployed modular internal tools using the MERN stack. Optimised the data persistence layer resulting in a 30% reduction in query latency. Orchestrated responsive frontend architectures that served 500+ internal users with 100% uptime.",
        skills: ["React", "Express", "Node.js", "MongoDB", "Auth0"]
    },
    {
        id: 2,
        role: "AI Open Source Contributor",
        company: "GitHub / Independent",
        duration: "2023 — Present",
        description: "Engineering and iterating on high-performance Full Stack projects. Currently specializing in Agentic AI integration and Model Context Protocol (MCP) implementations. Deployed multiple production-ready templates utilized by 50+ developers for rapid AI prototyping.",
        skills: ["Next.js", "Agentic AI", "MCP", "Framer Motion", "OpenAI"]
    }
];

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="experience" className="py-16 md:py-32 px-4 md:px-12 bg-background relative overflow-hidden">
            <div className="max-w-screen-xl mx-auto w-full relative z-10" ref={containerRef}>
                <ScrollReveal width="100%">
                    <div className="mb-16 md:mb-24 flex flex-col md:items-center text-left md:text-center">
                        <h2 className="text-sm font-mono text-secondary mb-4 uppercase tracking-[0.2em]">04 / Industrial Deployment</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-medium text-primary">
                            Professional Chronology
                        </h3>
                    </div>
                </ScrollReveal>

                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Spine */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-primary/10 md:-translate-x-1/2">
                        <motion.div 
                            className="absolute top-0 left-0 w-full bg-accent origin-top"
                            style={{ scaleY, height: "100%" }}
                        />
                    </div>

                    <div className="space-y-12 md:space-y-32">
                        {experienceData.map((exp, index) => (
                            <ExperienceItem key={exp.id} exp={exp} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const ExperienceItem = ({ exp, index }) => {
    const isEven = index % 2 === 0;
    const cardRef = useRef(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { damping: 20, stiffness: 150 };
    const xSpring = useSpring(mouseX, springConfig);
    const ySpring = useSpring(mouseY, springConfig);

    const rotateX = useTransform(ySpring, [0, 1], [10, -10]);
    const rotateY = useTransform(xSpring, [0, 1], [-10, 10]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    return (
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
            <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-background border-2 border-accent rounded-full -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(212,175,55,0.4)]" />

            <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${isEven ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                <ScrollReveal delay={0.2} width="100%">
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
                        className="group bg-surface/40 backdrop-blur-xl p-8 md:p-10 rounded-sm border border-primary/5 hover:border-accent/20 transition-all duration-500 relative"
                    >
                        <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="relative z-10">
                            <span className="font-mono text-accent text-[10px] mb-3 block tracking-[0.3em] uppercase">{exp.duration}</span>
                            <h4 className="text-3xl font-display font-medium text-primary mb-2">{exp.role}</h4>
                            <h5 className="text-secondary/60 font-sans text-xs tracking-[0.2em] uppercase mb-6">{exp.company}</h5>
                            
                            <p className="text-secondary/90 font-light leading-relaxed mb-8 text-lg">
                                {exp.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-background/50 border border-primary/10 rounded-sm text-[9px] font-mono text-secondary tracking-widest uppercase">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <motion.div 
                            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                background: useMotionTemplate`radial-gradient(400px circle at ${xSpring.get() * 100}% ${ySpring.get() * 100}%, rgba(212, 175, 55, 0.05), transparent 80%)`
                            }}
                        />
                    </motion.div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Experience;
