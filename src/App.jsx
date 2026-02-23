import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { HashRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

import GridBackground from './components/GridBackground';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for perspective tilt
  const rotateX = useSpring(useTransform(mouseY, [0, window.innerHeight], [2, -2]), { stiffness: 50, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [0, window.innerWidth], [-2, 2]), { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HashRouter>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <motion.main
        style={{ perspective: 1000, rotateX, rotateY }}
        className="text-primary min-h-screen selection:bg-black selection:text-white overflow-hidden relative"
      >
        <CustomCursor />
        <ScrollProgress />
        <GridBackground />

        <div className="relative z-10">
          <AnimatedRoutes />
        </div>
      </motion.main>
    </HashRouter>
  );
}

export default App;
