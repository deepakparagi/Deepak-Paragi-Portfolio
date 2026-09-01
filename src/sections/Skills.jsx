import { motion } from 'framer-motion';
import { Layout, Server, Bot, Wrench, Shield, Zap } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const skills = [
    { 
        category: "AI & Machine Learning",
        icon: Bot,
        items: [
            { name: "OpenAI / Claude APIs", level: 95 },
            { name: "Prompt Engineering", level: 95 },
            { name: "scikit-learn / NLP", level: 85 },
            { name: "LSTM / Random Forest", level: 80 }
        ] 
    },
    { 
        category: "Backend Development",
        icon: Server,
        items: [
            { name: "Python / FastAPI", level: 90 },
            { name: "Node.js / Express", level: 90 },
            { name: "REST APIs", level: 95 },
            { name: "API Integration", level: 90 }
        ] 
    },
    { 
        category: "Frontend Development",
        icon: Layout, 
        items: [
            { name: "React.js / Next.js", level: 95 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Framer Motion / GSAP", level: 90 },
            { name: "Three.js", level: 80 }
        ] 
    },
    { 
        category: "Languages",
        icon: Shield,
        items: [
            { name: "Python", level: 95 },
            { name: "JavaScript / TypeScript", level: 90 },
            { name: "SQL", level: 85 },
            { name: "HTML5 / CSS3", level: 95 }
        ] 
    },
    { 
        category: "Databases & Tools",
        icon: Zap,
        items: [
            { name: "SQL / MongoDB", level: 85 },
            { name: "Git / GitHub", level: 90 },
            { name: "Vercel Deployment", level: 95 },
            { name: "Cursor / AI Tools", level: 90 }
        ] 
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-10 md:py-16 px-4 md:px-12 bg-background relative overflow-hidden text-primary">
            <div className="w-full relative z-10">
                <ScrollReveal width="100%">
                    <div className="mb-12 md:mb-20">
                        <h2 className="text-sm font-mono text-secondary mb-4 uppercase tracking-[0.2em]">03 / Tactical Arsenal</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-medium text-primary leading-tight">
                            Tools of the Trade.
                        </h3>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
                    {skills.map((skillGroup, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div className="group h-full p-8 rounded-sm bg-surface/30 backdrop-blur-xl border border-primary/5 hover:border-accent/30 transition-all duration-500 relative flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="flex items-center gap-3 mb-10 relative z-10">
                                    <skillGroup.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                                    <h3 className="text-sm font-mono tracking-[0.2em] uppercase text-primary">
                                        {skillGroup.category}
                                    </h3>
                                </div>

                                <div className="space-y-8 relative z-10 flex-grow pt-4">
                                    {skillGroup.items.map((item, i) => (
                                        <div key={i} className="flex flex-col gap-3">
                                            <div className="flex justify-between items-center text-[10px] uppercase tracking-[0.2em] mb-1">
                                                <span className="text-secondary/80 group-hover:text-primary transition-colors font-mono">{item.name}</span>
                                                <span className="text-accent/60 font-mono italic">{item.level}%</span>
                                            </div>
                                            <div className="h-[1px] w-full bg-primary/5 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${item.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.5, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
                                                    className="h-full bg-accent"
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
