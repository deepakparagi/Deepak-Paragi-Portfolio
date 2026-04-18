import { useState, useEffect } from 'react';
import AnimatedRoutes from './components/AnimatedRoutes';
import ScrollToTop from './components/ScrollToTop';
import GridBackground from './components/GridBackground';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

import Loader from './components/Loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Initialize Lenis (Silky Smooth Scroll)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Store globally for other components to access
    window.lenis = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.lenis = null;
    };
  }, []);

  return (
    <div className="bg-background min-h-screen selection:bg-accent selection:text-background">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ 
              duration: 1.6, 
              ease: [0.16, 1, 0.3, 1],
              filter: { duration: 1.2 }
            }}
          >
            <GridBackground />
            <AnimatedRoutes />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
