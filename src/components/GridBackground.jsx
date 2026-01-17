import { motion } from 'framer-motion';

const GridBackground = () => {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
            {/* Main Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--primary)/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--primary)/0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Secondary Layer for depth (lighter/larger grid) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgb(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:96px_96px] mask-radial" />

            {/* Vignette / Fade out at edges for softness */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,transparent,bg-background)]" />
        </div>
    );
};

export default GridBackground;
