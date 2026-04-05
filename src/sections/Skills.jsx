import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { Layout, Server, Bot, Wrench } from 'lucide-react';

const skills = [
    { 
        category: "Frontend",
        icon: Layout, 
        items: [
            { name: "React / Next.js", level: 90 },
            { name: "Tailwind CSS", level: 95 },
            { name: "Framer Motion", level: 85 },
            { name: "TypeScript", level: 80 }
        ] 
    },
    { 
        category: "Backend",
        icon: Server,
        items: [
            { name: "Node.js / Express", level: 85 },
            { name: "SQL / PostgreSQL", level: 80 },
            { name: "MongoDB", level: 75 },
            { name: "RESTful APIs", level: 85 }
        ] 
    },
    { 
        category: "AI / ML",
        icon: Bot,
        items: [
            { name: "Python", level: 90 },
            { name: "Machine Learning", level: 80 },
            { name: "Deep Learning (NLP)", level: 75 },
            { name: "Generative AI", level: 85 }
        ] 
    },
    { 
        category: "Tools & DevOps",
        icon: Wrench,
        items: [
            { name: "Git & GitHub", level: 90 },
            { name: "Docker", level: 70 },
            { name: "Vercel / CI-CD", level: 80 },
            { name: "Figma", level: 75 }
        ] 
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-16 md:py-32 px-4 md:px-12 bg-background relative overflow-hidden">
            <div className="max-w-screen-2xl mx-auto w-full relative z-10">
                <ScrollReveal width="100%">
                    <div className="mb-12 md:mb-20">
                        <h2 className="text-sm font-mono text-secondary mb-4 uppercase tracking-[0.2em]">03 / Arsenal</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-medium text-primary leading-tight">
                            Tools of the trade.
                        </h3>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {skills.map((skillGroup, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div className="group h-full p-8 rounded-sm bg-surface/50 backdrop-blur-sm border border-primary/5 hover:border-accent/30 transition-all duration-500 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="flex items-center gap-3 mb-8 relative z-10">
                                    <skillGroup.icon className="w-5 h-5 text-accent" strokeWidth={1.5} />
                                    <h3 className="text-lg font-mono tracking-wide uppercase text-primary">
                                        {skillGroup.category}
                                    </h3>
                                </div>

                                <div className="space-y-6 relative z-10 flex flex-col h-[calc(100%-4rem)]">
                                    {skillGroup.items.map((item, i) => (
                                        <div key={i} className="flex flex-col gap-2">
                                            <div className="flex justify-between items-center text-xs uppercase tracking-widest mb-1">
                                                <span className="text-secondary group-hover:text-primary transition-colors font-mono">{item.name}</span>
                                                <span className="text-accent/40 font-mono italic">{item.level}%</span>
                                            </div>
                                            <div className="h-[1px] w-full bg-primary/10 rounded-full overflow-hidden">
                                                <motion.div 
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${item.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1.2, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
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
