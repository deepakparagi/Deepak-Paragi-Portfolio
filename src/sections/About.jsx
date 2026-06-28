import ScrollReveal from '../components/ScrollReveal';
import aboutImg from '../assets/about_hero.png';
import { motion } from 'framer-motion';
import { Cpu, Globe, Zap } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-16 md:py-32 lg:py-40 px-6 md:px-12 relative overflow-hidden bg-background">

            <div className="max-w-screen-2xl mx-auto w-full z-10 relative">

                {/* Header & Bio */}
                <div className="mb-24 md:mb-40">
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

                                <div className="space-y-10 text-xl md:text-2xl text-secondary leading-relaxed font-sans font-light max-w-3xl">
                                    <p>
                                        I'm an **AI Full Stack Engineer** operating at the precise intersection of frontier intelligence and production-grade engineering. I don't just build models—I architect the ecosystems that allow them to live, breathe, and act autonomously within scalable digital products.
                                    </p>
                                    <p>
                                        As the Founder of **DEEPCIPHER Studio**, I've managed the complete lifecycle of premium web applications, shipping high-performance platforms that prioritize absolute system integrity and zero-layout-shift UI motion. I build for materiality, precision, and visceral user experiences.
                                    </p>
                                    <p>
                                        Currently, my focus is entirely on the next paradigm of software: building complex <strong className="text-primary font-medium italic underline decoration-accent/30 decoration-2 underline-offset-8">RAG pipelines</strong> and **Agentic Workflows**. I'm pushing the boundaries of what's possible with LLM orchestration to create systems that are proactive, autonomous, and undeniably powerful.
                                    </p>
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
                            title: "Agentic Workflows",
                            desc: "Designing autonomous LLM behaviors that navigate complex, multi-step tasks with zero-latency execution patterns."
                        },
                        {
                            icon: Globe,
                            title: "Distributed Systems",
                            desc: "Building resilient, high-scale backends that bridge the gap between AI inference and production-grade stability."
                        },
                        {
                            icon: Zap,
                            title: "Tactile Interfaces",
                            desc: "Crafting fluid, motion-driven frontends that prioritize kinetic feedback and editorial typographic scales."
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
                <div className="mt-32 md:mt-48 max-w-4xl">
                    <ScrollReveal>
                        <p className="text-3xl md:text-5xl lg:text-6xl font-display font-medium text-primary/30 leading-tight italic">
                            Currently pushing the limits of <span className="text-primary opacity-100 not-italic uppercase tracking-tighter">Model Context Protocol</span> to enable a new era of proactive machine intelligence.
                        </p>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
};

export default About;
