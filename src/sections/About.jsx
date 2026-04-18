import ScrollReveal from '../components/ScrollReveal';
import aboutImg from '../assets/about_hero.png';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-16 md:py-32 px-6 md:px-12 relative overflow-hidden">

            <div className="max-w-screen-2xl mx-auto w-full z-10 relative">

                {/* header */}
                <div className="mb-12 md:mb-24">
                    <ScrollReveal width="100%">
                        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
                            <div className="md:col-span-7">
                                <h2 className="text-sm font-mono text-secondary mb-8 uppercase tracking-[0.2em]">02 / System Architecture</h2>
                                
                                <div className="overflow-hidden mb-12">
                                    <motion.h3 
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        viewport={{ once: true }}
                                        className="text-4xl md:text-6xl font-display font-medium text-primary leading-[1.05]"
                                    >
                                        Architecting intelligence. <br className="hidden md:block" />
                                        <span className="text-secondary italic font-light">Engineering systems that redefine autonomy.</span>
                                    </motion.h3>
                                </div>

                                <div className="space-y-8 text-lg md:text-xl text-secondary leading-relaxed font-sans font-light max-w-2xl relative">
                                    <p className="indent-0">
                                        I operate at the intersection of **Artificial Intelligence** and **Production-Grade Engineering**. As an AI & Machine Learning specialist, I don't just build models—I architect the ecosystems that allow them to live, breathe, and act autonomously. My work is focused on the deployment of <strong className="text-primary font-medium italic underline decoration-accent/30 decoration-2 underline-offset-4">Agentic Workflows</strong> and <strong className="text-primary font-medium">Full Stack distributed systems</strong> that scale.
                                    </p>
                                    <p>
                                        My engineering philosophy is rooted in **Materiality and Precision**. Whether I'm orchestrating a complex <strong className="text-primary font-medium">RAG (Retrieval-Augmented Generation) pipeline</strong> or crafting a high-performance web interface, I prioritize absolute system integrity and sub-millisecond efficiency. I believe that the next generation of digital experiences won't just be "smart"—they will be sentient-like, proactive, and perfectly integrated into our physical reality.
                                    </p>
                                    <p>
                                        I am a final-year engineer currently pushing the boundaries of what is possible with **Autonomous Agents** and **MCP (Model Context Protocol)**. I operate with a zero-compromise mindset on code quality, performance metrics, and aesthetic excellence. I don't just write code; I design the future of human-machine interaction.
                                    </p>
                                </div>
                            </div>
                            <div className="md:col-span-5 relative md:pt-12">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-sm group bg-surface border border-primary/5">
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
                                    <img 
                                        src={aboutImg} 
                                        alt="Abstract engineering visualization" 
                                        className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                                    />
                                    {/* Noise overlay for that tactile texture */}
                                    <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.05] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
                                    
                                    {/* Minimalist Accents */}
                                    <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-accent/20 tracking-widest uppercase">Node_v26.7</div>
                                    <div className="absolute bottom-4 left-4 w-4 h-4 border-t border-r border-accent/40 z-30 opacity-40"></div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default About;
