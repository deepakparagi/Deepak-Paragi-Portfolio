import { useState, useEffect } from 'react';
import Home from './pages/Home';
import GridBackground from './components/GridBackground';
import { motion, AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';

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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 2. Preloader simulation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      lenis.destroy();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-background min-h-screen selection:bg-accent selection:text-background">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-6">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                className="h-[1px] bg-accent"
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <span className="font-mono text-[10px] tracking-[0.4em] text-secondary uppercase animate-pulse">
                Initializing Protocol...
              </span>
            </div>
          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <GridBackground />
            <Home />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
