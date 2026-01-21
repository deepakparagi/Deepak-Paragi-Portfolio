import { motion } from 'framer-motion';
import profileImg from '../assets/profile_photo.webp';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 relative overflow-hidden pt-20">

            <div className="max-w-screen-2xl mx-auto w-full z-10 grid md:grid-cols-[1.5fr_1fr] gap-12 items-center relative">

                {/* Left Column: Typography */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-600"></span>
                            </span>
                            <span className="font-sans text-base font-medium text-secondary tracking-wide uppercase">Available for work</span>
                        </div>

                        <h1 className="text-7xl md:text-9xl font-display font-medium tracking-tight leading-[1.05] mb-8 text-primary">
                            Full Stack Developer <br />
                            <span className="text-secondary font-normal">& AI Engineer</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-xl md:text-2xl text-secondary max-w-lg leading-relaxed font-normal"
                    >
                        <p className="mb-6">
                            I build intelligent systems that feel distinct and human. Specializing in <span className="text-primary font-medium">0 → 1 product execution</span>, scalable architecture, and AI-driven solutions.
                        </p>

                        <div className="flex gap-6">
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-primary font-medium hover:text-accent transition-colors border-b border-primary/20 hover:border-accent pb-0.5"
                            >
                                View Projects
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-secondary hover:text-primary transition-colors pb-0.5"
                            >
                                Contact Me
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Right Column: Minimalist Visual (Optional, can be a profile shot or empty) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    className="relative block max-w-sm md:max-w-md mx-auto md:ml-auto mt-12 md:mt-0"
                >
                    {/* Placeholder for Profile Image or Minimal Graphic */}
                    {/* Profile Image */}
                    <div className="aspect-[3/4] rounded-lg bg-surface border border-primary/5 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                        <img
                            src={profileImg}
                            alt="Deepak Paragi"
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                </motion.div>

            </div>
        </section >
    );
};

export default Hero;
