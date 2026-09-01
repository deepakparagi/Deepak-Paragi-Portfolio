import { motion } from 'framer-motion';
import { Github, GitPullRequest, Star, GitCommit } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Skeleton from '../components/Skeleton';

const statsData = [
    { label: "Total Commits", value: "200+", icon: GitCommit },
    { label: "Pull Requests", value: "30+", icon: GitPullRequest },
    { label: "Repositories", value: "20+", icon: Github },
    { label: "Stars Earned", value: "6", icon: Star }
];

const GithubStats = ({ isLoading = false }) => {
    // Generate some random contribution data for a mock graph
    const weeks = Array.from({ length: 52 }, () => 
        Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
    );

    const getOpacity = (level) => {
        if (level === 0) return 'bg-surface/50 border border-primary/5';
        if (level === 1) return 'bg-accent/20';
        if (level === 2) return 'bg-accent/40';
        if (level === 3) return 'bg-accent/70';
        return 'bg-accent';
    };

    return (
        <section className="py-10 md:py-16 px-4 md:px-12 bg-background relative overflow-hidden">
            <div className="w-full relative z-10">
                <ScrollReveal width="100%">
                    <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
                            <h2 className="text-sm font-mono text-secondary mb-4 uppercase tracking-[0.2em]">06 / Open Source</h2>
                            <h3 className="text-3xl md:text-5xl font-display font-medium text-primary leading-tight">
                                Code Activity.
                            </h3>
                        </div>
                        
                        <a 
                            href="https://github.com/deepakparagi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 border border-primary/10 hover:border-accent bg-surface px-6 py-3 rounded-full transition-colors duration-300 w-max"
                        >
                            <Github className="w-5 h-5 text-secondary group-hover:text-primary transition-colors" />
                            <span className="font-mono text-xs uppercase tracking-widest text-primary">@deepakparagi</span>
                        </a>
                    </div>
                </ScrollReveal>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Stats Cards */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                        {isLoading ? (
                             Array.from({ length: 4 }).map((_, index) => (
                                <div key={index} className="bg-surface/40 border border-primary/5 p-6 rounded-sm space-y-4">
                                     <Skeleton variant="circle" className="w-10 h-10" />
                                     <div className="space-y-2">
                                         <Skeleton variant="rect" className="w-16 h-8" />
                                         <Skeleton variant="rect" className="w-12 h-3" />
                                     </div>
                                </div>
                             ))
                        ) : (
                            statsData.map((stat, index) => (
                                <ScrollReveal key={index} delay={index * 0.1} width="100%">
                                    <div className="bg-surface/40 border border-primary/5 p-6 rounded-sm hover:border-accent/30 transition-colors duration-300 flex flex-col items-start gap-4 group">
                                        <div className="p-3 bg-background rounded-full group-hover:bg-accent/10 transition-colors">
                                            <stat.icon className="w-5 h-5 text-secondary group-hover:text-accent transition-colors" />
                                        </div>
                                        <div>
                                            <div className="text-3xl font-display font-medium text-primary mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-xs font-mono text-secondary uppercase tracking-widest">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                </ScrollReveal>
                            ))
                        )}
                    </div>

                    {/* Contribution Graph Simulation */}
                    <div className="lg:col-span-8 w-full max-w-full overflow-hidden">
                        <ScrollReveal delay={0.4} width="100%">
                            <div className="bg-surface/30 border border-primary/5 p-4 md:p-8 rounded-sm w-full">
                                {isLoading ? (
                                    <div className="space-y-6">
                                        <div className="flex gap-1 md:gap-1.5 justify-end">
                                            {Array.from({ length: 52 }).map((_, w) => (
                                                <div key={w} className="flex flex-col gap-1 md:gap-1.5">
                                                    {Array.from({ length: 7 }).map((_, d) => (
                                                        <Skeleton key={d} variant="rect" className="w-3 h-3 rounded-[2px]" />
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <Skeleton variant="rect" className="w-20 h-3" />
                                            <Skeleton variant="rect" className="w-32 h-6 rounded-full" />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <div className="overflow-x-auto pb-4 scrollbar-hide">
                                            <div className="flex gap-1 md:gap-1.5 justify-start md:justify-end min-w-max">
                                                {weeks.map((week, wIndex) => (
                                                    <div key={wIndex} className="flex flex-col gap-1 md:gap-1.5">
                                                        {week.map((level, dIndex) => (
                                                            <motion.div 
                                                                key={`${wIndex}-${dIndex}`}
                                                                initial={{ opacity: 0, scale: 0.5 }}
                                                                whileInView={{ opacity: 1, scale: 1 }}
                                                                viewport={{ once: true }}
                                                                transition={{ delay: (wIndex * 0.005) + (dIndex * 0.01), duration: 0.3 }}
                                                                className={`w-2 h-2 md:w-3 md:h-3 rounded-[1px] md:rounded-[2px] ${getOpacity(level)}`}
                                                            />
                                                        ))}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <div className="flex justify-between items-center mt-6 text-secondary font-mono text-[10px] md:text-xs">
                                            <span>Last Year</span>
                                            <div className="hidden xs:flex bg-background border border-primary/5 px-3 py-1.5 rounded-full items-center gap-2 scale-75 md:scale-100 origin-right">
                                                <span>Less</span>
                                                <div className="flex gap-1">
                                                    {[0,1,2,3,4].map(level => (
                                                        <div key={level} className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-[1px] md:rounded-[2px] ${getOpacity(level)}`} />
                                                    ))}
                                                </div>
                                                <span>More</span>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GithubStats;
