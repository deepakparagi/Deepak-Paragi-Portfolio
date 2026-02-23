import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, Star } from 'lucide-react';
import PropTypes from 'prop-types';
import LazyImage from './LazyImage';
import KineticText from './KineticText';

const ProjectCard = ({ project, index, isAlternate }) => {
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        mouseX.set((e.clientX - left) / width);
        mouseY.set((e.clientY - top) / height);
    };

    const baseFreq = useTransform(mouseX, [0, 1], [0.03, 0.07]);
    const distortionScale = useTransform(mouseY, [0, 1], [20, 50]);

    return (
        <motion.div
            className="group block w-full relative"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
        >
            <div className="flex flex-col gap-12">
                {/* Header: Project Number and Title */}
                <div className={`flex flex-col gap-4 ${isAlternate ? 'items-end text-right' : 'items-start'}`}>
                    <div className="flex items-center gap-3">
                        <span className="w-8 h-px bg-accent/40"></span>
                        <span className="font-sans text-[10px] font-bold text-secondary uppercase tracking-[0.5em]">
                            0{index + 1}
                        </span>
                    </div>
                    <Link to={`/project/${project.id}`}>
                        <h3 className="text-4xl md:text-8xl font-serif italic text-primary tracking-tight transition-colors duration-500 hover:text-accent">
                            {project.title}
                        </h3>
                    </Link>
                </div>

                {/* Main Content Split */}
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-16 items-start`}>

                    {/* Image Area */}
                    <Link
                        to={`/project/${project.id}`}
                        className={`lg:col-span-8 ${isAlternate ? 'lg:order-2' : ''} w-full aspect-[16/10] bg-surface overflow-hidden relative group/image block`}
                    >
                        <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale brightness-90 group-hover/image:grayscale-0 group-hover/image:brightness-100 transition-all duration-1000 ease-in-out"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            />
                        </motion.div>

                        <div className="absolute inset-0 bg-primary/5 group-hover/image:bg-primary/0 transition-colors duration-700" />

                        {/* Elegant Reveal Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/image:opacity-100 transition-all duration-500">
                            <div className="px-8 py-3 bg-primary text-background font-display text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-sm -translate-y-4 group-hover/image:translate-y-0 transition-transform duration-500">
                                View Case Study
                            </div>
                        </div>
                    </Link>

                    {/* Meta and Description */}
                    <div className={`lg:col-span-4 ${isAlternate ? 'lg:order-1' : ''} flex flex-col gap-10 lg:pt-12`}>
                        <p className="text-secondary text-lg leading-relaxed font-light font-sans max-w-sm">
                            {project.description}
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {project.tags?.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-[9px] font-sans font-bold uppercase tracking-[0.2em] text-secondary/60"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* CTA Area */}
                        <div className="pt-4">
                            <Link
                                to={`/project/${project.id}`}
                                className="group/btn inline-flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.4rem] text-primary hover:text-accent transition-all duration-500"
                            >
                                <span>Discover</span>
                                <div className="relative flex items-center">
                                    <div className="w-16 h-px bg-primary/20 group-hover/btn:bg-accent group-hover/btn:w-24 transition-all duration-700" />
                                    <ArrowUpRight size={14} className="absolute right-0 opacity-0 group-hover/btn:opacity-100 transition-all duration-500 translate-x-4 group-hover/btn:translate-x-0" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
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
