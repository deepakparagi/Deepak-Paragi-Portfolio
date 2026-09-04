import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { ArrowUpRight, Database, Cpu, Activity, Circle, Layers, Zap, FastForward, Globe, Timer } from 'lucide-react';
import Magnetic from '../components/Magnetic';
import BitStream from '../components/BitStream';

const EXPERIENCE_DATA = [
    {
        id: 0,
        year: "2026",
        period: "Jan 2026 — Present",
        role: "Founder & Full Stack Developer",
        company: "DeepCipher Studio",
        description: "Founded and operate a web development studio delivering production websites and digital products. Built and shipped multiple live applications managing the complete development lifecycle including API integration, debugging, performance optimization, and deployment.",
        metrics: [
            { label: "Frontend", value: "Next.js", suffix: "", icon: Layers },
            { label: "AI Integration", value: "LLMs", suffix: "", icon: Cpu },
            { label: "Performance", value: "SEO", suffix: "+", icon: Zap },
            { label: "Deployment", value: "Vercel", suffix: "", icon: Globe }
        ],
        skills: ["Next.js", "React.js", "Node.js", "Tailwind CSS", "OpenAI API"],
        blueprint: "ai",
        image: "ai_module.png"
    },
    {
        id: 1,
        year: "2026",
        period: "Jan 2026 — Mar 2026",
        role: "Data Science Intern",
        company: "Proxenix",
        description: "Built and evaluated an NLP sentiment classification pipeline using Python, TF-IDF, pandas, and scikit-learn. Developed CinePulse, an end-to-end sentiment analysis platform exposing machine learning inference through application APIs.",
        metrics: [
            { label: "Model", value: "NLP", suffix: "", icon: Activity },
            { label: "Algorithm", value: "TF-IDF", suffix: "", icon: Database },
            { label: "Language", value: "Python", suffix: "", icon: Zap },
            { label: "Inference", value: "API", suffix: "", icon: FastForward }
        ],
        skills: ["Python", "scikit-learn", "pandas", "TF-IDF", "NLP"],
        blueprint: "database",
        image: "database_module.png"
    },
    {
        id: 2,
        year: "2023",
        period: "Feb 2023 — Jun 2023",
        role: "Full Stack Developer Intern",
        company: "GTTC, Hubli",
        description: "Developed responsive web interfaces and RESTful APIs for application workflows. Optimized SQL queries and relational database structures, improving data retrieval performance by over 30%. Performed API testing using Postman.",
        metrics: [
            { label: "Query Speed", value: "30", suffix: "%", icon: Zap },
            { label: "Backend", value: "REST", suffix: " APIs", icon: Globe },
            { label: "Database", value: "SQL", suffix: "", icon: Database },
            { label: "Testing", value: "API", suffix: "", icon: Activity }
        ],
        skills: ["REST APIs", "SQL", "Postman", "Frontend", "Backend"],
        blueprint: "database",
        image: "database_module.png"
    }
];

