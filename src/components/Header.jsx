import { Link } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle"

const Header = () => {
    return (
        <div className="max-w-full justify-center mx-4 my-4 px-4 py-2 items-center flex sm:justify-between bg-gray-100 text-blue-600 dark:bg-gray-900 dark:text-blue-400 sm:rounded-full">
            <div className="hidden sm:inline-block">
                <h3 className="font-bold text-3xl cursor-pointer"
                >SHAH.
                </h3>
            </div>

            <div className="w-full sm:w-6/12 px-6 py-2">
                <ul className="flex justify-between text-sm sm:text-xl font-semibold">

                    <Link to="/home">
                    <li className="cursor-pointer hover:-translate-y-1 hover:underline transition duration-500 ease-in-out hover:text-blue-700 dark:hover:text-blue-300">
                    Home
                    </li>
                    </Link>

                    
                    <Link to="/about">
                    <li className="cursor-pointer hover:-translate-y-1 hover:underline transition duration-500 ease-in-out hover:text-blue-700 dark:hover:text-blue-300">
                    About
                    </li>
                    </Link>

                    <Link to="/projects">
                    <li className="cursor-pointer hover:-translate-y-1 hover:underline transition duration-500 ease-in-out hover:text-blue-700 dark:hover:text-blue-300">
                    Projects
                    </li>
                    </Link>

                    <Link to="/academic">
                    <li className="cursor-pointer hover:-translate-y-1 hover:underline transition duration-500 ease-in-out hover:text-blue-700 dark:hover:text-blue-300">
                    Academic
                    </li>
                    </Link>

                    <Link to="/contact">
                    <li className="cursor-pointer hover:-translate-y-1 hover:underline transition duration-500 ease-in-out hover:text-blue-700 dark:hover:text-blue-300">
                    Contact Me
                    </li>
                    </Link>

                </ul>
            </div>

            {/* <Link to="/contact">
            <div className="bg-white px-4 py-2 sm:px-6 sm:py-2 rounded-full cursor-pointer hover:bg-yellow-200 transition-all duration-500 ease-in-out">   
                <h3 className="font-medium text-sm sm:text-xl">Contact Me</h3> 
            </div>
            </Link> */}

            {/* <div>
                <DarkModeToggle />
            </div> */}
        </div>
    )
}

export default Header;