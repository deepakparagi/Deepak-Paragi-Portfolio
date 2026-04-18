import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Star } from 'lucide-react';
import PropTypes from 'prop-types';
import LazyImage from './LazyImage';
import Skeleton from './Skeleton';

const ProjectCard = ({ project, index, isLoading = false }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Always declare hooks at the top level
    const mouseGradient = useMotionTemplate`
        radial-gradient(
            650px circle at ${mouseX}px ${mouseY}px,
            rgba(255,255,255,0.15),
            transparent 80%
        )
    `;

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    if (isLoading) {
        return (
            <div className={`relative flex flex-col gap-12 md:gap-20 items-center mb-24 md:mb-40 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}>
                <div className="flex-1 w-full space-y-6">
                    <Skeleton variant="rect" className="w-24 h-6 rounded-full" />
                    <Skeleton variant="rect" className="w-3/4 h-12 md:h-16" />
                    <div className="space-y-3">
                        <Skeleton variant="text" />
                        <Skeleton variant="text" />
                        <Skeleton variant="text" className="w-5/6" />
                    </div>
                    <div className="flex gap-2">
                        <Skeleton variant="rect" className="w-16 h-6" />
                        <Skeleton variant="rect" className="w-20 h-6" />
                        <Skeleton variant="rect" className="w-16 h-6" />
                    </div>
                </div>
                <div className="w-full md:w-[60%] aspect-[4/3] md:aspect-[16/10]">
                    <Skeleton variant="rect" className="w-full h-full rounded-[1.5rem] md:rounded-[2rem]" />
                </div>
            </div>
        );
    }

    return (
        <motion.div
            className="group block w-full mb-24 md:mb-40 last:mb-0 relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
            <div 
                className={`relative flex flex-col gap-12 md:gap-20 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
                onMouseMove={handleMouseMove}
            >
                {/* Content */}
                <div className={`flex-1 flex flex-col gap-6 relative z-10 w-full order-2 md:order-none ${index % 2 === 1 ? 'md:pl-8 lg:pl-16' : 'md:pr-8 lg:pr-16'}`}>
                    <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs font-semibold text-secondary uppercase tracking-widest px-3 py-1 bg-surface rounded-full border border-primary/5">
                            {project.category}
                        </span>
                        {project.featured && (
                            <span className="flex items-center gap-1.5 font-mono text-xs font-semibold text-accent uppercase tracking-widest px-3 py-1 bg-accent/5 rounded-full border border-accent/20">
                                <Star size={12} className="fill-accent" />
                                Featured
                            </span>
                        )}
                    </div>

                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-primary leading-[1.1] transition-transform duration-500 group-hover:translate-x-4">
                        <span className="text-accent/30 mr-4 tabular-nums">0{index + 1} /</span>
                        {project.title}
                    </h3>

                    <div className="relative mt-4">
                        <div className="space-y-4">
                            {project.challenge && project.solution ? (
                                <>
                                    <div className="pl-4 border-l border-primary/10 mb-4">
                                        <p className="text-secondary/60 text-sm font-mono uppercase tracking-widest mb-2">The Problem</p>
                                        <p className="text-secondary text-base leading-relaxed font-light line-clamp-2">{project.challenge}</p>
                                    </div>
                                    <div className="pl-4 border-l border-accent/30">
                                        <p className="text-accent text-sm font-mono uppercase tracking-widest mb-2">The Solution</p>
                                        <p className="text-primary/90 text-base leading-relaxed font-light line-clamp-3">{project.solution}</p>
                                    </div>
                                </>
                            ) : (
                                <p className="text-secondary text-lg leading-relaxed font-light line-clamp-4">
                                    {project.description}
                                </p>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="px-3 py-1 bg-surface border border-primary/5 rounded-sm text-xs font-mono text-secondary hover:text-primary hover:border-primary/20 transition-colors duration-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex flex-wrap gap-6 mt-8">
                        <Link
                            to={`/project/${project.id}`}
                            className="group/btn relative pb-1 font-mono text-xs tracking-widest uppercase text-primary hover:text-accent transition-colors flex items-center gap-2"
                            aria-label={`View ${project.title} case study`}
                        >
                            Case Study <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-accent origin-right scale-x-0 transition-transform duration-500 ease-out group-hover/btn:scale-x-100 group-hover/btn:origin-left"></span>
                        </Link>
                        
                        {project.link !== '#' && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group/btn relative pb-1 font-mono text-xs tracking-widest uppercase text-secondary hover:text-primary transition-colors flex items-center gap-2"
                                onClick={(e) => e.stopPropagation()}
                                aria-label={`View ${project.title} live demo`}
                            >
                                Live Site <ArrowUpRight size={14} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Image Frame */}
                <Link
                    to={`/project/${project.id}`}
                    whileTap={{ scale: 0.98 }}
                    className="w-full md:w-[60%] aspect-[4/3] md:aspect-[16/10] p-2 md:p-3 bg-white/[0.02] backdrop-blur-md rounded-[1.5rem] md:rounded-[2rem] border border-white/5 shadow-2xl relative block group/image transition-transform duration-700 ease-out hover:-translate-y-2 order-1 md:order-none overflow-hidden"
                >
                    <div className="relative w-full h-full rounded-[1rem] md:rounded-[1.5rem] overflow-hidden bg-background ring-1 ring-white/10">
                        <motion.div
                            className="pointer-events-none absolute -inset-px rounded-[1rem] md:rounded-[1.5rem] opacity-0 transition duration-300 md:group-hover/image:opacity-100 z-30"
                            animate={window.matchMedia('(pointer: coarse)').matches ? {
                                opacity: [0, 0.5, 0],
                                background: [
                                    'radial-gradient(400px circle at 50% 50%, rgba(255,255,255,0.05), transparent 80%)',
                                    'radial-gradient(400px circle at 50% 50%, rgba(255,255,255,0.15), transparent 80%)',
                                    'radial-gradient(400px circle at 50% 50%, rgba(255,255,255,0.05), transparent 80%)'
                                ]
                            } : {}}
                            transition={window.matchMedia('(pointer: coarse)').matches ? {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            } : {}}
                            style={{
                                background: mouseGradient,
                            }}
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 pointer-events-none opacity-50" />

                        <LazyImage
                            src={project.image}
                            alt={project.title}
                            className={`w-full h-full object-cover transform scale-[1.01] group-hover/image:scale-[1.05] transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] grayscale-[10%] group-hover/image:grayscale-0 ${project.focalPoint || 'object-center'}`}
                        />

                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-primary/10 backdrop-blur-md p-6 rounded-full shadow-lg opacity-0 scale-90 group-hover/image:opacity-100 group-hover/image:scale-100 md:opacity-0 md:group-hover/image:opacity-100 transition-all duration-[0.6s] ease-[cubic-bezier(0.16,1,0.3,1)] border border-primary/10 text-primary pointer-events-none">
                            <span className="font-mono text-xs uppercase tracking-[0.2em] block whitespace-nowrap">Explore Project</span>
                        </div>
                        
                        {/* Mobile 'Tap to View' Indicator */}
                        <div className="absolute bottom-4 right-4 z-30 md:hidden bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-primary/10 flex items-center gap-2">
                             <ArrowUpRight size={12} className="text-accent" />
                             <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Explore</span>
                        </div>
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
        focalPoint: PropTypes.string,
        featured: PropTypes.bool,
        challenge: PropTypes.string,
        solution: PropTypes.string
    }),
    index: PropTypes.number.isRequired,
    isLoading: PropTypes.bool
};

export default ProjectCard;
