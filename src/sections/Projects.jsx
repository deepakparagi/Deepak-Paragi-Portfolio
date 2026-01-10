import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { GradientShape } from '../components/Decorative';
import { SystemLabel, Crosshair } from '../components/Technical';
import PropTypes from 'prop-types';

const projects = [
    {
        id: "01",
        title: "Music Streaming App",
        category: "Full Stack Engineering",
        tags: ["Java", "MongoDB", "JS", "Apache", "REST API"],
        link: "https://github.com/deepakparagi"
    },
    {
        id: "02",
        title: "AI Fitness Coach",
        category: "Artificial Intelligence",
        tags: ["Next.js", "OpenAI", "Tailwind CSS"],
        link: "https://ai-fitness-coach-git-main-deepaks-projects-f551996f.vercel.app/"
    },
    {
        id: "03",
        title: "Bipin Chikkatti School",
        category: "Web Development",
        tags: ["HTML", "CSS", "JS", "Vercel"],
        link: "https://deepakparagi.github.io/bipin-chikkatti-school/"
    },
];

const ProjectItem = ({ project, index }) => {
    return (
        <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block py-12 md:py-20 border-b border-white/10 cursor-pointer relative z-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
        >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-8">

                {/* Left: ID & Title */}
                <div className="md:w-3/5">
                    <div className="flex items-baseline gap-4 md:gap-8 mb-4">
                        <span className="font-mono text-accent text-sm md:text-base">
                            {project.id}
                        </span>
                        <h3 className="text-3xl md:text-6xl font-display font-medium text-white group-hover:text-white/80 transition-colors duration-300">
                            {project.title}
                        </h3>
                    </div>
                    <div className="md:pl-[calc(2rem+32px)]"> {/* Indent to align with title start approximately */}
                        <p className="text-secondary/70 text-lg font-light mb-6">
                            {project.category}
                        </p>
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="text-xs font-mono text-secondary/50 uppercase tracking-wider">
                                    {tag}
                                    {i !== project.tags.length - 1 && <span className="ml-4 text-secondary/20">/</span>}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Action Icon */}
                <div className="md:w-1/5 flex justify-end items-start pt-2">
                    <div className="p-4 rounded-full border border-white/5 bg-white/[0.02] group-hover:bg-white group-hover:text-black transition-all duration-500">
                        <ArrowUpRight size={24} />
                    </div>
                </div>

            </div>
        </motion.a>
    );
};

ProjectItem.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        category: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        link: PropTypes.string
    }).isRequired,
    index: PropTypes.number.isRequired
};

const Projects = () => {
    return (
        <section id="work" className="relative py-32 bg-background min-h-screen flex flex-col justify-center overflow-hidden">

            {/* Background Elements */}
            <div className="absolute top-24 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="absolute top-12 right-6 hidden 2xl:block opacity-20">
                <SystemLabel>SYS.PROJECTS_LOADED</SystemLabel>
            </div>
            <Crosshair className="absolute bottom-24 left-6 hidden 2xl:block opacity-20" />

            <div className="relative z-10 px-6 md:px-12 max-w-7xl mx-auto w-full">

                {/* Header Section */}
                <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-12">
                    <ScrollReveal width="100%">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <h2 className="text-sm font-mono text-accent">02. SELECTED WORK</h2>
                                <div className="h-px w-24 bg-accent/20"></div>
                            </div>
                            <h3 className="text-4xl md:text-7xl font-display font-light text-white leading-[1] tracking-tight max-w-4xl">
                                Crafting digital experiences with <span className="text-white/30">precision</span> and <span className="text-white/30">intelligence</span>.
                            </h3>
                        </div>
                    </ScrollReveal>


                </div>

                {/* Projects List */}
                <div className="border-t border-white/10">
                    {projects.map((proj, i) => (
                        <ProjectItem
                            key={i}
                            index={i}
                            project={proj}
                        />
                    ))}
                </div>

                <div className="mt-32 text-center">
                    <ScrollReveal delay={0.4} width="100%">
                        <a
                            href="https://github.com/deepakparagi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-secondary hover:text-white transition-colors duration-300 border-b border-transparent hover:border-white pb-1"
                        >
                            <span className="font-mono text-sm tracking-widest uppercase">VIEW ALL REPOSITORIES</span>
                            <Github size={16} />
                        </a>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Projects;
