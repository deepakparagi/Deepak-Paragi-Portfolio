import { ArrowUpRight, Copy, Check, Github, Linkedin, Twitter, Mail, FileText } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ icon: Icon, value, href, download }) => (
    <a
        href={href}
        target={href.startsWith('mailto') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        download={download}
        className="group flex items-center justify-between py-6 border-b border-primary/10 hover:border-primary/30 transition-colors"
    >
        <div className="flex items-center gap-4">
            <div className="p-3 bg-surface rounded-full group-hover:bg-primary/5 border border-black/5 transition-colors">
                <Icon size={20} className="text-secondary group-hover:text-primary transition-colors" />
            </div>
            <span className="text-xl md:text-2xl font-display text-primary group-hover:text-accent transition-colors">
                {value}
            </span>
        </div>
        <ArrowUpRight className="text-secondary/50 group-hover:text-accent transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" size={24} />
    </a>
);

ContactItem.propTypes = {
    icon: PropTypes.elementType.isRequired,
    value: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    download: PropTypes.bool
};

const CopyEmail = () => {
    const [copied, setCopied] = useState(false);
    const email = "deepakparagi03@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="py-6 border-b border-primary/10 flex items-center justify-between group cursor-pointer" onClick={handleCopy}>
            <div className="flex items-center gap-4">
                <div className="p-3 bg-surface rounded-full group-hover:bg-primary/5 border border-black/5 transition-colors">
                    <Mail size={20} className="text-secondary group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xl md:text-2xl font-display text-primary group-hover:text-accent transition-colors">
                    {email}
                </span>
            </div>
            <button className="text-secondary/50 group-hover:text-accent transition-colors">
                {copied ? <Check size={24} /> : <Copy size={24} />}
            </button>
        </div>
    );
}

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-surface relative overflow-hidden">

            <div className="max-w-screen-2xl mx-auto w-full z-10 grid md:grid-cols-2 gap-16 md:gap-32 items-end">

                {/* Left Column: Headline */}
                <div className="space-y-12">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-8">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="font-sans text-[10px] font-medium text-green-600 tracking-widest uppercase">Available for work</span>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.1}>
                        <h2 className="text-5xl md:text-7xl font-display font-medium tracking-tighter leading-[0.9] text-primary">
                            Let's <br /> engineer <br /> <span className="text-primary/20">the future.</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="text-secondary font-light max-w-sm leading-relaxed">
                            <p>
                                Always interested in discussing new projects, opportunities, or just chatting about AI and system architecture.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right Column: Links List */}
                <div className="w-full">
                    <ScrollReveal delay={0.3} width="100%">
                        <div className="border-t border-primary/10">
                            <div className="py-2">
                                <CopyEmail />
                            </div>
                            <ContactItem
                                icon={FileText}
                                value="Download CV"
                                href="Deepak_Paragi_Resume.pdf"
                                download={true}
                            />
                            <ContactItem
                                icon={Github}
                                value="GitHub"
                                href="https://github.com/deepakparagi"
                            />
                            <ContactItem
                                icon={Linkedin}
                                value="LinkedIn"
                                href="https://www.linkedin.com/in/deepak-paragi-501140261/"
                            />
                            <ContactItem
                                icon={Twitter}
                                value="Twitter / X"
                                href="https://x.com/Deepak_Paragi"
                            />
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <footer className="mt-16 flex justify-between text-xs text-secondary/30 font-medium uppercase tracking-widest">
                            <span>Deepak Paragi</span>
                            <span>© 2026</span>
                        </footer>
                    </ScrollReveal>
                </div>

            </div>
        </section>
    );
};

export default Contact;
