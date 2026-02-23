import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProjectById, projectsData } from '../data/projectsData';
import KineticText from '../components/KineticText';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = getProjectById(id) || projectsData[0]; // Fallback to first project

    // Get related projects (same category, excluding current)
    const relatedProjects = projectsData.filter(
        p => p.category === project.category && p.id !== project.id
    ).slice(0, 2);

    return (
        <div className="min-h-screen bg-background text-primary">
            {/* Cinematic Header Section */}
            <div className="relative h-[70vh] w-full overflow-hidden flex flex-col justify-end p-6 md:p-12 pb-24">
                {/* Background Text Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display font-black text-primary/[0.02] select-none pointer-events-none whitespace-nowrap z-0">
                    {project.category.toUpperCase()}
                </div>

                <div className="max-w-screen-2xl mx-auto w-full z-10">
                    <Link to="/" className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors mb-12 group" aria-label="Back to home">
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-mono text-xs uppercase tracking-widest font-bold">Return to Core</span>
                    </Link>

                    <div className="max-w-4xl">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="h-px w-8 bg-accent"></span>
                            <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase font-bold">{project.category}</span>
                        </div>

                        <KineticText className="w-fit">
                            <h1 className="text-5xl md:text-9xl font-display font-medium tracking-tighter leading-[0.8] mb-8">
                                {project.title}
                            </h1>
                        </KineticText>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-6">
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                                className="group flex items-center gap-3 px-8 py-4 bg-primary text-background rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent transition-colors relative overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-2">Initialize Demo <ExternalLink size={14} /></span>
                                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </a>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-3 px-8 py-4 border border-primary/20 rounded-full font-bold uppercase tracking-widest text-xs hover:border-accent hover:text-accent transition-colors"
                                >
                                    Source Code <Github size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Cinematic Project Image Reveal */}
            <div className="px-6 md:px-12 -mt-12 mb-24 relative z-20">
                <div className="max-w-screen-2xl mx-auto">
                    <motion.div
                        initial={{ clipPath: 'inset(100% 0 0 0)' }}
                        whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="rounded-2xl overflow-hidden border border-primary/5 shadow-2xl bg-surface"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-1000"
                            loading="eager"
                        />
                    </motion.div>
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 pb-32">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-display mb-4">Overview</h2>
                            <p className="text-secondary leading-relaxed">{project.overview}</p>
                        </section>

                        {/* Challenge */}
                        <section>
                            <h2 className="text-2xl font-display mb-4">The Challenge</h2>
                            <p className="text-secondary leading-relaxed">{project.challenge}</p>
                        </section>

                        {/* Solution */}
                        <section>
                            <h2 className="text-2xl font-display mb-4">The Solution</h2>
                            <p className="text-secondary leading-relaxed">{project.solution}</p>
                        </section>

                        {/* Lessons Learned */}
                        {project.lessonsLearned && project.lessonsLearned.length > 0 && (
                            <section>
                                <h2 className="text-2xl font-display mb-4">Lessons Learned</h2>
                                <ul className="space-y-3">
                                    {project.lessonsLearned.map((lesson, index) => (
                                        <li key={index} className="flex gap-3">
                                            <span className="text-accent mt-1">→</span>
                                            <span className="text-secondary leading-relaxed">{lesson}</span>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-medium uppercase tracking-widest text-secondary mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-surface rounded-md text-sm border border-primary/5">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-medium uppercase tracking-widest text-secondary mb-4">Year</h3>
                            <p className="text-lg">{project.metrics.year}</p>
                        </div>
                    </div>
                </div>

                {/* Related Projects */}
                {relatedProjects.length > 0 && (
                    <section className="mt-20 pt-12 border-t border-primary/10">
                        <h2 className="text-2xl font-display mb-8">Related Projects</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {relatedProjects.map(relProject => (
                                <Link
                                    key={relProject.id}
                                    to={`/project/${relProject.id}`}
                                    className="group block p-6 bg-surface rounded-xl border border-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="aspect-video mb-4 rounded-lg overflow-hidden bg-background">
                                        <img
                                            src={relProject.image}
                                            alt={relProject.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                    </div>
                                    <h3 className="text-xl font-display mb-2 group-hover:text-accent transition-colors">
                                        {relProject.title}
                                    </h3>
                                    <p className="text-secondary text-sm line-clamp-2">{relProject.description}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Back to Projects */}
                <div className="mt-16 text-center">
                    <Link
                        to="/#projects"
                        className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors border-b border-secondary/20 hover:border-primary/30 pb-1 font-mono text-xs uppercase tracking-widest"
                    >
                        ← View All Projects
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
