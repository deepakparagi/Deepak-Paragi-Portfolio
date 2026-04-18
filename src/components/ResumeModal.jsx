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
                        <div className="flex-grow bg-[#2a2a2a] relative group overflow-hidden">
                            {/* Desktop/Large View: Iframe */}
                            <div className="hidden md:block w-full h-full">
                                <iframe
                                    src={`${resumeUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                                    className="w-full h-full border-none"
                                    title="Deepak Paragi Resume"
                                />
                            </div>

                            {/* Mobile/Tablet View: Interactive Fallback */}
                            <div className="md:hidden flex flex-col items-center justify-center w-full h-full p-6 text-center">
                                <div className="w-20 h-20 bg-accent/5 rounded-full flex items-center justify-center mb-6 animate-pulse">
                                    <FileText size={40} className="text-accent/40" />
                                </div>
                                <h4 className="text-xl font-display font-medium text-primary mb-4">Mobile Viewer Prompt</h4>
                                <p className="text-secondary/60 text-sm mb-8 max-w-[240px]">Mobile browsers usually block embedded PDF rendering for security. Click below to view the full document.</p>
                                
                                <a 
                                    href={resumeUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-8 py-4 bg-accent text-background font-mono text-[10px] tracking-[0.2em] uppercase font-bold hover:scale-105 transition-transform"
                                >
                                    Open Full PDF
                                </a>
                            </div>
                            
                            {/* Sophisticated Overlay on Hover */}
                            <div className="absolute inset-0 pointer-events-none border-[1px] border-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 m-4" />
                        </div>

                        {/* Footer Info */}
                        <div className="p-4 bg-background/50 border-t border-primary/5 flex justify-between items-center">
                            <span className="text-[9px] font-mono text-secondary/40 tracking-[0.2em] uppercase">Document_Id: DP_2026_RES</span>
                            <div className="flex gap-4">
                                <a 
                                    href={resumeUrl}
                                    download
                                    className="text-[9px] font-mono text-accent hover:text-primary transition-colors flex items-center gap-1 uppercase underline underline-offset-4"
                                >
                                    Download Copy
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;
