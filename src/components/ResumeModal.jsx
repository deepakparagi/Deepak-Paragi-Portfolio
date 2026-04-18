import { motion, AnimatePresence } from 'framer-motion';
import { X, Download } from 'lucide-react';
import { useEffect } from 'react';

const ResumeModal = ({ isOpen, onClose }) => {
    // Correctly handle the base path for Vite environments
    const resumeUrl = `${import.meta.env.BASE_URL}Deepak_Paragi_Resume.pdf`;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center">
                    {/* Backdrop - Increased blur for less 'clutter' from the background */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/90 backdrop-blur-2xl"
                    />

                    {/* Modal Content - Full height on mobile, elegant frame on desktop */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.98, y: 10 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="relative w-full max-w-5xl h-[100svh] md:h-[90vh] bg-background shadow-2xl md:rounded-sm overflow-hidden flex flex-col"
                    >
                        {/* Minimalist Floating Controls */}
                        <div className="absolute top-6 right-6 z-50 flex items-center gap-4">
                            <motion.a
                                href={resumeUrl}
                                download
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-primary text-background rounded-full shadow-xl hover:bg-accent transition-colors flex items-center justify-center cursor-pointer"
                                title="Download Resume"
                            >
                                <Download size={18} />
                            </motion.a>
                            
                            <motion.button
                                onClick={onClose}
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 bg-surface/50 backdrop-blur-md text-primary border border-primary/10 rounded-full shadow-xl hover:border-primary/30 transition-all flex items-center justify-center"
                                aria-label="Close modal"
                            >
                                <X size={18} />
                            </motion.button>
                        </div>

                        {/* PDF Viewer - 100% space */}
                        <div className="flex-1 relative bg-black/5">
                             <iframe 
                                src={`${resumeUrl}#toolbar=0&navpanes=0`} 
                                className="w-full h-full border-none"
                                title="Resume PDF"
                            />
                            
                            {/* Mobile Scroll Hint - Minimalist */}
                            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 md:hidden pointer-events-none">
                                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-secondary opacity-40">
                                    Swipe to explore
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
