import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Magnetic from './Magnetic';
import ThemeToggle from './ThemeToggle';

import Logo from './Logo';

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
            <button key={name} onClick={() => handleScroll(id)} className="relative group p-2 flex items-center gap-2 bg-transparent border-none cursor-pointer text-inherit font-inherit">
                {name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
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
        <nav className="fixed top-0 left-0 right-0 px-6 py-4 md:px-12 md:py-5 flex justify-between items-center z-50 text-primary pointer-events-none">
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
                <NavItem name="About" id="about" />
                <NavItem name="Work" id="projects" />
                <NavItem name="Contact" id="contact" />

                <div className="pl-4 border-l border-primary/10">
                    <ThemeToggle />
                </div>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden pointer-events-auto relative z-50 flex items-center gap-4">
                <ThemeToggle />
                <button onClick={toggleMenu} className="p-2 text-primary hover:text-accent transition-colors">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
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
