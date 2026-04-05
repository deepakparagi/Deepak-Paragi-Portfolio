import { useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, ArrowRight, ArrowLeft } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { projectsData } from '../data/projectsData';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const containerRef = useRef(null);
    const navigate = useNavigate();

    const nextProject = () => {
        setActiveIndex((prev) => (prev + 1) % projectsData.length);
    };

    const prevProject = () => {
        setActiveIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    };

    return (
        <section id="projects" className="relative h-screen min-h-[800px] flex flex-col justify-center overflow-hidden bg-background py-10 md:py-20">
            
            <div className="relative z-10 px-6 md:px-12 max-w-screen-2xl mx-auto w-full h-full flex flex-col">
                
                {/* Header Section */}
                <div className="mb-10 md:mb-16 grid md:grid-cols-12 gap-8 items-end flex-shrink-0">
                    <div className="md:col-span-8">
                        <ScrollReveal width="100%">
                            <h2 className="text-xs font-mono text-secondary mb-3 uppercase tracking-[0.2em]">01 / Portfolio Showcase</h2>
                            <h3 className="text-3xl md:text-5xl font-display font-medium text-primary leading-tight">
                                Rotary Project <br /> <span className="text-secondary italic font-light">Experience.</span>
                            </h3>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Circle Carousel Container */}
                <div className="flex-1 relative flex items-center justify-center perspective-1000">
                    <div className="relative w-full max-w-4xl aspect-[16/10] flex items-center justify-center">
                        <AnimatePresence mode="popLayout">
                            {projectsData.map((project, index) => {
                                // Calculate position relative to active index
                                let position = index - activeIndex;
                                if (position < -Math.floor(projectsData.length / 2)) position += projectsData.length;
                                if (position > Math.floor(projectsData.length / 2)) position -= projectsData.length;

                                const isActive = position === 0;
                                const isVisible = Math.abs(position) <= 2;

                                if (!isVisible) return null;

                                return (
                                    <motion.div
                                        key={project.id}
                                        initial={{ opacity: 0, scale: 0.8, x: position * 100 + '%' }}
                                        animate={{
                                            opacity: isActive ? 1 : 0.6 / Math.abs(position),
                                            scale: isActive ? 1 : 0.8,
                                            x: position * 60 + '%',
                                            z: -Math.abs(position) * 100,
                                            rotateY: position * -25,
                                            filter: isActive ? 'blur(0px)' : 'blur(4px)',
                                        }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        className={`absolute w-full h-full rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-white/5 ${isActive ? 'z-50' : 'z-0'}`}
                                        onClick={() => isActive ? navigate(`/project/${project.id}`) : setActiveIndex(index)}
                                    >
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
                                        />
                                        
                                        {/* Overlay Info for Active Project */}
                                        {isActive && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent flex flex-col justify-end p-8 md:p-12"
                                            >
                                                <span className="text-accent font-mono text-xs uppercase tracking-widest mb-2">{project.category}</span>
                                                <h4 className="text-2xl md:text-4xl font-display text-primary mb-4">{project.title}</h4>
                                                <p className="text-secondary/80 text-sm md:text-base max-w-lg mb-6 line-clamp-2 md:line-clamp-none font-light leading-relaxed">
                                                    {project.description}
                                                </p>
                                                <div className="flex gap-4">
                                                     <div className="px-6 py-2 bg-primary text-background rounded-full font-mono text-xs uppercase tracking-widest hover:bg-accent transition-colors">
                                                         Explore Case Study
                                                     </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>

                    {/* Navigation Controls */}
                    <div className="absolute bottom-[-60px] flex items-center gap-12 text-primary z-[60]">
                        <button 
                            onClick={prevProject}
                            className="p-4 rounded-full border border-primary/10 hover:border-accent hover:text-accent transition-all duration-300"
                            aria-label="Previous project"
                        >
                            <ArrowLeft size={24} />
                        </button>
                        <div className="font-mono text-sm tracking-widest">
                            <span className="text-accent underline underline-offset-8 decoration-accent/30">{activeIndex + 1}</span> 
                            <span className="mx-2 text-secondary/30">/</span> 
                            <span className="text-secondary/50">{projectsData.length}</span>
                        </div>
                        <button 
                            onClick={nextProject}
                            className="p-4 rounded-full border border-primary/10 hover:border-accent hover:text-accent transition-all duration-300"
                            aria-label="Next project"
                        >
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

                {/* GitHub Archive Link */}
                <div className="mt-auto pt-20 text-center flex-shrink-0">
                    <ScrollReveal delay={0.4} width="100%">
                        <a
                            href="https://github.com/deepakparagi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-secondary hover:text-primary transition-colors duration-300 font-mono text-xs uppercase tracking-widest px-6 py-3 rounded-full border border-primary/10 hover:border-primary/30 hover:bg-surface"
                            aria-label="View GitHub archive"
                        >
                            <span>Archive</span>
                            <Github size={16} />
                        </a>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Projects;
