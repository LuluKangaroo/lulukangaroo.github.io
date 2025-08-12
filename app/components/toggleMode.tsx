import { useState, useEffect } from "react";
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaLightbulb } from "react-icons/fa";

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
            <HiOutlineLightBulb />
            <FaLightbulb />
        </button>
    )
}