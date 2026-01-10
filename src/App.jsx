import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

import Background from './components/Background';
import ThreeBackground from './components/ThreeBackground';

function App() {
  useEffect(() => {
    // ... (lenis code remains)
  }, []);

  return (
    <main className="text-primary min-h-screen selection:bg-accent selection:text-white overflow-hidden relative">
      <Background />
      <ThreeBackground />

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
