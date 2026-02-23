import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
    return (
        <>
            <motion.div
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 1 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 bg-accent z-[100] origin-top pointer-events-none"
            />
            <motion.div
                initial={{ scaleY: 1 }}
                animate={{ scaleY: 0 }}
                exit={{ scaleY: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 bg-accent z-[100] origin-bottom pointer-events-none"
            />
            {children}
        </>
    );
};

export default PageTransition;
