import { useEffect, useState } from "react"

const DarkModeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        
        if(isDark) {
            root.classList.add("dark");
        }
        else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <button
        onClick={() => setIsDark(!isDark)}
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200 transition"
        >
            {isDark ? "Light Mode" : "Dark Mode"}

        </button>
    )

}


export default DarkModeToggle;