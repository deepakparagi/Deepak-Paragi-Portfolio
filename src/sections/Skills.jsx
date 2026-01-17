import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const skills = [
    { category: "Programming", items: ["Python", "SQL", "Java", "C++"] },
    { category: "Web Technologies", items: ["HTML", "CSS", "RESTful APIs", "React.js"] },
    { category: "Artificial Intelligence", items: ["Machine Learning", "Deep Learning", "NLP", "Generative AI"] },
    { category: "Core CS", items: ["Data Structures", "DBMS (SQL)", "OS Concepts", "Computer Networks"] }
];

const Skills = () => {
    return (
        <section className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
            <div className="max-w-screen-2xl mx-auto w-full relative z-10">
                <ScrollReveal width="100%">
                    <div className="mb-16">
                        <h2 className="text-sm font-medium text-secondary mb-4 uppercase tracking-wider">03 / Proficiency</h2>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skillGroup, index) => (
                        <ScrollReveal key={index} delay={index * 0.1} width="100%">
                            <div className="group h-full p-8 rounded-2xl bg-surface border border-primary/5 hover:border-primary/10 transition-colors duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <h3 className="text-lg font-display font-medium text-primary mb-6 relative z-10">
                                    {skillGroup.category}
                                </h3>

                                <div className="flex flex-wrap gap-x-4 gap-y-3 relative z-10">
                                    {skillGroup.items.map((item, i) => (
                                        <motion.span
                                            key={i}
                                            whileHover={{ x: 5 }}
                                            className="text-secondary hover:text-primary text-sm font-normal cursor-default block w-full border-b border-primary/5 pb-2 last:border-0 hover:border-primary/20 transition-all duration-300"
                                        >
                                            {item}
                                        </motion.span>
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
