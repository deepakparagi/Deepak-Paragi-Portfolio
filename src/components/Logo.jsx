import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <div className="flex items-center gap-2 group cursor-pointer">
            <span className="font-serif italic text-2xl text-primary group-hover:text-accent transition-colors duration-500">D</span>
            <span className="font-display font-light text-xl tracking-tighter text-primary group-hover:text-accent transition-colors duration-500">P</span>
        </div>
    );
};

export default Logo;
