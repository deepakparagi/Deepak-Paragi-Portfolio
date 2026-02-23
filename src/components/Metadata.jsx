import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Metadata = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: 'Asia/Kolkata'
        });
    };

    return (
        <div className="flex items-center gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">
            <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span>Bengaluru, IN</span>
            </div>

            <div className="hidden sm:block">
                <span>{formatTime(time)} IST</span>
            </div>
        </div>
    );
};

export default Metadata;
