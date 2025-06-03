import DarkModeToggle from "./DarkModeToggle";

const ProjectCard = () => {
    return(
        <div className="max-w-sm mx-auto mt-10 sm:mt-0 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow ">

            <div className="">
                <img
                src="./foodAppImages/ss01.png"
                className="w-full h-48 object-cover rounded-xl"
                />


            </div>

            <div className="mt-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Project Name</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ea.</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Learn More</button>

            </div>

            {/* <DarkModeToggle /> */}
        </div>
    )
}

export default ProjectCard;