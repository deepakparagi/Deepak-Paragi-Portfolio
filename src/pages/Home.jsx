import { useState, useEffect } from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Certifications from '../sections/Certifications';
import GithubStats from '../sections/GithubStats';
import Contact from '../sections/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ResumeModal from '../components/ResumeModal';

const Home = () => {
    const [isResumeOpen, setIsResumeOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulated loading state for skeleton screen demonstration
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const toggleResume = () => setIsResumeOpen(!isResumeOpen);

    return (
        <div className="relative">
            <Navbar onResumeClick={toggleResume} />
            <Hero onResumeClick={toggleResume} />
            <About />
            <Skills />
            <Experience />
            <Projects isLoading={isLoading} />
            <Certifications />
            <GithubStats isLoading={isLoading} />
            <Contact onResumeClick={toggleResume} />
            <Footer />

            <ResumeModal 
                isOpen={isResumeOpen} 
                onClose={() => setIsResumeOpen(false)} 
            />
        </div>
    );
};

export default Home;
