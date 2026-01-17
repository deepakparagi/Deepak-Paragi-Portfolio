import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        const root = window.document.documentElement;

        // Remove both first to avoid class buildup
        root.classList.remove('light', 'dark');

        // Add current theme
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-primary/10 hover:border-primary/30 transition-colors relative overflow-hidden group"
            aria-label="Toggle Theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                {theme === 'light' ? (
                    <Sun size={20} className="text-secondary group-hover:text-primary transition-colors" />
                ) : (
                    <Moon size={20} className="text-secondary group-hover:text-primary transition-colors" />
                )}
            </motion.div>
        </button>
    );
};

export default ThemeToggle;
