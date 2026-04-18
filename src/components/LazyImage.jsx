import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const LazyImage = ({ src, alt, className, placeholder }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const [hasError, setHasError] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        if (!imgRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                    observer.disconnect();
                }
            },
            {
                rootMargin: '200px',
                threshold: 0.01
            }
        );

        observer.observe(imgRef.current);

        return () => {
            if (observer && imgRef.current) {
                observer.disconnect();
            }
        };
    }, []);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleError = () => {
        setHasError(true);
        setIsLoaded(true);
    };

    return (
        <div ref={imgRef} className="relative w-full h-full">
            {/* Loading Skeleton */}
            {!isLoaded && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 animate-pulse" />
            )}

            {/* Actual Image */}
            {isInView && !hasError && (
                <motion.img
                    src={src}
                    alt={alt}
                    className={className}
                    onLoad={handleLoad}
                    onError={handleError}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    loading="lazy"
                />
            )}

            {/* Error State */}
            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-surface">
                    <p className="text-secondary text-sm">Image unavailable</p>
                </div>
            )}

            {/* Optional Placeholder */}
            {placeholder && !isInView && (
                <div className="absolute inset-0 bg-surface flex items-center justify-center">
                    <span className="text-secondary/50">{placeholder}</span>
                </div>
            )}
        </div>
    );
};

LazyImage.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string
};

export default LazyImage;
