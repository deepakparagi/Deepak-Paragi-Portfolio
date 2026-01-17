import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Lenis from 'lenis';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Blog from './pages/Blog';

import GridBackground from './components/GridBackground';
import Loader from './components/Loader';

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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HashRouter>
      <AnimatePresence mode="wait">
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <main className="text-primary min-h-screen selection:bg-black selection:text-white overflow-hidden relative">
        <GridBackground />

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </main>
    </HashRouter>
  );
}

export default App;
