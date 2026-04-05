import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { HashRouter } from 'react-router-dom';
import AnimatedRoutes from './components/AnimatedRoutes';

import GridBackground from './components/GridBackground';
import Loader from './components/Loader';
import ScrollProgress from './components/ScrollProgress';
import ScrollToTop from './components/ScrollToTop';
import ShaderLine from './components/ShaderLine';

function App() {
  const [isLoading, setIsLoading] = useState(true);

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

    // Global reference to reset scroll manually if needed
    window.lenis = lenis;

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main className="text-primary min-h-screen selection:bg-black selection:text-white relative">
        <ScrollProgress />
        <GridBackground />
        <ShaderLine />

        <div className="relative z-10 isolate">
          <AnimatedRoutes />
        </div>
      </main>
    </HashRouter>
  );
}

export default App;
