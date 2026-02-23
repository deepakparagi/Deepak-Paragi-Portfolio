import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, Calendar, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { getProjectById, projectsData } from '../data/projectsData';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = getProjectById(id) || projectsData[0]; // Fallback to first project

    // Get related projects (same category, excluding current)
    const relatedProjects = projectsData.filter(
        p => p.category === project.category && p.id !== project.id
    ).slice(0, 2);

    return (
        <div className="min-h-screen bg-background text-primary p-6 md:p-12">
            <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-12" aria-label="Back to home">
                <ArrowLeft size={20} />
                <span>Back to Home</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                {/* Hero Section */}
                <div className="mb-12">
                    <span className="text-accent font-mono text-sm tracking-widest uppercase">{project.category}</span>
                    <h1 className="text-4xl md:text-6xl font-display font-medium mt-4 mb-6">{project.title}</h1>

                    {/* Metadata */}
                    <div className="flex flex-wrap gap-6 mb-8 text-secondary">
                        <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span className="text-sm">{project.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Code2 size={16} />
                            <span className="text-sm">{project.metrics.technologies} Technologies</span>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-2 bg-primary text-background rounded-full font-medium hover:opacity-90 transition-opacity"
                            aria-label={`View ${project.title} live demo`}
                        >
                            View Live <ExternalLink size={16} />
                        </a>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 px-6 py-2 border border-primary/20 rounded-full font-medium hover:bg-surface transition-colors"
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                GitHub <Github size={16} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Project Image */}
                <div className="mb-12 rounded-2xl overflow-hidden border border-primary/5 shadow-xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto"
                        loading="eager"
                    />
                </div>

                {/* Content Grid */}
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
                        className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors border-b border-secondary/20 hover:border-primary/30 pb-1"
                    >
                        ← View All Projects
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
