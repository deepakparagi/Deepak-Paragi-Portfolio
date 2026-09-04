import { Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../pages/Home';
import ProjectDetails from '../pages/ProjectDetails';

const AnimatedRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
    );
};

const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full relative z-[50]"
    >
        {children}
    </motion.div>
);

export default AnimatedRoutes;
