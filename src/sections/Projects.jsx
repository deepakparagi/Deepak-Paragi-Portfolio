import { Github } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';
import KineticText from '../components/KineticText';

const Projects = () => {
    return (
        <section id="projects" className="relative py-16 md:py-32 flex flex-col justify-center overflow-hidden bg-background">

            <div className="relative z-10 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">

                {/* Header Section */}
                <div className="mb-32 md:mb-48">
                    <ScrollReveal width="100%">
                        <div className="flex items-center gap-6 mb-8 text-secondary/40">
                            <span className="font-mono text-[10px] tracking-[0.2em]">02</span>
                            <span className="h-px w-12 bg-primary/10"></span>
                            <h2 className="text-[10px] font-bold uppercase tracking-[0.5em]">Work & Projects</h2>
                        </div>
                        <KineticText>
                            <h3 className="text-[10vw] md:text-[6vw] font-serif italic text-primary tracking-tighter leading-[0.8]">
                                Selected <span className="text-secondary/30 not-italic font-display font-light">Works</span>
                            </h3>
                        </KineticText>
                    </ScrollReveal>
                </div>

                {/* Projects List - Broken Grid Layout */}
                <div className="flex flex-col gap-32 md:gap-64">
                    {projectsData.map((proj, i) => (
                        <div
                            key={proj.id}
                            className={`w-full flex ${i % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                        >
                            <div className="w-full lg:w-[85%] xl:w-[75%]">
                                <ProjectCard
                                    project={proj}
                                    index={i}
                                    isAlternate={i % 2 !== 0}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Vertical Decorative Label */}
                <div className="absolute left-4 top-1/2 -rotate-90 origin-left text-[10px] font-bold uppercase tracking-[1em] text-secondary/20 pointer-events-none hidden xl:block">
                    SELECTED WORKS / 2024 — 2026
                </div>

                <div className="mt-12 md:mt-24 text-center">
                    <ScrollReveal delay={0.4} width="100%">
                        <a
                            href="https://github.com/deepakparagi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-secondary hover:text-primary transition-colors duration-300 font-medium px-6 py-3 rounded-full border border-primary/10 hover:border-primary/30 hover:bg-surface"
                            aria-label="View GitHub archive"
                        >
                            <span>View Archive</span>
                            <Github size={18} />
                        </a>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Projects;
