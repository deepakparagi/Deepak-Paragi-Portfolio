import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const experienceData = [
    {
        id: 1,
        role: "Full Stack Developer Intern",
        company: "GTTC, Hubli",
        duration: "Feb 2023 — Jun 2023",
        description: "Engineered scalable web applications, optimizing the database layer and creating responsive interfaces for diverse digital products. Reduced load times by 30% through intelligent caching.",
        skills: ["React", "Express", "REST APIs", "SQL"]
    },
    {
        id: 2,
        role: "Open Source Contributor",
        company: "GitHub Community",
        duration: "2023 — Present",
        description: "Continuously building and iterating on full-stack projects, deploying production-ready platforms using modern architectures (Next.js, Framer Motion) and exploring real-world AI integrations.",
        skills: ["Next.js", "Tailwind CSS", "Framer Motion", "OpenAI"]
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
                        <h2 className="text-sm font-mono text-secondary mb-4 uppercase tracking-[0.2em]">04 / Chronology</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-medium text-primary">
                            Professional Journey
                        </h3>
                    </div>
                </ScrollReveal>

                <div className="relative max-w-4xl mx-auto">
                    {/* Center Timeline Line (Desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary/10 -translate-x-1/2">
                        <motion.div 
                            className="absolute top-0 left-0 w-full bg-accent origin-top"
                            style={{ scaleY, height: "100%" }}
                        />
                    </div>
                    
                    {/* Left Timeline Line (Mobile) */}
                    <div className="block md:hidden absolute left-4 top-0 bottom-0 w-[1px] bg-primary/10">
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

    const damping = 20;
    const stiffness = 150;
    const springConfig = { damping, stiffness };

    const xSpring = useSpring(mouseX, springConfig);
    const ySpring = useSpring(mouseY, springConfig);

    const rotateX = useTransform(ySpring, [0, 1], [10, -10]);
    const rotateY = useTransform(xSpring, [0, 1], [-10, 10]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = (e.clientX - rect.left) / width;
        const mouseYVal = (e.clientY - rect.top) / height;
        mouseX.set(mouseXVal);
        mouseY.set(mouseYVal);
    };

    const handleMouseLeave = () => {
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    return (
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full">
            {/* Desktop Center Marker with Pulse */}
            <div className="hidden md:block absolute left-1/2 top-1/2 w-4 h-4 bg-background border-2 border-accent rounded-full -translate-x-1/2 -translate-y-1/2 z-10 shadow-[0_0_15px_rgba(212,175,55,0.7)]" />

            <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
                <ScrollReveal delay={0.2} width="100%">
                    <motion.div
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                            perspective: 1000
                        }}
                        className="group bg-surface/40 backdrop-blur-xl p-8 md:p-10 rounded-sm border border-primary/5 hover:border-accent/20 transition-colors duration-500 relative"
                    >
                        {/* 3D Inner Content */}
                        <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }} className="relative z-10">
                            <span className="font-mono text-accent text-xs mb-3 block tracking-[0.3em] uppercase">{exp.duration}</span>
                            <h4 className="text-3xl font-display font-medium text-primary mb-2" style={{ transform: "translateZ(20px)" }}>{exp.role}</h4>
                            <h5 className="text-primary/60 font-sans text-sm tracking-[0.2em] uppercase mb-6" style={{ transform: "translateZ(10px)" }}>{exp.company}</h5>
                            
                            <p className="text-secondary/90 font-light leading-relaxed mb-8 text-lg" style={{ transform: "translateZ(5px)" }}>
                                {exp.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(30px)" }}>
                                {exp.skills.map((skill, i) => (
                                    <span key={i} className="px-3 py-1 bg-background/50 border border-primary/10 rounded-sm text-[10px] font-mono text-secondary tracking-widest uppercase">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Glossy Reflection Overlay */}
                        <motion.div 
                            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            style={{
                                background: useMotionTemplate`radial-gradient(400px circle at ${xSpring.get() * 100}% ${ySpring.get() * 100}%, rgba(212, 175, 55, 0.1), transparent 80%)`
                            }}
                        />
                    </motion.div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default Experience;
