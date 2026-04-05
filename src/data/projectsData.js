import bipinSchoolImg from '../assets/bipin_school_hero.png';
import project2Fitai from '../assets/Screenshot (63).png';
import signifyImg from '../assets/signify_studio.webp';
import shingriImg from '../assets/shingri.png';
import gadagImg from '../assets/gadag_info.png';

export const projectsData = [
    {
        id: "00",
        title: "Shingri Developers",
        category: "Full Stack Development",
        description: "A premium luxury real estate platform designed with high-end editorial aesthetics. Features dynamic project showcases, smooth scroll animations, and secure lead generation.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
        link: "https://shingri-developers.vercel.app/",
        github: "https://github.com/deepakparagi",
        image: shingriImg, // The screenshot sent by user
        focalPoint: "object-center",
        featured: true,
        period: "2026",
        overview: "A high-end real estate platform for Shingri Developers offering a digital showcase of luxury architectural projects, incorporating smooth animations and deep brand aesthetics.",
        challenge: "Developing a digital presence that reflects luxury and high-end real estate while ensuring exceptional performance and accessibility.",
        solution: "Engineered a performant Next.js application with a focus on typography, generous negative space, and custom CSS-based animations to create a premium, award-winning user experience.",
        stack: ["React", "Next.js", "TailwindCSS", "Framer Motion"],
        metrics: {
            technologies: 4,
            year: 2026
        },
        lessonsLearned: [
            "Premium aesthetics heavily rely on carefully tuned typography and exact spacing",
            "Performance optimization is critical when using heavy graphical assets",
            "Complex stagger reveals create a dramatic feeling of depth"
        ]
    },
    {
        id: "00-B",
        title: "GADAG_INFO",
        category: "Web Application",
        description: "A breathtaking digital platform built for the 'GADAG_INFO' Instagram brand. Featuring an open-air museum of empires with deep editorial design, localization (English/Kannada), and dynamic story showcases.",
        tags: ["React", "TailwindCSS", "Framer Motion", "i18n"],
        link: "https://gadag.vercel.app/",
        github: "https://github.com/deepakparagi",
        image: gadagImg, // The screenshot sent by user
        focalPoint: "object-center",
        featured: true,
        period: "2026",
        overview: "A high-performance localized web experience documenting the soul of North Karnataka. Blends millennia of Chalukyan architecture with 2026-level digital aesthetics.",
        challenge: "Creating an immersive, bilingual editorial experience that runs at 60fps while handling heavy image assets and complex scroll-driven storytelling.",
        solution: "Implemented CSS-based language switching for zero-lag localization, Lenis for silky smooth scrolling, and aggressive asset optimization to ensure a 10/10 lighthouse score.",
        stack: ["React", "Vite", "TailwindCSS", "Framer Motion"],
        metrics: {
            technologies: 4,
            year: 2026
        },
        lessonsLearned: [
            "CSS-driven localization provides significantly faster feedback than JS-state toggles.",
            "Historical content demands high-contrast serif typography for maximum impact.",
            "Horizontal scroll architectures enhance the feeling of a physical gallery."
        ]
    },
    {
        id: "01",
        title: "Bipin Chikkatti School",
        category: "Web Development",
        description: "Designed and developed the official website for Bipin Chikkatti School, Gadag. The platform features sections for academics, admissions, faculty, and facilities, serving as a comprehensive digital hub for the school community.",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://www.chikkattieducation.co.in/",
        github: "https://github.com/deepakparagi/bipin-chikkatti-school",
        image: bipinSchoolImg,
        focalPoint: "object-center-top",
        featured: true,
        // Extended details for ProjectDetails page
        period: "2024",
        overview: "Designed and developed the official website for Bipin Chikkatti School, Gadag. The platform features sections for academics, admissions, faculty, and facilities, serving as a comprehensive digital hub for the school community.",
        challenge: "The school required a modern, mobile-friendly platform to replace outdated communication methods and provide easy access to information for parents and prospective students.",
        solution: "Developed a high-performance, responsive React application with Tailwind CSS. Focused on accessibility, clear navigation, and a professional design language that reflects the school's values.",
        stack: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
        metrics: {
            technologies: 3,
            year: 2024
        }
    },
    {
        id: "02",
        title: "AI Fitness Coach",
        category: "Artificial Intelligence",
        description: "A personalized workout planner powered by OpenAI, generating custom routines based on user goals and equipment availability.",
        tags: ["React.js", "TailwindCSS", "OpenAI API"],
        link: "https://ai-fitness-coach-git-main-deepaks-projects-f551996f.vercel.app/",
        github: "https://github.com/deepakparagi/ai-fitness-coach",
        image: project2Fitai,
        focalPoint: "object-center",
        featured: true,
        // Extended details for ProjectDetails page
        period: "2024",
        overview: "A personalized workout planner powered by OpenAI that generates custom routines based on user goals and equipment availability.",
        challenge: "Users often struggle to create effective workout plans that match their specific constraints (time, equipment, injuries). Generic apps lack personalization.",
        solution: "Integrated GPT-4 to analyze user inputs and generate scientifically-backed workout splits. Implemented a drag-and-drop interface for users to tweak the generated plans.",
        stack: ["React.js", "TailwindCSS", "OpenAI API", "JavaScript"],
        metrics: {
            technologies: 3,
            year: 2024
        },
        lessonsLearned: [
            "Effective prompt engineering is crucial for consistent AI outputs",
            "User feedback loops improve AI-generated content quality",
            "Balancing AI automation with user control enhances UX"
        ]
    },

    {
        id: "04",
        title: "Signify Studio",
        category: "Frontend Development",
        description: "A premium landing page template for creative agencies featuring smooth scroll animations, responsive layouts, and modern design aesthetics.",
        tags: ["HTML", "CSS", "JavaScript", "Animations"],
        link: "https://signify-studio-wine.vercel.app/",
        github: "https://github.com/deepakparagi/signify-studio",
        image: signifyImg,
        focalPoint: "object-center",
        featured: false,
        // Extended details for ProjectDetails page
        period: "2023",
        overview: "A premium landing page template for creative agencies, featuring smooth scroll animations and responsive layout that showcases modern frontend capabilities.",
        challenge: "Demonstrating high-end frontend capabilities with complex animations and layout requirements while maintaining performance and accessibility.",
        solution: "Implemented ScrollReveal animations, fluid responsive design using modern CSS techniques, and optimized asset loading for smooth performance across all devices.",
        stack: ["HTML5", "CSS3", "JavaScript", "ScrollReveal"],
        metrics: {
            technologies: 3,
            year: 2023
        },
        lessonsLearned: [
            "Performance matters - animations must be 60fps",
            "Mobile-first design simplifies responsive implementation",
            "CSS Grid and Flexbox together create powerful layouts"
        ]
    }
];

// Helper functions for filtering
export const getProjectById = (id) => {
    return projectsData.find(project => project.id === id);
};

export const getProjectsByCategory = (category) => {
    if (category === "All" || !category) return projectsData;
    return projectsData.filter(project => project.category === category);
};

export const getFeaturedProjects = () => {
    return projectsData.filter(project => project.featured);
};

export const searchProjects = (query) => {
    const lowerQuery = query.toLowerCase();
    return projectsData.filter(project =>
        project.title.toLowerCase().includes(lowerQuery) ||
        project.description.toLowerCase().includes(lowerQuery) ||
        project.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
};

export const getCategories = () => {
    return ["All", ...new Set(projectsData.map(project => project.category))];
};

export const getAllTags = () => {
    const allTags = projectsData.flatMap(project => project.tags);
    return [...new Set(allTags)];
};

export default projectsData;
