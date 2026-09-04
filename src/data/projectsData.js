import shingriImg from '../assets/shingri.png';
import gadagImg from '../assets/Gadag_info.png';
import khansFitnessImg from '../assets/Khans fitness.png';
import deepcipherImg from '../assets/Deepcipher studio.png';
import gridmindImg from '../assets/Gridmind Energy.png';
import aiOutreachImg from '../assets/Ai email outreach.png';

export const projectsData = [
    {
        id: "01",
        title: "AI Outreach Automation Platform",
        category: "Artificial Intelligence",
        description: "An AI-powered outreach agent that processes datasets (like Excel sheets) to write and send customized emails with attachments automatically.",
        tags: ["Next.js", "GPT-4", "OpenAI API", "Automation"],
        link: "#",
        github: "https://github.com/deepakparagi",
        image: aiOutreachImg,
        focalPoint: "object-top",
        featured: true,
        period: "2026",
        overview: "Built an AI-powered outreach automation platform using Next.js and the GPT-4 API. Users can upload a dataset (such as an Excel sheet) containing email addresses and contextual details. The AI agent automatically writes highly customized emails, attaches relevant files (like resumes or photos), and sends them directly from the user's connected mail ID.",
        challenge: "Manual outreach is time-consuming and lacks personalization at scale. A flexible system was needed to ingest arbitrary datasets and transform them into personalized, automated email campaigns with attachments.",
        solution: "Designed an automated workflow that processes structured data to generate and dispatch personalized emails on behalf of the user. The system automates customized outreach at approximately 5 emails per minute.",
        stack: ["Next.js", "GPT-4 API", "OpenAI", "Node.js"],
        metrics: {
            speed: "5 emails/min",
            scale: "Automated",
            year: 2026
        },
        lessonsLearned: [
            "LLM workflow automation scales real-world communication effectively.",
            "Prompt engineering is critical for maintaining high personalization quality."
        ]
    },
    {
        id: "02",
        title: "DeepCipher Studio Platform",
        category: "System Architecture",
        description: "The complete agency platform with reusable components, responsive architecture, interactive WebGL elements, and advanced motion systems.",
        tags: ["Next.js", "GSAP", "Framer Motion", "Three.js"],
        link: "https://deepcipher-studio.vercel.app/",
        github: "https://github.com/deepakparagi",
        image: deepcipherImg,
        focalPoint: "object-top",
        featured: true,
        period: "2026",
        overview: "Designed and developed the complete DeepCipher Studio agency platform with reusable components, responsive architecture, interactive WebGL elements, and advanced motion systems.",
        challenge: "Creating a standout portfolio platform that demonstrates high-end engineering and design capabilities.",
        solution: "Implemented SEO metadata, responsive behavior, performance optimization, and production deployment on Vercel utilizing Three.js and GSAP for visceral motion.",
        stack: ["Next.js", "GSAP", "Framer Motion", "Three.js"],
        metrics: {
            performance: "Optimized",
            design: "WebGL Motion",
            year: 2026
        }
    },
    {
        id: "03",
        title: "Gridmind Energy",
        category: "Machine Learning",
        description: "A full-stack machine learning platform serving multiple forecasting models through FastAPI REST endpoints for residential energy prediction.",
        tags: ["Python", "FastAPI", "LSTM", "Next.js", "MongoDB"],
        link: "#",
        github: "https://github.com/deepakparagi",
        image: gridmindImg,
        focalPoint: "object-top",
        featured: true,
        period: "2026",
        overview: "Architected a full-stack machine learning platform serving multiple forecasting models through FastAPI REST endpoints. Research from the project contributed to an IEEE co-authored paper on residential energy consumption prediction.",
        challenge: "Managing multiple machine learning models (LSTM, ARIMA, Random Forest) for inference and visualizing the prediction data interactively.",
        solution: "Implemented model selection and prediction workflows using LSTM, ARIMA, and Random Forest, with MongoDB for historical prediction storage. Built a Next.js dashboard consuming backend APIs for interactive visualization.",
        stack: ["Python", "FastAPI", "LSTM", "ARIMA", "Random Forest", "Next.js", "MongoDB"],
        metrics: {
            models: "3 ML Models",
            paper: "IEEE Co-authored",
            year: 2026
        },
        lessonsLearned: [
            "FastAPI is excellent for serving ML models with low latency.",
            "Visualizing time-series prediction data requires efficient frontend rendering."
        ]
    },
    {
        id: "04",
        title: "Khan's Fitness — AI-Powered Gym Website",
        category: "Agency Work",
        description: "Built and deployed a production fitness platform with integrated Claude API for personalized workout plans and diet recommendations.",
        tags: ["Next.js", "Claude API", "Tailwind CSS", "GSAP", "Framer Motion"],
        link: "https://khans-fitness.vercel.app",
        github: "https://github.com/deepakparagi",
        image: khansFitnessImg,
        focalPoint: "object-top",
        featured: true,
        period: "2024",
        overview: "Built and deployed a production fitness platform with membership information, trainer profiles, transformation showcases, lead generation, and AI-powered features.",
        challenge: "Most gym websites are brochures. Khan's Fitness needed a product — a site that does something useful for members.",
        solution: "Integrated the Claude API to generate personalized workout plans, BMI analysis, and diet recommendations using prompt engineering and LLM response handling. Developed a responsive production interface with GSAP and Framer Motion.",
        stack: ["Next.js", "Claude API", "Tailwind CSS", "GSAP", "Framer Motion"],
        metrics: {
            features: "AI Workouts",
            design: "Production",
            year: 2024
        }
    },
    {
        id: "05",
        title: "Shingri Developers",
        category: "Agency Work",
        description: "Built and deployed a responsive real estate platform with reusable property presentation components.",
        tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
        link: "https://shingri-developers.vercel.app/",
        github: "https://github.com/deepakparagi",
        image: shingriImg,
        focalPoint: "object-top",
        featured: true,
        period: "2026",
        overview: "Built and deployed a responsive real estate platform using Next.js, Tailwind CSS, and Framer Motion with reusable property presentation components.",
        challenge: "The brand required a digital presence to showcase premium real estate efficiently.",
        solution: "Developed a modern, responsive platform optimizing property display and layout performance.",
        stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
        metrics: {
            design: "Premium UI",
            performance: "High",
            year: 2026
        }
    },
    {
        id: "06",
        title: "Gadag Info",
        category: "Digital Preservation",
        description: "Partnered with an Instagram community page of 120k+ followers to build their official bilingual digital platform.",
        tags: ["React", "Tailwind CSS", "i18n"],
        link: "https://gadag.vercel.app/",
        github: "https://github.com/deepakparagi",
        image: gadagImg,
        focalPoint: "object-top",
        featured: true,
        period: "2026",
        overview: "Partnered with a prominent local Instagram page boasting 120k+ followers to build their official website. Engineered a bilingual Kannada-English community platform using React and Tailwind CSS, featuring robust internationalization and accessible navigation.",
        challenge: "Supporting seamless bilingual content delivery for a massive local community platform.",
        solution: "Integrated i18n for smooth language switching and built an accessible, component-driven UI.",
        stack: ["React", "Tailwind CSS", "i18next"],
        metrics: {
            impact: "120k+ Followers",
            localization: "Bilingual",
            year: 2026
        }
    }
];

export const getProjectById = (id) => projectsData.find(project => project.id === id);
export const getProjectsByCategory = (category) => (category === "All" || !category) ? projectsData : projectsData.filter(project => project.category === category);
export const getFeaturedProjects = () => projectsData.filter(project => project.featured);
export const getCategories = () => ["All", ...new Set(projectsData.map(project => project.category))];
export const getAllTags = () => [...new Set(projectsData.flatMap(project => project.tags))];

export default projectsData;
