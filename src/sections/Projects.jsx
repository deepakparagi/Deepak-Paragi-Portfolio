import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import PropTypes from 'prop-types';
import aiFitnessImg from '../assets/ai_fitness_coach.webp';
import witnestImg from '../assets/witnest_joke_generator.webp';
import signifyImg from '../assets/signify_studio.webp';
import bipinSchoolImg from '../assets/bipin_school_hero.png';

const projects = [
    {
        id: "01",
        title: "Bipin Chikkatti School",
        category: "Web Development",
        description: "Designed and developed the official website for Bipin Chikkatti School, Gadag. The platform features sections for academics, admissions, faculty, and facilities, serving as a comprehensive digital hub for the school community.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://www.chikkattieducation.co.in/",
        image: bipinSchoolImg
    },
    {
        id: "02",
        title: "AI Fitness Coach",
        category: "Artificial Intelligence",
        description: "A personalized workout planner powered by OpenAI, generating custom routines based on user goals and equipment availability.",
        tags: ["React.js", "TailwindCSS", "OpenAI API"],
        link: "https://ai-fitness-coach-git-main-deepaks-projects-f551996f.vercel.app/",
        image: aiFitnessImg
    },
    {
        id: "03",
        title: "Witnest Joke Generator",
        category: "Web Application",
        description: "An interactive entertainment platform fetching dynamic content via external APIs with a focus on clean UI.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://witnest-joke-generator.vercel.app/",
        image: witnestImg
    },
    {
        id: "04",
        title: "Signify Studio",
        category: "Frontend Development",
        description: "A premium landing page template for creative agencies, featuring smooth scroll animations and responsive layout.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://signify-studio-wine.vercel.app/",
        image: signifyImg
    }
];

const ProjectItem = ({ project, index }) => {
    return (
        <motion.div
            className="group block w-full mb-12 last:mb-0 relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="bg-surface rounded-3xl border border-primary/5 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/10 group-hover:-translate-y-2">

                {/* Left: Content */}
                <div className="flex-1 flex flex-col gap-6 order-2 md:order-1 self-center">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="font-mono text-xs font-semibold text-accent uppercase tracking-widest px-3 py-1 bg-accent/5 rounded-full border border-accent/10">{project.category}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-display font-medium text-primary leading-tight">
                        {project.title}
                    </h3>

                    <p className="text-secondary text-base md:text-lg leading-relaxed font-light line-clamp-3">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {project.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1.5 bg-background border border-primary/5 rounded-md text-xs font-medium text-secondary/70 transition-colors duration-300">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 mt-6">
                        <Link
                            to={`/project/${project.id}`}
                            className="flex items-center gap-2 px-6 py-3 bg-primary text-background rounded-full font-medium hover:opacity-90 transition-opacity"
                        >
                            Case Study <ArrowUpRight size={18} />
                        </Link>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 border border-primary/20 rounded-full font-medium hover:bg-surface transition-colors"
                        >
                            Live Demo <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>

                {/* Right: Image */}
                <Link to={`/project/${project.id}`} className="w-full md:w-[55%] aspect-[16/10] bg-background rounded-2xl overflow-hidden relative order-1 md:order-2 border border-primary/5 shadow-inner cursor-pointer group/image">
                    <div className="absolute inset-0 bg-primary/0 group-hover/image:bg-primary/0 transition-colors duration-500 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-100 group-hover/image:opacity-0 transition-opacity duration-500 z-20 pointer-events-none mix-blend-multiply" />

                    <img
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

ProjectItem.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        category: PropTypes.string,
        description: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),

        link: PropTypes.string,
        image: PropTypes.string
    }).isRequired,
    index: PropTypes.number.isRequired
};

const Projects = () => {
    return (
        <section id="projects" className="relative py-32 flex flex-col justify-center overflow-hidden bg-background">

            <div className="relative z-10 px-6 md:px-12 max-w-screen-2xl mx-auto w-full">

                {/* Header Section */}
                <div className="mb-20 grid md:grid-cols-2 gap-12 items-end">
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
                    {projects.map((proj, i) => (
                        <ProjectItem
                            key={i}
                            index={i}
                            project={proj}
                        />
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <ScrollReveal delay={0.4} width="100%">
                        <a
                            href="https://github.com/deepakparagi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-secondary hover:text-primary transition-colors duration-300 font-medium px-6 py-3 rounded-full border border-primary/10 hover:border-primary/30 hover:bg-surface"
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
