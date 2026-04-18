import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const BitStream = ({ text, trigger = true, className = "" }) => {
    const [displayValue, setDisplayValue] = useState('');
    const binaryChars = '01';

    useEffect(() => {
        if (!trigger) return;

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayValue(
                text.split('').map((char, index) => {
                    if (index < iteration) return text[index];
                    return binaryChars[Math.floor(Math.random() * binaryChars.length)];
                }).join('')
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 2;
        }, 20);

        return () => clearInterval(interval);
    }, [text, trigger]);

    return (
        <span className={className}>
            {displayValue}
        </span>
    );
};

export default BitStream;
