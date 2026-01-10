import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Magnetic from './Magnetic';

import Logo from './Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

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
        <nav className="fixed top-0 left-0 right-0 px-6 py-4 md:px-12 md:py-5 flex justify-between items-center z-50 text-white pointer-events-none">
            {/* Background Blur only when menu is closed or on desktop */}
            <div className={`absolute inset-0 bg-background/60 backdrop-blur-md border-b border-white/5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />

            <div className="pointer-events-auto relative z-50">
                <Magnetic>
                    <div className="group relative cursor-pointer px-2 py-1">
                        <Logo />
                    </div>
                </Magnetic>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 text-sm font-medium pointer-events-auto relative z-50">
                <Magnetic><a href="#about" className="relative group p-2 flex items-center gap-2">
                    About
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a></Magnetic>
                <Magnetic><a href="#work" className="relative group p-2 flex items-center gap-2">
                    Work
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a></Magnetic>
                <Magnetic><a href="#contact" className="relative group p-2 flex items-center gap-2">
                    Contact
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </a></Magnetic>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden pointer-events-auto relative z-50">
                <button onClick={toggleMenu} className="p-2 text-white hover:text-emerald-400 transition-colors">
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
                            {['About', 'Work', 'Contact'].map((link) => (
                                <div key={link} className="overflow-hidden">
                                    <motion.div variants={mobileLinkVars}>
                                        <a
                                            href={`#${link.toLowerCase()}`}
                                            onClick={toggleMenu}
                                            className="text-5xl font-display font-medium text-white hover:text-emerald-400 transition-colors"
                                        >
                                            {link}
                                        </a>
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
