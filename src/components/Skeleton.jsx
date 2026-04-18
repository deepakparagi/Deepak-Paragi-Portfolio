import { motion } from 'framer-motion';

const Skeleton = ({ className, variant = 'rect', width, height }) => {
    const variants = {
        rect: 'rounded-sm',
        circle: 'rounded-full',
        text: 'rounded-md h-4 w-full'
    };

    return (
        <div 
            className={`relative overflow-hidden bg-surface/40 ${variants[variant]} ${className}`}
            style={{ width, height }}
        >
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear"
                }}
            />
        </div>
    );
};

export default Skeleton;
