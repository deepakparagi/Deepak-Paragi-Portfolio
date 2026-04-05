import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        // Reset window scroll immediately
        window.scrollTo(0, 0);

        // Reset global Lenis if available
        if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
        }
        
        // Reset vertical position after transitions to bypass any 
        // lingering smooth scroll locks from Lenis or other libraries.
        const scrollReset = setTimeout(() => {
            window.scrollTo(0, 0);
            if (window.lenis) {
                window.lenis.scrollTo(0, { immediate: true });
            }
            if (document.documentElement) {
                document.documentElement.scrollTop = 0;
            }
        }, 100);

        return () => clearTimeout(scrollReset);
    }, [pathname]);

    return null;
};

export default ScrollToTop;
