import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Magnetic from './Magnetic';
import ThemeToggle from './ThemeToggle';

import Logo from './Logo';

import Metadata from './Metadata';

const Navbar = () => {
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

    const NavItem = ({ name, id }) => (
        <Magnetic>
            <button
                key={name}
                onClick={() => handleScroll(id)}
                className="relative group p-2 flex items-center gap-2 bg-transparent border-none cursor-pointer text-inherit font-display text-sm font-bold uppercase tracking-[0.2em] hover:text-accent transition-colors duration-300"
                aria-label={`Navigate to ${name} section`}
            >
                {name}
                <motion.span
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"
                    layoutId="underline"
                />
            </button>
        </Magnetic>
    );

    const menuVars = {
        initial: { scaleY: 0 },
        animate: {
            scaleY: 1,
            transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] }
        },
        exit: {
            scaleY: 0,
            transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }
        }
    };

    const containerVars = {
        initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
        open: { transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 } }
    };

    const mobileLinkVars = {
        initial: {
            y: "30vh",
            transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] }
        },
        open: {
            y: 0,
            transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] }
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 px-6 py-4 md:px-12 md:py-6 flex justify-between items-center z-50 transition-all duration-500" role="navigation" aria-label="Main navigation">
            {/* Background Minimalist Border */}
            <div className="absolute inset-x-0 bottom-0 h-px bg-primary/5" />
            <div className="absolute inset-0 bg-background/50 backdrop-blur-xl" />

            <div className="pointer-events-auto relative z-50">
                <Link to="/" className="no-underline">
                    <Logo />
                </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-12 text-sm pointer-events-auto relative z-50">
                <NavItem name="About" id="about" />
                <NavItem name="Work" id="projects" />
                <NavItem name="Contact" id="contact" />

                <div className="ml-4 pl-8 border-l border-primary/5">
                    <ThemeToggle />
                </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden pointer-events-auto relative z-50 flex items-center gap-6">
                <ThemeToggle />
                <button
                    onClick={toggleMenu}
                    className="p-2 text-primary hover:text-accent transition-colors"
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile Fullscreen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-background origin-top pointer-events-auto flex flex-col justify-center items-center md:hidden"
                    >
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col items-center gap-8"
                        >
                            {['About', 'Projects', 'Contact'].map((item) => (
                                <div key={item} className="overflow-hidden">
                                    <motion.div variants={mobileLinkVars}>
                                        <button
                                            onClick={() => handleScroll(item.toLowerCase())}
                                            className="text-5xl font-display font-medium text-primary hover:text-accent transition-colors bg-transparent border-none cursor-pointer"
                                            aria-label={`Navigate to ${item === 'Projects' ? 'Work' : item} section`}
                                        >
                                            {item === 'Projects' ? 'Work' : item}
                                        </button>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
