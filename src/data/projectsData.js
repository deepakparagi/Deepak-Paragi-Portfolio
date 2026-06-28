import bipinSchoolImg from '../assets/bipin_school_hero.png';
import project2Fitai from '../assets/Screenshot (63).png';
import shingriImg from '../assets/shingri.png';
import gadagImg from '../assets/gadag_info.png';
import khansFitnessImg from '../assets/Khans; fitness.png';

export const projectsData = [
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
        challenge: "Fitness apps offer static templates. We needed an autonomous agent capable of generating scientifically strict workout splits while adapting to individual user constraints and real-time API latency.",
        solution: "Integrated a custom Prompt Engineering layer to sanitize and structure LLM outputs. Implemented an optimistic UI update strategy combined with background processing to ensure zero-wait user interaction.",
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
        challenge: "The brand required a highly visceral, motion-heavy digital experience, but typical implementations suffer from poor mobile load times, layout shifts, and SEO penalties.",
        solution: "Engineered a custom motion framework using Framer Motion and GSAP, optimized through aggressive code-splitting. Implemented a zero-layout-shift (CLS) architecture to ensure premium fluid motion across all viewports.",
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
        id: "04",
        title: "Khan's Fitness — AI-Powered Gym Website",
        category: "Agency Work",
        description: "Built a full site with integrated AI tools: BMI calculator, Claude API-powered workout generator, and diet planner — all inside a brutalist high-contrast design.",
        tags: ["Next.js", "Claude API", "Tailwind", "GSAP", "Framer Motion"],
        link: "https://khans-fitness.vercel.app",
        github: "https://github.com/deepakparagi",
        image: khansFitnessImg,
        focalPoint: "object-center",
        featured: true,
        period: "2024",
        overview: "A brutalist high-contrast gym website built for Gadag-Betageri's fitness community, moving beyond a simple brochure to offer real utility.",
        challenge: "Most gym websites are brochures. Khan's Fitness needed a product — a site that does something useful for members, not just looks good for the owner.",
        solution: "Built a full site with integrated AI tools: BMI calculator, Claude API-powered workout generator, and diet planner — all inside a brutalist high-contrast design built for Gadag-Betageri's fitness community.",
        stack: ["Next.js", "Claude API", "Tailwind CSS", "GSAP", "Framer Motion"],
        metrics: {
            features: "3 AI Tools",
            design: "Brutalist",
            year: 2024
        }
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
        challenge: "Developing a highly accessible, legacy-compatible platform that remains modern and easy for non-technical faculty to update without developer intervention.",
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
