import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowUpRight, Copy, Check, Github, Linkedin, Twitter, Mail, FileText, Send, Zap } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const SocialCard = ({ icon: Icon, label, href, color }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col justify-between p-6 bg-surface/40 backdrop-blur-md border border-primary/5 rounded-sm h-40 hover:border-accent/40 transition-colors duration-500 overflow-hidden"
        whileHover={{ y: -5 }}
    >
        <div className="absolute top-0 left-0 w-full h-1 bg-accent/10 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />
        <div className="flex justify-between items-start">
            <div className={`p-2 rounded-sm bg-background border border-primary/5 group-hover:border-accent/20 transition-colors`}>
                <Icon size={20} className="text-secondary group-hover:text-accent transition-colors" />
            </div>
            <ArrowUpRight size={20} className="text-primary/20 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
        </div>
        <div>
            <span className="block text-xs font-mono text-secondary uppercase tracking-widest mb-1">Channel</span>
            <span className="block text-xl font-display font-medium text-primary uppercase">{label}</span>
        </div>
    </motion.a>
);

const WhatsAppForm = () => {
    const [formData, setFormData] = useState({ name: '', message: '' });
    const [status, setStatus] = useState('idle'); // idle, sending, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        const text = `Hi Deepak, I am ${formData.name}. ${formData.message}`;
        window.open(`https://wa.me/918197174493?text=${encodeURIComponent(text)}`, '_blank');
        setTimeout(() => setStatus('success'), 1000);
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-xl">
            <div className="relative group">
                <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-primary/10 py-4 text-2xl font-display placeholder:text-secondary/20 focus:outline-none focus:border-accent group-hover:border-primary/30 transition-colors"
                    placeholder="YOUR NAME"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-700" />
            </div>
            
            <div className="relative group">
                <textarea
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-b border-primary/10 py-4 text-xl font-sans font-light placeholder:text-secondary/20 focus:outline-none focus:border-accent group-hover:border-primary/30 transition-colors resize-none"
                    placeholder="YOUR MESSAGE"
                />
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-700" />
            </div>

            <button
                type="submit"
                disabled={status !== 'idle'}
                className="group relative flex items-center justify-between w-full py-6 text-xs font-mono uppercase tracking-[0.3em] text-primary overflow-hidden border border-primary/10 px-8 hover:border-accent transition-colors"
            >
                <motion.span className="relative z-10 flex items-center gap-3">
                    {status === 'success' ? 'SENT SUCCESSFULLY' : status === 'sending' ? 'PREPARING...' : 'INITIALIZE MESSAGE'}
                    <Zap size={14} className={status === 'sending' ? 'animate-pulse text-accent' : 'text-accent'} />
                </motion.span>
                <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] opacity-[0.03]" />
                <ArrowUpRight size={20} className="relative z-10 text-secondary group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </button>
        </form>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="py-16 md:py-32 px-4 md:px-12 bg-background relative overflow-hidden">
            <div className="max-w-screen-2xl mx-auto w-full relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    
                    {/* Left Side: Massive Typography */}
                    <div className="lg:col-span-7 space-y-12">
                        <ScrollReveal>
                            <div className="flex items-center gap-3 mb-12">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                                </span>
                                <span className="font-mono text-[10px] tracking-[0.4em] text-secondary uppercase italic">Active Node / Hubli, India</span>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.1}>
                            <h2 className="text-[12vw] lg:text-[8vw] font-display font-medium leading-[0.85] tracking-tighter text-primary uppercase">
                                Let's <br />
                                <span className="text-secondary opacity-20">Engineer</span> <br />
                                <span className="relative">
                                    the Future
                                    <motion.span 
                                        className="absolute -right-8 top-0 text-[2vw] text-accent font-mono italic normal-case tracking-normal"
                                        animate={{ opacity: [0.2, 1, 0.2] }}
                                        transition={{ duration: 4, repeat: Infinity }}
                                    >
                                        .2126
                                    </motion.span>
                                </span>
                            </h2>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <p className="text-lg md:text-2xl text-secondary/60 max-w-md font-light leading-relaxed">
                                Always interested in discussing new projects, high-performance systems, or orchestrating the next elite digital experience.
                            </p>
                        </ScrollReveal>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-12">
                            <SocialCard icon={Github} label="Github" href="https://github.com/deepakparagi" />
                            <SocialCard icon={Linkedin} label="LinkedIn" href="https://www.linkedin.com/in/deepak-paragi-501140261/" />
                            <SocialCard icon={Twitter} label="Twitter" href="https://x.com/Deepak_Paragi" />
                        </div>
                    </div>

                    {/* Right Side: Command Center */}
                    <div className="lg:col-span-5 h-full flex flex-col justify-center">
                        <ScrollReveal delay={0.3} width="100%">
                            <div className="bg-surface/30 backdrop-blur-xl border border-primary/5 p-8 md:p-12 rounded-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-10">CHANNEL / WA_SECURE</div>
                                <h3 className="text-sm font-mono text-accent uppercase tracking-[0.3em] mb-12">Direct Terminal</h3>
                                <WhatsAppForm />
                                
                                <div className="mt-12 pt-12 border-t border-primary/5 space-y-6">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-[10px] font-mono text-secondary uppercase tracking-widest">Global Protocol</span>
                                        <a href="mailto:deepakparagi03@gmail.com" className="text-xl font-display text-primary hover:text-accent transition-colors">deepakparagi03@gmail.com</a>
                                    </div>
                                    <div className="flex items-center gap-6">
                                        <a href="/Deepak_Paragi_Resume.pdf" className="text-xs font-mono text-secondary hover:text-primary uppercase tracking-widest flex items-center gap-2 transition-all group">
                                            <FileText size={14} className="group-hover:text-accent" />
                                            Curriculum Vitae
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
