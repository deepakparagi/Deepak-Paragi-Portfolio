import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full py-12 md:py-20 px-6 md:px-12 bg-background border-t border-primary/5">
            <div className="max-w-screen-2xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
                
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-2 group cursor-default"
                >
                    <span className="text-4xl md:text-5xl font-display font-medium text-primary tracking-tighter uppercase leading-[0.8]">
                        Deepak <br />
                        <span className="text-secondary opacity-30 group-hover:opacity-100 transition-opacity duration-700">Paragi</span>
                    </span>
                    <span className="text-[10px] font-mono text-secondary uppercase tracking-[0.4em] mt-4">AI & Full Stack Engineer / 2026</span>
                </motion.div>

                <div className="flex flex-col items-center md:items-end gap-8">
                    <button
                        onClick={scrollToTop}
                        className="group flex flex-col items-center gap-4 text-xs font-mono text-secondary hover:text-accent transition-colors tracking-widest uppercase"
                    >
                        <div className="relative p-4 border border-primary/10 rounded-full group-hover:border-accent transition-colors overflow-hidden">
                            <motion.div 
                                className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-[0.05]"
                            />
                            <ArrowUp size={20} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
                        </div>
                        <span>Back to Surface</span>
                    </button>

                    <div className="flex items-center gap-8 text-[10px] font-mono text-secondary/40 uppercase tracking-widest">
                        <span>© 2026 / All Rights Reserved</span>
                        <div className="h-4 w-[1px] bg-primary/10" />
                        <a href="https://deepcipher-studio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                            Built by Deepcipher Studio
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