const Experience = () => {
    const baseUrl = import.meta.env.BASE_URL;
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <section ref={containerRef} id="experience" className="pt-12 pb-10 md:py-24 px-6 md:px-12 bg-background relative">
            <div className="w-full">
                <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-start relative">
                    
                    {/* Sticky Column */}
                    <div className="lg:sticky lg:top-40 mb-20 lg:mb-0 z-20">
                        <ScrollReveal width="100%" margin="0px">
                            <div className="max-w-xl">
                                <div className="flex items-center gap-6 mb-8 lg:mb-12 group/label cursor-crosshair">
                                    <motion.div
                                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                        className="w-2 h-2 rounded-full bg-accent group-hover/label:bg-primary transition-colors shadow-[0_0_10px_rgba(212,175,55,0.5)]"
                                    />
                                    <h2 className="font-sans text-[8px] text-secondary uppercase tracking-[0.6em] group-hover/label:text-primary transition-colors">Process.Industrial_Deployment</h2>
                                </div>
                                <motion.h3 
                                    whileHover="hover"
                                    className="text-[16vw] md:text-[10rem] lg:text-[13rem] font-display font-medium text-primary leading-[0.8] tracking-tighter cursor-default"
                                >
                                    CORE <br />
                                    <motion.span 
                                        variants={{
                                            hover: { opacity: 0.8, letterSpacing: "0.05em", color: "var(--accent)" }
                                        }}
                                        className="text-secondary italic font-light opacity-20 text-[11vw] md:text-8xl lg:text-[11rem] transition-all duration-700"
                                    >
                                        SYSTEMS
                                    </motion.span>
                                </motion.h3>

                                {/* Sticky Progress Track */}
                                <div className="hidden lg:block w-[1px] h-32 bg-primary/5 relative mt-16">
                                    <motion.div
                                        className="absolute top-0 left-0 w-full bg-accent shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                                        style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                                    />
                                    <div className="absolute top-0 -left-6 font-mono text-[8px] text-secondary/40 whitespace-nowrap -rotate-90 origin-right tracking-widest">SCROLL_SEQUENCE</div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Scrolling Track */}
                    <div className="space-y-24 pb-20">
                        {EXPERIENCE_DATA.map((exp, index) => (
                            <CoreModule key={exp.id} exp={exp} index={index} baseUrl={baseUrl} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const CoreModule = ({ exp, index, baseUrl }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, amount: 0.2 });

    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

    const imageUrl = `${baseUrl}${exp.image}`.replace(/\/+/g, '/');

    return (
        <motion.div
            ref={cardRef}
            style={{ opacity, scale, perspective: 1000 }}
            className="relative"
        >
            <motion.div
                style={{ rotateX }}
                className="space-y-16"
            >
                {/* Visual Slab - Full Bleed Fit */}
                <div className="relative aspect-video w-full bg-surface/20 backdrop-blur-3xl border border-primary/5 rounded-sm overflow-hidden group transition-all duration-700 hover:border-accent/40 hover:shadow-[0_0_60px_rgba(212,175,55,0.15)]">
                    <div
                        className="absolute inset-0 opacity-20 saturate-0 scale-105 group-hover:scale-110 group-hover:saturate-100 group-hover:opacity-40 transition-all duration-[2000ms] bg-cover bg-no-repeat bg-center mix-blend-screen"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                    />

                    {/* Golden Sweep */}
                    <motion.div
                        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-transparent via-accent/10 to-transparent"
                        animate={{ left: ["-100%", "200%"] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    />

                    {/* SVG Blueprint Overlay - Interacts with Hover */}
                    <div className="group-hover:opacity-100 transition-opacity duration-700">
                        <Blueprint schematic={exp.blueprint} trigger={isInView} />
                    </div>

                    <div className="absolute top-8 left-8 font-mono text-[9px] text-accent/60 tracking-[0.4em] uppercase group-hover:text-accent transition-colors">
                        Module_{index + 1} // {exp.year}
                    </div>
                </div>

                {/* Content Block */}
                <div className="space-y-10 pl-6 border-l border-primary/5">
                    <div className="space-y-4">
                        <span className="text-[10px] font-mono text-secondary/60 uppercase tracking-[0.4em]">
                            {exp.period}
                        </span>
                        <h4 className="text-4xl md:text-6xl font-display font-medium text-primary tracking-tighter leading-none">
                            {exp.role}
                        </h4>
                        <div className="text-xs font-mono text-secondary italic tracking-widest">
                            {exp.company}
                        </div>
                    </div>

                    <p className="text-lg text-secondary/80 font-light leading-relaxed max-w-lg">
                        {exp.description}
                    </p>

                    {/* Metrics HUD */}
                    <div className="grid grid-cols-2 gap-px bg-primary/5 border border-primary/5">
                        {exp.metrics.map((metric, idx) => (
                            <div key={idx} className="bg-background p-4 flex flex-col gap-2 group/metric">
                                <div className="flex items-center gap-2 opacity-40 group-hover/metric:opacity-100 transition-opacity">
                                    <metric.icon size={12} className="text-accent" />
                                    <span className="text-[8px] font-mono uppercase tracking-widest">{metric.label}</span>
                                </div>
                                <div className="text-xl md:text-2xl font-light font-mono">
                                    {metric.value}<span className="text-xs opacity-40 ml-1">{metric.suffix}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                            <span key={i} className="px-3 py-1 bg-primary/5 text-[9px] font-mono text-secondary tracking-widest uppercase rounded-full">
                                {skill}
                            </span>
                        ))}
                    </div>

                    <Magnetic strength={0.2}>
                        <a
                            href="#"
                            className="inline-flex items-center gap-4 text-[9px] font-mono uppercase tracking-[0.4em] text-accent hover:text-primary transition-colors py-4"
                        >
                            Access Logs <ArrowUpRight size={14} />
                        </a>
                    </Magnetic>
                </div>
            </motion.div>
        </motion.div>
    );
};

const Blueprint = ({ schematic, trigger }) => {
    return (
        <div className="absolute inset-0 p-12 opacity-10">
            <svg viewBox="0 0 400 400" className="w-full h-full text-accent" fill="none">
                {schematic === "database" ? (
                    <motion.path
                        d="M200 50L350 120V280L200 350L50 280V120L200 50Z"
                        stroke="currentColor"
                        strokeWidth="1"
                        initial={{ pathLength: 0 }}
                        animate={trigger ? { pathLength: 1 } : {}}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                ) : (
                    <motion.circle
                        cx="200" cy="200" r="100"
                        stroke="currentColor"
                        strokeWidth="0.5"
                        strokeDasharray="10 10"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    />
                )}
            </svg>
        </div>
    );
};

export default Experience;
