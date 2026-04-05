import { motion } from 'framer-motion';

const ShaderLine = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-[1] overflow-hidden">
            {/* Vertical scanning line */}
            <motion.div
                initial={{ y: '-10%' }}
                animate={{ y: '110%' }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="w-full h-[2px] bg-gradient-to-r from-transparent via-accent/30 to-transparent shadow-[0_0_20px_rgba(var(--accent),0.3)] opacity-50"
            />
            
            {/* Subtle Horizontal Scanning Light (Optional Elite Detail) */}
            <motion.div
                initial={{ x: '-10%' }}
                animate={{ x: '110%' }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 2
                }}
                className="absolute inset-y-0 w-[1px] bg-gradient-to-b from-transparent via-primary/10 to-transparent opacity-20"
            />
        </div>
    );
};

export default ShaderLine;
