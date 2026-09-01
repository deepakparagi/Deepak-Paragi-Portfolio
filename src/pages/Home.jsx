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

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const baseUrl = import.meta.env.BASE_URL;
    const resumeUrl = `${baseUrl}Deepak_Paragi_Resume_G.pdf`.replace(/\/+/g, '/');

    useEffect(() => {
        // Simulated loading state for skeleton screen demonstration
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        return () => clearTimeout(timer);
    }, []);

    const handleResumeOpen = (e) => {
        if (e) e.preventDefault();
        window.open(resumeUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="relative">
            <Navbar onResumeClick={handleResumeOpen} />
            <Hero onResumeClick={handleResumeOpen} />
            <About />
            <Skills />
            <Experience />
            <Projects isLoading={isLoading} />
            <Certifications />
            <GithubStats isLoading={isLoading} />
            <Contact onResumeClick={handleResumeOpen} />
            <Footer />
        </div>
    );
};

export default Home;
