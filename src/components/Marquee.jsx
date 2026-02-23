import { motion } from 'framer-motion';

const Marquee = ({ text, speed = 20, direction = 'left' }) => {
    const marqueeVariants = {
        animate: {
            x: direction === 'left' ? [0, -1000] : [-1000, 0],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: speed,
                    ease: "linear",
                },
            },
        },
    };

    return (
        <div className="overflow-hidden whitespace-nowrap py-12 md:py-24 border-y border-primary/5 bg-surface/30 backdrop-blur-sm relative z-10 my-12">
            <motion.div
                className="inline-block"
                variants={marqueeVariants}
                animate="animate"
            >
                {[...Array(10)].map((_, i) => (
                    <span key={i} className="text-[12vw] md:text-[8vw] font-display font-black uppercase tracking-tighter text-primary/5 mx-8 select-none">
                        {text} <span className="text-accent">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
};

export default Marquee;
