import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Blog = () => {
    return (
        <div className="min-h-screen bg-background text-primary p-6 md:p-12">
            <Link to="/" className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors mb-12">
                <ArrowLeft size={20} />
                <span>Back to Home</span>
            </Link>

            <div className="max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-display font-medium mb-16">Writing</h1>

                <div className="space-y-8">
                    {/* Blog Post Item */}
                    <article className="group cursor-pointer border-b border-primary/10 pb-8">
                        <span className="text-secondary font-mono text-sm">Oct 24, 2025</span>
                        <h2 className="text-2xl md:text-3xl font-display mt-2 mb-3 group-hover:text-accent transition-colors">
                            Refining the User Experience in AI Applications
                        </h2>
                        <p className="text-secondary leading-relaxed max-w-2xl">
                            How we can design better interfaces for probabilistic systems where clarity and trust are paramount.
                        </p>
                    </article>

                    <article className="group cursor-pointer border-b border-primary/10 pb-8">
                        <span className="text-secondary font-mono text-sm">Sep 12, 2025</span>
                        <h2 className="text-2xl md:text-3xl font-display mt-2 mb-3 group-hover:text-accent transition-colors">
                            Optimizing React Performance for Animation-Heavy Sites
                        </h2>
                        <p className="text-secondary leading-relaxed max-w-2xl">
                            Lessons learned from building a portfolio with complex ScrollReveal and Framer Motion effects.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Blog;
