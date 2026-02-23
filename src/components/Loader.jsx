import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [text, setText] = useState('INITIALIZING...');

    useEffect(() => {
        // Faster initial load
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                // Varying speed for realism
                const increment = Math.random() * 15;
                return Math.min(prev + increment, 100);
            });
        }, 80);

        const textTimer = setTimeout(() => {
            setText('LOADING ASSETS...');
        }, 600);

        const textTimer2 = setTimeout(() => {
            setText('READY.');
        }, 1200);

        return () => {
            clearInterval(timer);
            clearTimeout(textTimer);
            clearTimeout(textTimer2);
        };
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            setTimeout(() => {
                onComplete();
            }, 800);
        }
    }, [progress, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center pointer-events-none"
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <div className="w-64 space-y-6">
                <div className="flex justify-between text-xs font-mono text-primary/80 font-medium">
                    <span>SYSTEM_BOOT</span>
                    <span>{Math.floor(progress)}%</span>
                </div>

                <div className="h-[2px] w-full bg-primary/10 overflow-hidden relative rounded-full">
                    <motion.div
                        className="absolute top-0 left-0 h-full bg-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ ease: "linear", duration: 0.1 }}
                    />
                </div>

                <div className="h-4 flex justify-center overflow-hidden">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={text}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-xs font-mono text-secondary/60 text-center uppercase tracking-[0.2em]"
                        >
                            {text}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;
