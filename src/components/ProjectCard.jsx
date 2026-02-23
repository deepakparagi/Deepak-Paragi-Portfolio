import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Star } from 'lucide-react';
import PropTypes from 'prop-types';
import LazyImage from './LazyImage';

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            className="group block w-full mb-12 last:mb-0 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -12, scale: 1.02 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
            <div className="bg-surface rounded-3xl border border-primary/5 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center transition-all duration-500 hover:border-primary/20 relative overflow-hidden">

                {/* Glow Effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ filter: 'blur(20px)' }}
                />

                {/* Left: Content */}
                <div className="flex-1 flex flex-col gap-6 order-2 md:order-1 self-center">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs font-semibold text-accent uppercase tracking-widest px-3 py-1 bg-accent/5 rounded-full border border-accent/10">
                            {project.category}
                        </span>
                        {project.featured && (
                            <span className="flex items-center gap-1.5 font-mono text-xs font-semibold text-primary uppercase tracking-widest px-3 py-1 bg-primary/5 rounded-full border border-primary/10">
                                <Star size={12} className="fill-primary" />
                                Featured
                            </span>
                        )}
                    </div>

                    <h3 className="text-3xl md:text-4xl font-display font-medium text-primary leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-secondary text-base md:text-lg leading-relaxed font-light line-clamp-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1.5 bg-background border border-primary/5 rounded-md text-xs font-medium text-secondary/70 transition-colors duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-4 mt-6">
                        <Link
                            to={`/project/${project.id}`}
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-full font-medium hover:opacity-90 transition-opacity"
                            aria-label={`View ${project.title} case study`}
                        >
                            Case Study <ArrowUpRight size={18} />
                        </Link>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-full font-medium hover:bg-surface transition-colors"
                            aria-label={`View ${project.title} live demo`}
                        >
                            Live Demo <ArrowUpRight size={18} />
                        </a>
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-full font-medium hover:bg-surface transition-colors"
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                <Github size={18} />
                                Code
                            </a>
                        )}
                    </div>
                </div>

                {/* Right: Image */}
                <Link
                    to={`/project/${project.id}`}
                    className="w-full md:w-[55%] aspect-[16/10] bg-background rounded-2xl overflow-hidden relative order-1 md:order-2 border border-primary/5 shadow-inner cursor-pointer group/image"
                >
                    <div className="absolute inset-0 bg-primary/0 group-hover/image:bg-primary/0 transition-colors duration-500 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-100 group-hover/image:opacity-0 transition-opacity duration-500 z-20 pointer-events-none mix-blend-multiply" />

                    <LazyImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform scale-100 group-hover/image:scale-105 transition-transform duration-700 ease-in-out"
                    />

                    <div className="absolute top-4 right-4 z-30 bg-surface/90 backdrop-blur-sm p-3 rounded-full shadow-lg opacity-0 group-hover/image:opacity-100 transform translate-y-4 group-hover/image:translate-y-0 transition-all duration-500 ease-out border border-primary/5">
                        <ArrowUpRight size={20} className="text-primary" />
                    </div>
                </Link>

            </div>
        </motion.div>
    );
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        link: PropTypes.string.isRequired,
        github: PropTypes.string,
        image: PropTypes.string.isRequired,
        featured: PropTypes.bool
    }).isRequired,
    index: PropTypes.number.isRequired
};

export default ProjectCard;
