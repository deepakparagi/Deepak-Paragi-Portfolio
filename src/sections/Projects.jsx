import { Github } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projectsData';

const Projects = () => {
    return (
        <section id="projects" className="relative py-16 md:py-32 flex flex-col justify-center overflow-hidden bg-background">

            <div className="relative z-10 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">

                {/* Header Section */}
                <div className="mb-12 md:mb-20 grid md:grid-cols-2 gap-12 items-end">
                    <ScrollReveal width="100%">
                        <h2 className="text-sm font-medium text-secondary mb-4 uppercase tracking-wider">01 / Selected Work</h2>
                        <h3 className="text-4xl md:text-5xl font-display font-semibold text-primary leading-tight">
                            Digital products <br /> crafted with care.
                        </h3>
                    </ScrollReveal>
                    <ScrollReveal delay={0.2} width="100%">
                        <p className="text-secondary text-lg leading-relaxed max-w-md md:ml-auto">
                            A selection of projects where I've helped bridge the gap between design and engineering.
                        </p>
                    </ScrollReveal>
                </div>

                {/* Projects List */}
                <div className="flex flex-col gap-8">
                    {projectsData.map((proj, i) => (
                        <ProjectCard
                            key={proj.id}
                            index={i}
                            project={proj}
                        />
                    ))}
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
