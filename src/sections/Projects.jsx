import { Github } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = ({ isLoading }) => {
    return (
        <section id="projects" className="relative pt-10 pb-16 md:py-20 flex flex-col justify-center overflow-hidden bg-background">

            <div className="relative z-10 px-6 md:px-12 w-full">

                {/* Header Section */}
                <div className="mb-10 md:mb-16 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
                    <div className="md:col-span-8">
                        <ScrollReveal width="100%">
                            <h2 className="text-sm font-mono text-secondary mb-4 uppercase tracking-[0.2em]">01 / Selected Work</h2>
                            <h3 className="text-4xl md:text-6xl font-display font-medium text-primary leading-[1.1]">
                                Engineered experiences <br /> <span className="text-secondary italic font-light">crafted with precision.</span>
                            </h3>
                        </ScrollReveal>
                    </div>
                    <div className="md:col-span-4">
                        <ScrollReveal delay={0.2} width="100%">
                            <p className="text-secondary/80 font-sans font-light text-lg leading-relaxed md:ml-auto">
                                A selection of projects where I've bridged the gap between complex engineering systems and beautiful user interfaces.
                            </p>
                        </ScrollReveal>
                    </div>
                </div>

                {/* Projects List */}
                <div className="flex flex-col gap-8">
                    {isLoading ? (
                        Array.from({ length: 3 }).map((_, i) => (
                            <ProjectCard key={`skeleton-${i}`} isLoading={true} index={i} />
                        ))
                    ) : (
                        projectsData.map((proj, i) => (
                            <ProjectCard
                                key={proj.id}
                                index={i}
                                project={proj}
                                isLoading={false}
                            />
                        ))
                    )}
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
