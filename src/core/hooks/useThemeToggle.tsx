import { useCallback, useEffect } from 'react';

interface UseThemeTogglerProps {
    toggleTheme: () => void;
}

const useThemeToggle = (): UseThemeTogglerProps => {
    useEffect(() => {
        if (typeof window !== 'undefined' && !localStorage.getItem('theme')) {
            localStorage.setItem('theme', 'light');
        }
    }, []);

    const toggleTheme = useCallback(() => {
        const getActiveTheme = localStorage.getItem('theme');

        if (getActiveTheme === 'light') {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.toggle('light');
            document.documentElement.classList.remove('dark');
        }
    }, []);

    return {
        toggleTheme,
    };
};

export default useThemeToggle;
