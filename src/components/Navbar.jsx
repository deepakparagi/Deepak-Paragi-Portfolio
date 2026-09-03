import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import Magnetic from './Magnetic';
import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const NavItem = ({ name, id, onClick }) => (
    <Magnetic>
        <button
            key={name}
            onClick={() => onClick(id)}
            className="relative group p-2 flex items-center gap-2 bg-transparent border-none cursor-pointer text-inherit font-inherit"
            aria-label={`Navigate to ${name} section`}
        >
            {name}
            <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                layoutId="underline"
            />
        </button>
    </Magnetic>
);

const Navbar = ({ onResumeClick }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleScroll = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    const handleResumeClick = (e) => {
        if (e) e.preventDefault();
        setIsOpen(false);
        onResumeClick();
    };

    return (
        <nav 
            className="fixed top-0 left-0 right-0 px-6 py-4 md:px-12 md:py-5 flex justify-between items-center z-[100] text-primary pointer-events-none transition-all duration-300" 
            role="navigation" 
            aria-label="Main navigation"
        >
            {/* Background Blur only when menu is closed or on desktop */}
            <div className={`absolute inset-0 bg-background/80 backdrop-blur-md border-b border-primary/5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />

            <div className="pointer-events-auto relative z-50 flex items-center gap-4">
                <Magnetic>
                    <div className="group relative cursor-pointer px-2 py-1">
                        <Logo />
                    </div>
                </Magnetic>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium pointer-events-auto relative z-50">
                <NavItem name="About" id="about" onClick={handleScroll} />
                <NavItem name="Work" id="projects" onClick={handleScroll} />
                <NavItem name="Contact" id="contact" onClick={handleScroll} />
                
                <Magnetic>
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            onResumeClick();
                        }}
                        className="relative group p-2 flex items-center gap-2 bg-transparent border-none cursor-pointer text-inherit font-inherit text-accent"
                        aria-label="View Resume"
                    >
                        Resume
                        <motion.span
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                            layoutId="underline-resume"
                        />
                    </button>
                </Magnetic>

                <div className="pl-4 border-l border-primary/10">
                    <ThemeToggle />
                </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden pointer-events-auto relative z-50 flex items-center gap-4">
                <ThemeToggle />
                <button
                    onClick={toggleMenu}
                    className="p-2 text-primary hover:text-accent transition-colors"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                        <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0, transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
                        transition={{ duration: 0.5, ease: [0.12, 0, 0.39, 0] }}
                        className="fixed inset-0 origin-top pointer-events-auto flex flex-col justify-center items-center md:hidden"
                        style={{ backgroundColor: 'rgb(var(--background))', color: 'rgb(var(--primary))' }}
                    >
                        <div className="flex flex-col items-center gap-8">
                            {['About', 'Projects', 'Contact', 'Resume'].map((item, index) => (
                                <motion.div 
                                    key={item}
                                    initial={{ opacity: 0, y: 40 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 40 }}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1), ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <button
                                        onClick={() => item === 'Resume' ? handleResumeClick() : handleScroll(item.toLowerCase())}
                                        className={`text-5xl font-display font-medium hover:text-accent transition-colors bg-transparent border-none cursor-pointer ${item === 'Resume' ? 'text-accent' : 'text-primary'}`}
                                        aria-label={item === 'Resume' ? 'View Resume' : `Navigate to ${item === 'Projects' ? 'Work' : item} section`}
                                    >
                                        {item === 'Projects' ? 'Work' : item}
                                    </button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
