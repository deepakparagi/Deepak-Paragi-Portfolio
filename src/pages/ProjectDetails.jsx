import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// This would typically come from a shared data file or API
const projectsData = {
    "01": {
        title: "AI Fitness Coach",
        category: "Artificial Intelligence",
        period: "2024",
        overview: "A personalized workout planner powered by OpenAI that generates custom routines based on user goals and equipment availability.",
        challenge: "Users often struggle to create effective workout plans that match their specific constraints (time, equipment, injuries). Generic apps lack personalization.",
        solution: "Integrated GPT-4 to analyze user inputs and generate scientifically-backed workout splits. Implemented a drag-and-drop interface for users to tweak the generated plans.",
        stack: ["Next.js", "OpenAI API", "Tailwind CSS", "Supabase"],
        links: {
            live: "https://ai-fitness-coach.vercel.app",
            github: "https://github.com/deepakparagi"
        }
    },
    // Add other projects here
};

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projectsData[id] || projectsData["01"]; // Fallback for demo

    return (
        <div className="min-h-screen bg-background text-primary p-6 md:p-12">
            <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-12">
                <ArrowLeft size={20} />
                <span>Back to Home</span>
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <div className="mb-12">
                    <span className="text-accent font-mono text-sm tracking-widest uppercase">{project.category}</span>
                    <h1 className="text-4xl md:text-6xl font-display font-medium mt-4 mb-6">{project.title}</h1>
                    <div className="flex gap-4">
                        <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 bg-primary text-background rounded-full font-medium hover:opacity-90 transition-opacity">
                            View Live <ExternalLink size={16} />
                        </a>
                        <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-2 border border-primary/20 rounded-full font-medium hover:bg-surface transition-colors">
                            GitHub <Github size={16} />
                        </a>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-2 space-y-12">
                        <section>
                            <h2 className="text-2xl font-display mb-4">The Challenge</h2>
                            <p className="text-secondary leading-relaxed">{project.challenge}</p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-display mb-4">The Solution</h2>
                            <p className="text-secondary leading-relaxed">{project.solution}</p>
                        </section>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-sm font-medium uppercase tracking-widest text-secondary mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-surface rounded-md text-sm border border-primary/5">{tech}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
