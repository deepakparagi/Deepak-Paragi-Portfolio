import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../pages/Home';
import ProjectDetails from '../pages/ProjectDetails';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route
                    path="/"
                    element={
                        <PageWrapper>
                            <Home />
                        </PageWrapper>
                    }
                />
                <Route
                    path="/project/:id"
                    element={
                        <PageWrapper>
                            <ProjectDetails />
                        </PageWrapper>
                    }
                />
            </Routes>
        </AnimatePresence>
    );
};

const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full"
    >
        {children}
    </motion.div>
);

export default AnimatedRoutes;
