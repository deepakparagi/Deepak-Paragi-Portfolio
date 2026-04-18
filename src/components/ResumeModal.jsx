import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Maximize2, FileText } from 'lucide-react';

const ResumeModal = ({ isOpen, onClose }) => {
    const baseUrl = import.meta.env.BASE_URL;
    const resumeUrl = `${baseUrl}Deepak_Paragi_Resume.pdf`.replace(/\/+/g, '/');

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop with sophisticated glass blur */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-background/80 backdrop-blur-xl"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full max-w-5xl h-[90vh] bg-surface border border-primary/10 rounded-sm shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center p-4 border-b border-primary/5 bg-background/50">
                            <div className="flex items-center gap-3">
                                <div className="p-1.5 bg-accent/10 rounded-sm">
                                    <FileText size={16} className="text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-display font-medium text-primary tracking-wide uppercase">Curriculum Vitae</h3>
                                    <p className="text-[10px] font-mono text-secondary uppercase opacity-50">Deepak_Paragi_Resume_v2.pdf</p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                <a 
                                    href={resumeUrl} 
                                    download 
                                    className="p-2 text-secondary hover:text-accent transition-colors group relative"
                                    title="Download PDF"
                                >
                                    <Download size={18} />
                                    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[8px] font-mono opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">DOWNLOAD</span>
                                </a>
                                <button 
                                    onClick={onClose}
                                    className="p-2 text-secondary hover:text-primary transition-colors ml-4"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer Container */}
                        <div className="flex-grow bg-[#2a2a2a] relative group">
                            <iframe
                                src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                                className="w-full h-full border-none"
                                title="Deepak Paragi Resume"
                            />
                            
                            {/* Sophisticated Overlay on Hover */}
                            <div className="absolute inset-0 pointer-events-none border-[1px] border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-4" />
                        </div>

                        {/* Footer Info */}
                        <div className="p-3 bg-background/50 border-t border-primary/5 flex justify-between items-center">
                            <span className="text-[9px] font-mono text-secondary/40 tracking-[0.2em] uppercase">Secure_View / Port_8080</span>
                            <div className="flex gap-4">
                                <span className="text-[9px] font-mono text-accent/60 flex items-center gap-1 uppercase">
                                    <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                                    Live Connection
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
