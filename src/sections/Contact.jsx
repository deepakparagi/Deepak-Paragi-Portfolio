import { ArrowUpRight, Copy, Check, Github, Linkedin, Twitter, Mail, FileText, Send } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ icon: Icon, value, href, download }) => (
    <a
        href={href}
        target={href.startsWith('mailto') ? '_self' : '_blank'}
        rel="noopener noreferrer"
        download={download}
        className="group relative flex items-center justify-between p-6 bg-primary/5 rounded-2xl border border-primary/5 hover:border-primary/20 hover:bg-primary/10 transition-all duration-300"
    >
        <div className="flex items-center gap-4">
            <div className="p-3 bg-surface rounded-full border border-primary/5 group-hover:bg-primary/10 transition-colors">
                <Icon size={20} className="text-secondary group-hover:text-primary transition-colors" />
            </div>
            <span className="text-lg md:text-xl font-display text-primary/80 group-hover:text-primary transition-colors">
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

const WhatsAppForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, message } = formData;
        const text = `Hi, I am ${name}. ${message}`;
        const encodedText = encodeURIComponent(text);
        window.open(`https://wa.me/918197174493?text=${encodedText}`, '_blank');
    };

    return (
        <form onSubmit={handleSubmit} className="p-8 bg-primary/5 rounded-3xl backdrop-blur-sm border border-primary/10 space-y-6 hover:border-primary/20 transition-all duration-500">
            <div className="space-y-4">
                <h3 className="text-2xl font-display text-primary">Send a message</h3>
                <p className="text-secondary/80 text-sm">Direct to WhatsApp</p>
            </div>
            <div className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-surface/50 border border-primary/10 rounded-xl px-6 py-4 text-primary placeholder:text-secondary/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full bg-surface/50 border border-primary/10 rounded-xl px-6 py-4 text-primary placeholder:text-secondary/30 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                />
            </div>
            <button
                type="submit"
                className="w-full group flex items-center justify-center gap-3 px-6 py-4 bg-primary text-surface rounded-xl hover:bg-accent transition-all duration-300 transform hover:scale-[1.02]"
            >
                <span className="font-medium text-lg">Send to WhatsApp</span>
                <Send size={20} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
        </form>
    );
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
        <div
            onClick={handleCopy}
            className="group relative flex items-center justify-between p-6 bg-primary/5 rounded-2xl border border-primary/5 hover:border-primary/20 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
        >
            <div className="flex items-center gap-4">
                <div className="p-3 bg-surface rounded-full border border-primary/5 group-hover:bg-primary/10 transition-colors">
                    <Mail size={20} className="text-secondary group-hover:text-primary transition-colors" />
                </div>
                <span className="text-lg md:text-xl font-display text-primary/80 group-hover:text-primary transition-colors">
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
        <section id="contact" className="min-h-screen flex flex-col justify-between py-16 md:py-24 px-6 md:px-12 bg-surface relative overflow-hidden">
            <div className="max-w-screen-2xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start mb-24">

                {/* Left Column: Headline */}
                <div className="space-y-12 lg:sticky lg:top-24">
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
                        <h2 className="text-6xl md:text-8xl font-display font-medium tracking-tighter leading-[0.9] text-primary">
                            Let's <br /> engineer <br /> <span className="text-primary/20">the future.</span>
                        </h2>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="text-secondary font-light max-w-sm leading-relaxed text-lg">
                            <p>
                                Always interested in discussing new projects, opportunities, or just chatting about AI and system architecture.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Right Column: Links List */}
                <div className="w-full space-y-8">
                    <ScrollReveal delay={0.3} width="100%">
                        <WhatsAppForm />
                    </ScrollReveal>

                    <ScrollReveal delay={0.4} width="100%">
                        <div className="grid gap-4">
                            <CopyEmail />
                            <ContactItem
                                icon={FileText}
                                value="View Resume"
                                href="Deepak_Paragi_Resume.pdf"
                            />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <ContactItem
                                    icon={Github}
                                    value="GitHub"
                                    href="https://github.com/deepakparagi"
                                    download={false}
                                />
                                <ContactItem
                                    icon={Linkedin}
                                    value="LinkedIn"
                                    href="https://www.linkedin.com/in/deepak-paragi-501140261/"
                                    download={false}
                                />
                            </div>
                            <ContactItem
                                icon={Twitter}
                                value="Twitter / X"
                                href="https://x.com/Deepak_Paragi"
                                download={false}
                            />
                        </div>
                    </ScrollReveal>
                </div>

            </div>

            {/* Footer */}
            <ScrollReveal delay={0.5} width="100%">
                <div className="max-w-screen-2xl mx-auto w-full pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center text-sm text-secondary/40 font-medium uppercase tracking-widest">
                    <span>Deepak Paragi</span>
                    <span>© 2026</span>
                </div>
            </ScrollReveal>
        </section>
    );
};

export default Contact;
