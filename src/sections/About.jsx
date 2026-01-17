import ScrollReveal from '../components/ScrollReveal';

const About = () => {
    return (
        <section id="about" className="min-h-screen py-32 px-6 md:px-12 relative overflow-hidden">

            <div className="max-w-screen-2xl mx-auto w-full z-10 relative">

                {/* header */}
                <div className="mb-24">
                    <ScrollReveal width="100%">
                        <h2 className="text-sm font-medium text-secondary mb-4 uppercase tracking-wider">02 / About</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-semibold text-primary max-w-3xl leading-tight">
                            Engineered for impact. <br />
                            <span className="text-secondary font-normal">Building software that matters.</span>
                        </h3>

                        <div className="mt-12 grid md:grid-cols-12 gap-12">
                            <div className="md:col-span-8">
                                <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6">
                                    I am Deepak Paragi, a final-year B.E. student in Artificial Intelligence & Machine Learning, based in Bengaluru, India. I combine technical depth with a pragmatic approach to product building.
                                </p>
                                <p className="text-lg md:text-xl text-secondary leading-relaxed mb-6">
                                    My core strength lies in detailed executions—bridging the gap between complex AI models and user-friendly interfaces.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Experience */}
                <div className="mb-20 border-t border-primary/10 pt-12">
                    <ScrollReveal width="100%">
                        <div className="grid md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-4">
                                <h4 className="text-sm font-medium text-primary uppercase tracking-wide mb-1">Experience</h4>
                                <span className="text-sm text-secondary">History</span>
                            </div>
                            <div className="md:col-span-8">
                                <div className="mb-8 last:mb-0">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="text-xl text-primary font-medium">Full Stack Developer Intern</h4>
                                        <span className="text-sm text-secondary font-mono">Feb 2023 — Jun 2023</span>
                                    </div>
                                    <p className="text-base text-accent mb-4">GTTC, Hubli</p>
                                    <ul className="list-disc list-inside space-y-2 text-secondary/80 text-lg">
                                        <li>Developed responsive UI components for a music streaming app.</li>
                                        <li>Integrated REST APIs for dynamic content delivery.</li>
                                        <li>Optimized database queries for better performance.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Education */}
                <div className="border-t border-primary/10 pt-12">
                    <ScrollReveal width="100%">
                        <div className="grid md:grid-cols-12 gap-8">
                            <div className="md:col-span-4">
                                <h4 className="text-sm font-medium text-primary uppercase tracking-wide mb-1">Education</h4>
                                <span className="text-sm text-secondary">Academic Background</span>
                            </div>
                            <div className="md:col-span-8 space-y-12">
                                <div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="text-xl text-primary font-medium">Bachelor of Engineering</h4>
                                        <span className="text-sm text-secondary font-mono">2023 — 2026</span>
                                    </div>
                                    <p className="text-secondary mb-2">NMIT, Bengaluru</p>
                                    <span className="inline-block text-xs font-medium bg-primary/5 text-primary px-2 py-1 rounded">AI & MACHINE LEARNING</span>
                                </div>
                                <div>
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h4 className="text-xl text-primary font-medium">Diploma in Engineering</h4>
                                        <span className="text-sm text-secondary font-mono">2020 — 2023</span>
                                    </div>
                                    <p className="text-secondary mb-2">Government Polytechnic, Gadag</p>
                                    <span className="inline-block text-xs font-medium bg-primary/5 text-primary px-2 py-1 rounded">COMPUTER SCIENCE</span>
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
