import { useState, useEffect } from "react";
import { LightBulbIcon } from '@heroicons/react/24/outline';

export function ToggleMode() {
    const savedDark = localStorage.getItem('darkMode') === 'true';
    const [darkMode, setDarkMode] = useState(savedDark);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('darkMode', 'true');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('darkMode', 'false');
        }
    }, [darkMode]);

    return (
        <button onClick={() => setDarkMode(!darkMode)}>
            <LightBulbIcon className="size-8"/>
        </button>
    )
}