import { useState, useEffect, useCallback } from 'react';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

export const useTextScramble = (text, trigger = true) => {
    const [displayValue, setDisplayValue] = useState(text);
    const [isComplete, setIsComplete] = useState(false);

    const scramble = useCallback(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayValue(prev => 
                text.split('').map((char, index) => {
                    if (index < iteration) return text[index];
                    return characters[Math.floor(Math.random() * characters.length)];
                }).join('')
            );

            if (iteration >= text.length) {
                clearInterval(interval);
                setIsComplete(true);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    useEffect(() => {
        if (trigger) {
            return scramble();
        }
    }, [trigger, scramble]);

    return { displayValue, isComplete };
};

export const TextScramble = ({ text, trigger = true, className = "" }) => {
    const { displayValue } = useTextScramble(text, trigger);
    return <span className={className}>{displayValue}</span>;
};
