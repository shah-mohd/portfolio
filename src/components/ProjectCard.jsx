import DarkModeToggle from "./DarkModeToggle";

const ProjectCard = ({data}) => {
    const {name, description, imageUrl, techUsed} = data;
    // console.log(name+ " "+ description);
    return(
        <div className="max-w-sm mx-auto mt-10 sm:mt-0 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow ">

            <div className="">
                <img
                src={imageUrl}
                className="w-full h-48 object-cover rounded-xl"
                />


            </div>

            <div className="mt-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h1>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mt-2">Technology used: {techUsed}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 ">{description}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Learn More</button>

            </div>
        </div>
    )
}

export default ProjectCard;