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
                                <h2 className="text-sm font-mono text-secondary mb-8 uppercase tracking-[0.2em]">02 / Origin Story</h2>
                                
                                <div className="overflow-hidden mb-12">
                                    <motion.h3 
                                        initial={{ y: "100%" }}
                                        whileInView={{ y: 0 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        viewport={{ once: true }}
                                        className="text-4xl md:text-6xl font-display font-medium text-primary leading-[1.1]"
                                    >
                                        Obsessed with solving hard problems. <br className="hidden md:block" />
                                        <span className="text-secondary italic font-light">Engineering systems that scale.</span>
                                    </motion.h3>
                                </div>

                                <div className="space-y-8 text-lg md:text-xl text-secondary leading-relaxed font-sans font-light max-w-2xl relative">
                                    <p className="indent-0">
                                        My journey started with a fascination for how complex algorithms could untangle real-world chaos. Today, I specialize in building <strong className="text-primary font-medium">Agentic AI systems</strong> and robust <strong className="text-primary font-medium">AI MCP architectures</strong> that turn raw models into autonomous, production-ready solutions.
                                    </p>
                                    <p>
                                        As a final-year AI & Machine Learning engineer, I don't just train models—I architect the entire ecosystem around them. My <strong className="text-primary font-medium">Full Stack capabilities</strong> bridged through high-performance <strong className="text-primary font-medium">Framer Motion</strong> interfaces allowed me to create digital experiences that feel as intelligent as the backends powering them.
                                    </p>
                                    <p>
                                        I operate with a precision-first mindset. Whether I'm deploying a scalable microservice or orchestrating a complex <strong className="text-primary font-medium">AI Agent architecture</strong>, I'm obsessed with the absolute quality of the final product. No shortcuts. Only elite-level engineering.
                                    </p>
                                </div>
                            </div>
                            <div className="md:col-span-5 relative md:pt-12">
                                <div className="relative aspect-[4/5] overflow-hidden rounded-sm group bg-surface border border-primary/5">
                                    <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
                                    <img 
                                        src={aboutImg} 
                                        alt="Abstract engineering visualization" 
                                        className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                                    />
                                    {/* Noise overlay for that 2026 rough texture */}
                                    <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
                                    
                                    {/* Corner Accents */}
                                    <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-primary/50 z-30"></div>
                                    <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-primary/50 z-30"></div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Redundant sections removed to favor dedicated Experience & Chronology section */}

            </div>
        </section>
    );
};

export default About;
