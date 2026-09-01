import { useRef } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import aboutImg from '../assets/about_hero.png';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Cpu, Globe, Zap } from 'lucide-react';

const p1Data = [
    "I'm a",
    { text: "Full Stack Developer", type: "strong" },
    "and founder with a focus on building production-ready applications. I specialize in the entire development lifecycle—from backend architecture using Python, FastAPI, and Node.js, to crafting responsive frontends with React and Next.js."
];

const p2Data = [
    "Through my agency,",
    { text: "DeepCipher Studio,", type: "strong" },
    "I've delivered multiple live applications for clients. My work frequently involves integrating powerful LLMs (OpenAI & Claude) and building automation workflows to solve real business problems, moving beyond standard web pages."
];

const p3Data = [
    "Currently, my main focus is on",
    { text: "AI-powered automation", type: "accent" },
    "and robust full-stack systems. I enjoy taking complex requirements and turning them into scalable, high-performance digital products."
];

const Word = ({ word, progress, range }) => {
    const opacity = useTransform(progress, range, [0.3, 1]);
    
    let className = "";
    if (word.type === "strong") className = "font-medium font-display";
    if (word.type === "accent") className = "font-medium italic underline decoration-accent/30 decoration-2 underline-offset-8";
    
    return (
        <>
            <motion.span style={{ opacity }} className={className}>
                {word.text}
            </motion.span>
            {" "}
        </>
    );
};

const ScrollRevealText = ({ data }) => {
    const paragraphRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: paragraphRef,
        offset: ["start 0.85", "start 0.4"]
    });

    const words = [];
    data.forEach(item => {
        if (typeof item === 'string') {
            item.split(" ").filter(w => w.length > 0).forEach(w => words.push({ text: w, type: 'normal' }));
        } else {
            item.text.split(" ").filter(w => w.length > 0).forEach(w => words.push({ text: w, type: item.type }));
        }
    });

    const step = 1 / words.length;

    return (
        <p ref={paragraphRef}>
            {words.map((word, i) => {
                const start = i * step;
                const end = start + step;
                
                return (
                    <Word key={i} word={word} progress={scrollYProgress} range={[start, end]} />
                );
            })}
        </p>
    );
};

const About = () => {
    return (
        <section id="about" className="py-12 md:py-20 lg:py-24 px-6 md:px-12 relative overflow-hidden bg-background">

            <div className="w-full z-10 relative">

                {/* Header & Bio */}
                <div className="mb-12 md:mb-20">
                    <ScrollReveal width="100%">
                        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                            <div className="lg:col-span-12 xl:col-span-7">
                                <h2 className="text-sm font-mono text-secondary mb-12 uppercase tracking-[0.3em] flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-accent/30"></span>
                                    02 / System Architecture
                                </h2>
                                
                                <div className="overflow-hidden mb-16">
                                    <motion.h3 
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        viewport={{ once: true }}
                                        className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-primary leading-[0.95] tracking-tighter"
                                    >
                                        Architecting <br />
                                        <span className="text-secondary italic font-light opacity-40">Intelligence</span>
                                    </motion.h3>
                                </div>

                                <div className="space-y-10 text-xl md:text-2xl text-primary leading-relaxed font-sans font-light max-w-3xl">
                                    <ScrollRevealText data={p1Data} />
                                    <ScrollRevealText data={p2Data} />
                                    <ScrollRevealText data={p3Data} />
                                </div>
                            </div>
                            
                            <div className="lg:col-span-12 xl:col-span-5 relative mt-12 xl:mt-24">
                                <div className="relative aspect-[4/5] md:aspect-[16/9] xl:aspect-[4/5] overflow-hidden rounded-sm group bg-surface border border-primary/5">
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
                                    <img 
                                        src={aboutImg} 
                                        alt="Abstract engineering visualization" 
                                        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
                                    
                                    <div className="absolute top-0 right-0 p-6 font-mono text-[10px] text-accent/40 tracking-widest uppercase">Node_v26.7</div>
                                    <div className="absolute bottom-6 left-6 w-8 h-8 border-t border-r border-accent/40 z-30 opacity-40"></div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Core focus grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {[
                        {
                            icon: Cpu,
                            title: "AI Engineering",
                            desc: "Integrating OpenAI and Claude APIs for AI-powered generation, personalized workflows, and automation."
                        },
                        {
                            icon: Globe,
                            title: "Backend Systems",
                            desc: "Architecting REST APIs, serving models with FastAPI, and optimizing SQL databases for high-performance data retrieval."
                        },
                        {
                            icon: Zap,
                            title: "Frontend Development",
                            desc: "Crafting fluid, responsive interfaces using Next.js, React, Tailwind CSS, and advanced motion systems like GSAP."
                        }
                    ].map((discipline, i) => (
                        <ScrollReveal key={i} delay={i * 0.1}>
                            <div className="p-10 border border-primary/5 bg-surface/20 backdrop-blur-md rounded-sm hover:border-accent/20 transition-all group">
                                <discipline.icon className="w-8 h-8 text-accent mb-12 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                                <h4 className="text-2xl font-display font-medium text-primary mb-6">{discipline.title}</h4>
                                <p className="text-secondary font-light leading-relaxed">
                                    {discipline.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Final punchy statement */}
                <div className="mt-16 md:mt-24 max-w-4xl">
                    <ScrollReveal>
                        <p className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-primary/30 leading-tight italic">
                            Currently pushing the limits of <span className="text-primary opacity-100 not-italic uppercase tracking-tighter">AI AUTOMATION</span> to enable a new era of proactive applications.
                        </p>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
};

export default About;
