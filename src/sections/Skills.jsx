import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import KineticText from '../components/KineticText';

const skills = [
    {
        id: "01",
        label: "PRG",
        category: "Programming",
        items: ["Python", "SQL", "Java", "C++"]
    },
    {
        id: "02",
        label: "WEB",
        category: "Web Technologies",
        items: ["HTML", "CSS", "RESTful APIs", "React.js"]
    },
    {
        id: "03",
        label: "AI",
        category: "Artificial Intelligence",
        items: ["Machine Learning", "Deep Learning", "NLP", "Generative AI"]
    },
    {
        id: "04",
        label: "CS",
        category: "Core CS",
        items: ["Data Structures", "DBMS (SQL)", "OS Concepts", "Computer Networks"]
    }
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 md:py-48 px-6 md:px-12 bg-background relative overflow-hidden">
            {/* Background Texture Detail */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
                <div className="absolute top-0 right-0 text-[20vw] font-display font-black leading-none translate-x-1/4 -translate-y-1/4">
                    EXPERTISE
                </div>
            </div>

            <div className="max-w-screen-2xl mx-auto w-full relative z-10">
                <div className="mb-24 md:mb-32">
                    <ScrollReveal width="100%">
                        <div className="flex items-center gap-4 mb-6 text-accent">
                            <span className="h-px w-12 bg-accent opacity-50"></span>
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em]">02 / Knowledge</h2>
                        </div>
                        <KineticText>
                            <h3 className="text-5xl md:text-8xl font-display font-medium text-primary tracking-tighter leading-[0.9]">
                                Technical <br />
                                <span className="italic font-light text-secondary">Expertise</span>
                            </h3>
                        </KineticText>
                    </ScrollReveal>
                </div>

                {/* Matrix Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-primary/10 border border-primary/10 overflow-hidden">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                            className="bg-background group relative flex flex-col p-8 md:p-12 min-h-[400px] hover:bg-surface/50 transition-colors duration-500"
                        >
                            {/* Vertical Label (Blueprint Style) */}
                            <div className="absolute top-8 right-8 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent flex items-center gap-2 [writing-mode:vertical-lr] opacity-30 group-hover:opacity-100 transition-opacity">
                                <span>{skillGroup.label}</span>
                                <span className="h-8 w-px bg-accent"></span>
                                <span>{skillGroup.id}</span>
                            </div>

                            <div className="flex flex-col h-full gap-12">
                                <h3 className="text-2xl font-display font-medium text-primary tracking-tight">
                                    {skillGroup.category}
                                </h3>

                                <div className="flex flex-col gap-4">
                                    {skillGroup.items.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            className="group/item flex items-center gap-4 cursor-none"
                                            whileHover={{
                                                x: 10,
                                                skewX: [0, -20, 10, 0],
                                                opacity: [1, 0.5, 0.8, 1]
                                            }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 20,
                                                skewX: { duration: 0.2, repeat: Infinity, repeatDelay: Math.random() * 2 },
                                                opacity: { duration: 0.1, repeat: Infinity, repeatDelay: Math.random() * 2 }
                                            }}
                                        >
                                            <span className="text-xs font-mono text-accent/50 group-hover/item:text-accent font-bold">
                                                +{i + 1}
                                            </span>
                                            <span className="text-lg font-sans text-secondary group-hover/item:text-primary transition-colors">
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Bottom Accent Decoration */}
                                <div className="mt-auto pt-8 flex items-center justify-between opacity-20 group-hover:opacity-50 transition-opacity">
                                    <div className="flex gap-1">
                                        {[...Array(4)].map((_, i) => (
                                            <div key={i} className={`w-1 h-3 ${i === index ? 'bg-accent' : 'bg-primary'}`} />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-mono">MTX_SYS_V4.0</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
