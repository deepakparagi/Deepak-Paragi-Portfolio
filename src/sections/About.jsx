import { GradientShape } from '../components/Decorative';
import { SystemLabel, Crosshair } from '../components/Technical';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-32 px-6 md:px-12 relative overflow-hidden bg-background">

            <div className="absolute top-12 left-6 hidden 2xl:block opacity-20">
                <SystemLabel>SYS.IDENTITY_VERIFIED</SystemLabel>
            </div>
            <Crosshair className="absolute bottom-12 right-6 hidden 2xl:block opacity-20" />
            <GradientShape className="top-1/4 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />

            <div className="max-w-7xl mx-auto w-full z-10 relative">

                {/* header */}
                <div className="mb-24 md:mb-32">
                    <ScrollReveal width="100%">
                        <div className="flex items-center gap-4 mb-6">
                            <h2 className="text-sm font-mono text-accent">01. ABOUT</h2>
                            <div className="h-px w-24 bg-accent/20"></div>
                        </div>
                        <h3 className="text-4xl md:text-7xl font-display font-light text-white leading-[1] tracking-tight max-w-4xl">
                            Engineered for <span className="text-white/30">impact</span>. <br />
                        </h3>
                        <div className="mt-12 grid md:grid-cols-12 gap-8">
                            <div className="md:col-span-6 md:col-start-7">
                                <p className="text-lg md:text-xl text-secondary/80 font-light leading-relaxed">
                                    I build systems where data meets design, transforming complex algorithms into seamless digital experiences. My focus is on scalable architectures that bridge the gap between machine learning models and intuitive user interfaces.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Experience - Clean Row */}
                <div className="mb-24 border-t border-white/10 pt-12">
                    <ScrollReveal width="100%">
                        <div className="grid md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-3">
                                <SystemLabel className="mb-4">EXPERIENCE</SystemLabel>
                                <span className="text-sm font-mono text-white/50">Feb 2023 — Jun 2023</span>
                            </div>
                            <div className="md:col-span-9 flex flex-col md:flex-row gap-8 md:gap-16">
                                <div>
                                    <h4 className="text-3xl text-white font-display mb-2">Full Stack Developer Intern</h4>
                                    <p className="text-sm text-accent font-mono mb-4">GTTC, Hubli</p>
                                    <p className="text-lg text-secondary/70 font-light leading-relaxed max-w-2xl">
                                        Developed a robust music streaming app, integrating REST APIs and ensuring backend reliability via Postman testing.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Education - Split Grid */}
                <div className="mb-24 border-t border-white/10 pt-12">
                    <ScrollReveal width="100%">
                        <div className="grid md:grid-cols-12 gap-8">
                            <div className="md:col-span-3">
                                <SystemLabel>EDUCATION</SystemLabel>
                            </div>
                            <div className="md:col-span-9 grid md:grid-cols-2 gap-12">
                                <div>
                                    <span className="block text-xs font-mono text-secondary/40 mb-3">2026</span>
                                    <h4 className="text-2xl text-white font-display mb-1">Bachelor of Engineering</h4>
                                    <p className="text-secondary text-sm mb-4">NMIT, Bengaluru</p>
                                    <p className="inline-block text-[10px] font-mono border border-emerald-500/30 text-emerald-400 px-2 py-1 rounded">AI & MACHINE LEARNING</p>
                                </div>
                                <div>
                                    <span className="block text-xs font-mono text-secondary/40 mb-3">2023</span>
                                    <h4 className="text-2xl text-white font-display mb-1">Diploma in Engineering</h4>
                                    <p className="text-secondary text-sm mb-4">Government Polytechnic, Gadag</p>
                                    <p className="inline-block text-[10px] font-mono border border-blue-500/30 text-blue-400 px-2 py-1 rounded">COMPUTER SCIENCE</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Skills - Minimalist List */}
                <div className="border-t border-white/10 pt-12">
                    <ScrollReveal width="100%">
                        <div className="grid md:grid-cols-12 gap-8">
                            <div className="md:col-span-3">
                                <SystemLabel>TECHNICAL ARSENAL</SystemLabel>
                            </div>
                            <div className="md:col-span-9">
                                <div className="grid md:grid-cols-2 gap-16">
                                    <div>
                                        <h5 className="text-sm font-mono text-white/40 mb-6 uppercase tracking-wider">Languages & Frameworks</h5>
                                        <ul className="space-y-3">
                                            {["Python & SQL", "JavaScript (ES6+)", "React.js & Next.js"].map(item => (
                                                <li key={item} className="text-xl text-white font-display font-light border-b border-white/5 pb-3">
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="text-sm font-mono text-white/40 mb-6 uppercase tracking-wider">Systems & Tools</h5>
                                        <div className="flex flex-wrap gap-x-6 gap-y-3">
                                            {[
                                                "REST APIs", "Git & GitHub", "Postman", "Vite",
                                                "Machine Learning", "Data Structures", "Algorithm Design", "System Architecture"
                                            ].map(item => (
                                                <span key={item} className="text-secondary hover:text-white transition-colors cursor-default text-base font-light">
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
};

export default About;
