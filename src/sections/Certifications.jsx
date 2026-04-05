import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const certsData = [
    {
        id: 1,
        title: "Getting Started with Artificial Intelligence",
        issuer: "IBM SkillsBuild",
        date: "Sep 2025",
        link: "https://www.credly.com/badges/253c36e8-4685-4962-a7f8-ee34db1cafca/linked_in_profile",
        category: "AI & LLM",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Generative AI Unleashing",
        issuer: "Infosys Springboard",
        date: "Jan 2025",
        link: "#",
        category: "Generative AI",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Frontend Developer Professional Certificate",
        issuer: "Meta",
        date: "Jan 2023",
        link: "#",
        category: "Frontend",
        image: "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=600&auto=format&fit=crop"
    }
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-16 md:py-32 px-4 md:px-12 bg-background relative overflow-hidden">
            <div className="max-w-screen-2xl mx-auto w-full relative z-10">
                <ScrollReveal width="100%">
                    <div className="mb-12 md:mb-20">
                        <h2 className="text-sm font-mono text-secondary mb-4 uppercase tracking-[0.2em]">05 / Accolades</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-medium text-primary leading-tight">
                            Credentials & Certifications.
                        </h3>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {certsData.map((cert, index) => (
                        <ScrollReveal key={cert.id} delay={index * 0.15} width="100%">
                            <motion.a 
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block h-full rounded-sm bg-surface/30 border border-primary/5 hover:border-accent/40 transition-all duration-500 overflow-hidden relative"
                                whileHover={{ y: -8 }}
                            >
                                {/* Image Handle */}
                                <div className="h-48 w-full overflow-hidden relative">
                                    <div className="absolute inset-0 bg-background/50 z-10 group-hover:bg-background/20 transition-colors duration-500 mix-blend-multiply" />
                                    <img 
                                        src={cert.image} 
                                        alt={cert.title} 
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
                                    />
                                    <div className="absolute top-4 right-4 z-20">
                                        <Award className="w-6 h-6 text-accent drop-shadow-md" />
                                    </div>
                                </div>
                                
                                {/* Content Handle */}
                                <div className="p-6 relative">
                                    <div className="absolute right-6 top-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <ExternalLink className="w-5 h-5 text-accent" />
                                    </div>
                                    
                                    <span className="font-mono text-xs text-accent uppercase tracking-widest mb-3 block">
                                        {cert.category}
                                    </span>
                                    <h4 className="text-xl font-display font-medium text-primary mb-2 line-clamp-2 pr-6">
                                        {cert.title}
                                    </h4>
                                    <div className="flex justify-between items-center mt-6">
                                        <span className="text-secondary/80 font-sans text-sm block">
                                            {cert.issuer}
                                        </span>
                                        <span className="text-primary/40 text-xs font-mono">
                                            {cert.date}
                                        </span>
                                    </div>
                                </div>
                            </motion.a>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
