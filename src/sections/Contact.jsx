import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight, Copy, Check, Github, Linkedin, Twitter, Mail, FileText, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Magnetic from '../components/Magnetic';
import KineticText from '../components/KineticText';

const TechnicalLink = ({ icon: Icon, label, value, href, id }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between py-6 border-b border-primary/10 hover:border-accent transition-colors duration-500"
    >
        <div className="flex items-center gap-8">
            <span className="text-[10px] font-mono text-accent opacity-50 group-hover:opacity-100">
                {id}
            </span>
            <div className="flex flex-col">
                <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/50 group-hover:text-accent">
                    {label}
                </span>
                <span className="text-xl md:text-2xl font-display text-primary uppercase">
                    {value}
                </span>
            </div>
        </div>
        <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
            <ArrowUpRight className="text-primary group-hover:text-accent-foreground transition-colors" size={20} />
        </div>
    </a>
);

const Contact = () => {
    const containerRef = useRef(null);
    const [copied, setCopied] = useState(false);
    const [formData, setFormData] = useState({ name: '', message: '' });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const xLeft = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const xRight = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("deepakparagi03@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleWhatsApp = (e) => {
        e.preventDefault();
        const text = encodeURIComponent(`Hi, I'm ${formData.name}. ${formData.message}`);
        window.open(`https://wa.me/918197174493?text=${text}`, '_blank');
    };

    return (
        <section id="contact" ref={containerRef} className="py-32 md:py-64 bg-background relative overflow-hidden">
            {/* Monolithic Background Branding */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none">
                <motion.div style={{ x: xLeft }} className="text-[25vw] font-black whitespace-nowrap leading-none mb-[-5vw]">
                    CONNECT CONNECT CONNECT
                </motion.div>
                <motion.div style={{ x: xRight }} className="text-[25vw] font-black whitespace-nowrap leading-none text-accent">
                    CREATE CREATE CREATE
                </motion.div>
            </div>

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="mb-32">
                    <ScrollReveal>
                        <div className="flex items-center gap-4 mb-8 text-accent">
                            <span className="h-px w-12 bg-accent opacity-50"></span>
                            <h2 className="text-xs font-bold uppercase tracking-[0.4em]">04 / Collaboration</h2>
                        </div>
                        <KineticText>
                            <h2 className="text-[12vw] md:text-[8vw] font-display font-medium tracking-tighter leading-[0.8] text-primary">
                                LET'S <br /> CREATE <br /> <span className="text-accent italic font-light drop-shadow-[0_0_30px_rgba(var(--accent),0.3)]">TOGETHER.</span>
                            </h2>
                        </KineticText>
                        <p className="text-xl md:text-2xl text-secondary font-light max-w-xl mt-12 leading-relaxed">
                            Interested in discussing a project or just want to say hi? I'm always open to new opportunities.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="grid lg:grid-cols-12 gap-24 items-start">

                    {/* Industrial Form */}
                    <div className="lg:col-span-6 order-2 lg:order-1">
                        <form onSubmit={handleWhatsApp} className="space-y-12">
                            <div className="space-y-2 group">
                                <label className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">
                                    INPUT_01: YOUR_NAME
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Deepak Paragi"
                                    className="w-full bg-transparent border-b border-primary/20 py-4 text-2xl font-display text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-primary/10"
                                />
                            </div>

                            <div className="space-y-2 group text-area-container">
                                <label className="text-[10px] font-mono uppercase tracking-widest text-accent font-bold">
                                    INPUT_02: MESSAGE_CORE
                                </label>
                                <textarea
                                    rows="1"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Tell me about your vision..."
                                    className="w-full bg-transparent border-b border-primary/20 py-4 text-2xl font-display text-primary focus:outline-none focus:border-accent transition-colors placeholder:text-primary/10 resize-none min-h-[100px]"
                                />
                            </div>

                            <div className="pt-8">
                                <Magnetic>
                                    <button
                                        type="submit"
                                        className="group flex items-center gap-6 px-10 py-5 bg-primary text-background rounded-full hover:bg-accent transition-all duration-500 overflow-hidden relative"
                                    >
                                        <span className="relative z-10 font-bold uppercase tracking-widest text-xs">Initialize Conversation</span>
                                        <Send size={16} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                                    </button>
                                </Magnetic>
                            </div>
                        </form>
                    </div>

                    {/* Industrial Metadata List */}
                    <div className="lg:col-span-5 lg:offset-1 order-1 lg:order-2 space-y-2">
                        <div className="flex items-center gap-4 mb-4">
                            <h4 className="text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-accent">IDENTITY_LOG</h4>
                            <div className="h-px flex-1 bg-primary/10"></div>
                        </div>

                        {/* Email Copy Block */}
                        <div
                            onClick={handleCopyEmail}
                            className="group flex items-center justify-between py-6 border-b border-primary/10 hover:border-accent transition-colors duration-500 cursor-pointer"
                        >
                            <div className="flex items-center gap-8">
                                <span className="text-[10px] font-mono text-accent opacity-50 font-bold">00</span>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-secondary/50 group-hover:text-accent font-bold">EMAIL_LINK</span>
                                    <span className="text-xl md:text-2xl font-display text-primary uppercase">
                                        deepakparagi03@gmail.com
                                    </span>
                                </div>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-primary/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                                {copied ? <Check className="text-accent-foreground" size={20} /> : <Copy className="text-primary group-hover:text-accent-foreground" size={20} />}
                            </div>
                        </div>

                        <TechnicalLink
                            id="01"
                            label="GITHUB_PROFILE"
                            value="GitHub"
                            href="https://github.com/deepakparagi"
                        />
                        <TechnicalLink
                            id="02"
                            label="LINKEDIN_CORE"
                            value="LinkedIn"
                            href="https://www.linkedin.com/in/deepak-paragi-501140261/"
                        />
                        <TechnicalLink
                            id="03"
                            label="SOCIAL_X"
                            value="Twitter / X"
                            href="https://x.com/Deepak_Paragi"
                        />
                        <TechnicalLink
                            id="04"
                            label="RESUME_DOC"
                            value="View Resume"
                            href="/Deepak_Paragi_Resume.pdf"
                        />

                        {/* System Status Decoration */}
                        <div className="pt-12 flex items-center justify-between opacity-30 select-none pointer-events-none">
                            <div className="flex gap-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[8px] font-mono uppercase">System_Active</span>
                                    <div className="flex gap-0.5">
                                        {[...Array(6)].map((_, i) => (
                                            <div key={i} className="w-2 h-0.5 bg-accent" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <span className="text-[10px] font-mono">NODE_CONTACT_EST.2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
