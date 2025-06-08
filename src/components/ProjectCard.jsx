import { Link } from "react-router-dom";
const ProjectCard = ({data}) => {
    const {name, description, imageUrl, techUsed, githubUrl, projectUrl} = data;
    return(
        <div className="max-w-sm mx-auto mt-10 sm:mt-0 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow ">

            <div className="">
                <Link to={projectUrl} target="_blank">
                <img
                src={imageUrl}
                className="w-full h-48 object-cover rounded-xl"
                />
                </Link>
            </div>

            <div className="mt-4">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{name}</h1>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-300 mt-2">Technology used: {techUsed}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300 ">{description}</p>
                <Link to={githubUrl} target="_blank">
                <button className="mt-4 text-gray-600 bg-gray-300 px-4 py-1 rounded-lg hover:bg-gray-200 transition">Github Link</button>
                </Link>
            </div>
        </div>
    )
}

export default ProjectCard;