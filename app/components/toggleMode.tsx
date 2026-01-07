import { useState, useEffect } from "react";
import { HiLightBulb } from "react-icons/hi2";

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
        <button
            onClick={() => setDarkMode(!darkMode)}
            data-tooltip-id="linkTooltip"
            data-tooltip-content="Light/Dark toggle"
            data-tooltip-place="top"
        >
            <HiLightBulb />
        </button>
    )
}