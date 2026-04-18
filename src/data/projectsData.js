import bipinSchoolImg from '../assets/bipin_school_hero.png';
import project2Fitai from '../assets/Screenshot (63).png';
import signifyImg from '../assets/signify_studio.webp';
import shingriImg from '../assets/shingri.png';
import gadagImg from '../assets/gadag_info.png';

export const projectsData = [
    {
        id: "00",
        title: "Shingri Developers",
        category: "System Architecture",
        description: "A premium luxury real estate platform designed for high-end digital presence. Engineered with an editorial design system and high-performance frontend architecture.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
        link: "https://shingri-developers.vercel.app/",
        github: "https://github.com/deepakparagi",
        image: shingriImg,
        focalPoint: "object-center",
        featured: true,
        period: "2026",
        overview: "A flagship digital showcase for Shingri Developers, architected to bridge the gap between luxury architectural vision and digital experience. The platform serves as a high-conversion lead generation engine for premium real estate.",
        challenge: "The primary challenge was implementing complex, high-performance animations (60fps) alongside large media assets without compromising on mobile load times or SEO readability.",
        solution: "Engineered a custom motion framework using Framer Motion and GSAP, optimized through aggressive code-splitting and asset lazy-loading. Implemented a zero-layout-shift (CLS) architecture to ensure premium fluid motion across all viewports.",
        stack: ["React", "Next.js", "TailwindCSS", "PostCSS", "Lenis"],
        metrics: {
            performance: "98% Lighthouse",
            conversion: "+25% leads",
            year: 2026
        },
        lessonsLearned: [
            "Precision-tuned typography is the foundation of digital luxury.",
            "Custom easing functions create a visceral sense of brand quality better than industry defaults.",
            "Performance budgets must be strictly enforced in media-heavy environments."
        ]
    },
    {
        id: "00-B",
        title: "GADAG_INFO",
        category: "Digital Preservation",
        description: "A breathtaking digital museum documenting North Karnataka's soul. Features millisecond-perfect localization and immersive horizontal scroll storytelling.",
        tags: ["React", "TailwindCSS", "Framer Motion", "i18n"],
        link: "https://gadag.vercel.app/",
        github: "https://github.com/deepakparagi",
        image: gadagImg,
        focalPoint: "object-center",
        featured: true,
        period: "2026",
        overview: "A high-performance localized web experience designed for the 'GADAG_INFO' brand. It documents historical Chalukyan architecture through an editorial, 2026-level digital interface.",
        challenge: "Handling seamless switching between English and Kannada scripts while maintaining perfect typographic alignment and 60fps scroll performance in an image-heavy environment.",
        solution: "Developed a CSS-driven localization engine that eliminates JS-state lag. Implemented a custom horizontal scroll engine with Lenis integration to simulate a physical gallery walk-through.",
        stack: ["React", "Vite", "TailwindCSS", "i18next", "Lenis"],
        metrics: {
            localization: "Sub-50ms",
            uptime: "99.9%",
            year: 2026
        },
        lessonsLearned: [
            "Historical content demands high-contrast serif typography for maximum impact.",
            "CSS Grid is more performant than absolute positioning for large gallery layouts.",
            "Zero-lag script switching greatly enhances perceived performance in multilingual apps."
        ]
    },
    {
        id: "02",
        title: "FitAI: AI Fitness Coach",
        category: "Artificial Intelligence",
        description: "A personalized workout planner powered by GPT-4, generating scientific routines based on user constraints and goals. Featured autonomous planning logic.",
        tags: ["React.js", "Node.js", "GPT-4", "OpenAI"],
        link: "https://ai-fitness-coach-git-main-deepaks-projects-f551996f.vercel.app/",
        github: "https://github.com/deepakparagi/ai-fitness-coach",
        image: project2Fitai,
        focalPoint: "object-center",
        featured: true,
        period: "2025",
        overview: "An AI-native workout orchestrator that replaces generic fitness plans with scientifically-backed, GPT-4 generated routines tailored to the user's specific musculoskeletal constraints.",
        challenge: "Ensuring AI-generated plans followed strict scientific splits while handling real-time API latency and maintaining a responsive UI.",
        solution: "Integrated a custom Prompt Engineering layer to sanitize and structure model outputs. Implemented an optimistic UI update strategy combined with background processing to ensure zero-wait user interaction.",
        stack: ["React.js", "Node.js", "OpenAI API", "Express"],
        metrics: {
            accuracy: "94% validated",
            users: "500+",
            year: 2025
        },
        lessonsLearned: [
            "Sanitizing LLM outputs is critical for production safety.",
            "User trust is built through transparent AI explanation layers.",
            "Drag-and-drop feedback loops significantly improve AI planning accuracy."
        ]
    },
    {
        id: "01",
        title: "Bipin Chikkatti School",
        category: "Enterprise Web",
        description: "Official digital hub for a major educational institution. Engineered for accessibility, admissions management, and community engagement.",
        tags: ["React", "SCSS", "JavaScript"],
        link: "https://www.chikkattieducation.co.in/",
        github: "https://github.com/deepakparagi/bipin-chikkatti-school",
        image: bipinSchoolImg,
        focalPoint: "object-center-top",
        featured: true,
        period: "2025",
        overview: "The official digital platform for Bipin Chikkatti school, designed to modernize communication and streamline admissions processes for thousands of parents and students.",
        challenge: "Developing a highly accessible, legacy-compatible platform that remains modern and easy for non-technical faculty to update.",
        solution: "Built a component-based React architecture with deep SEO optimization and WCAG accessibility compliance. Integrated a custom CMS-lite layer for effortless content management.",
        stack: ["React", "SCSS", "Vite", "Web accessibility"],
        metrics: {
            reach: "5k+ students",
            mobile_ui: "10/10",
            year: 2025
        }
    }
];

export const getProjectById = (id) => projectsData.find(project => project.id === id);
export const getProjectsByCategory = (category) => (category === "All" || !category) ? projectsData : projectsData.filter(project => project.category === category);
export const getFeaturedProjects = () => projectsData.filter(project => project.featured);
export const getCategories = () => ["All", ...new Set(projectsData.map(project => project.category))];
export const getAllTags = () => [...new Set(projectsData.flatMap(project => project.tags))];

export default projectsData;
