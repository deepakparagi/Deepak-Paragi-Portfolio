import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import nmitImg from '../assets/nmit .jpeg';
import diplomaImg from '../assets/gpt diploma.png';

const certsData = [
    {
        id: 1,
        title: "B.E. – AI & Machine Learning",
        issuer: "Nitte Meenakshi Institute of Technology",
        date: "2023 - 2026",
        link: "#",
        category: "Education",
        image: nmitImg
    },
    {
        id: 2,
        title: "Diploma – Computer Science & Engineering",
        issuer: "Government Polytechnic, Gadag (CGPA: 8.59)",
        date: "2020 - 2023",
        link: "#",
        category: "Education",
        image: diplomaImg
    },
    {
        id: 3,
        title: "Python Programming",
        issuer: "Udemy",
        date: "Certification",
        link: "#",
        category: "Certification",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Database Management Systems",
        issuer: "Infosys Springboard",
        date: "Certification",
        link: "#",
        category: "Certification",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Introduction to Machine Learning",
        issuer: "Great Learning",
        date: "Certification",
        link: "#",
        category: "Certification",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop"
    }
];

const BackgroundCard = ({ item, index }) => (
    <ScrollReveal delay={index * 0.15} width="100%">
        <motion.a 
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block h-full rounded-sm bg-surface/30 border border-primary/5 hover:border-accent/40 transition-all duration-500 overflow-hidden relative"
            whileHover={{ y: -8 }}
        >
            {/* Image Handle */}
            <div className="h-48 w-full overflow-hidden relative bg-surface">
                <div className="absolute inset-0 bg-background/60 z-10 group-hover:bg-background/20 transition-colors duration-500" />
                <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-out"
                    loading="lazy"
                />
                <div className="absolute top-4 right-4 z-20">
                    <Award className="w-6 h-6 text-accent drop-shadow-md" />
                </div>
            </div>
            
            {/* Content Handle */}
            <div className="p-6 relative">
                <div className="absolute right-6 top-6 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <ExternalLink className="w-5 h-5 text-accent" />
                </div>
                
                <span className="font-mono text-xs text-accent uppercase tracking-widest mb-3 block">
                    {item.category}
                </span>
                <h4 className="text-xl font-display font-medium text-primary mb-2 line-clamp-2 pr-6">
                    {item.title}
                </h4>
                <div className="flex justify-between items-center mt-6">
                    <span className="text-secondary/80 font-sans text-sm block">
                        {item.issuer}
                    </span>
                    <span className="text-primary/40 text-xs font-mono">
                        {item.date}
                    </span>
                </div>
            </div>
        </motion.a>
    </ScrollReveal>
);

const Certifications = () => {
    const educationData = certsData.filter(item => item.category === "Education");
    const certificationData = certsData.filter(item => item.category === "Certification");

    return (
        <section id="certifications" className="py-10 md:py-16 px-4 md:px-12 bg-background relative overflow-hidden">
            <div className="w-full relative z-10">
                
                {/* EDUCATION SECTION */}
                <ScrollReveal width="100%">
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-sm font-mono text-secondary mb-4 uppercase tracking-[0.2em]">05 / Background</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-medium text-primary leading-tight">
                            Education.
                        </h3>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
                    {educationData.map((item, index) => (
                        <BackgroundCard key={item.id} item={item} index={index} />
                    ))}
                </div>

                {/* CERTIFICATIONS SECTION */}
                <ScrollReveal width="100%">
                    <div className="mb-8 md:mb-12">
                        <h2 className="text-sm font-mono text-secondary mb-4 uppercase tracking-[0.2em]">06 / Credentials</h2>
                        <h3 className="text-3xl md:text-5xl font-display font-medium text-primary leading-tight">
                            Certifications.
                        </h3>
                    </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {certificationData.map((item, index) => (
                        <BackgroundCard key={item.id} item={item} index={index} />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Certifications;
