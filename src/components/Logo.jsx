import { motion } from 'framer-motion';

const Logo = () => {
    return (
        <div className="relative w-10 h-10 flex items-center justify-center">
            {/* Abstract "DP" Monogram - Geometric/Architectural Style */}
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary group-hover:text-accent transition-colors duration-300">
                {/* Outer Frame / D shape */}
                <motion.path
                    d="M10 10H20C25.5228 10 30 14.4772 30 20V20C30 25.5228 25.5228 30 20 30H10V10Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />

                {/* Inner Vertical Line / P stem */}
                <motion.path
                    d="M16 16V24"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="square"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
                />

                {/* Dot Accent */}
                <motion.circle
                    cx="24"
                    cy="20"
                    r="2"
                    className="fill-accent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                />
            </svg>
        </div>
    );
};

export default Logo;
