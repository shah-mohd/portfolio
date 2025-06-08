import Header from "./Header";
import ProjectCard from "./ProjectCard";

const Projects = ()=> {

    const projectFoodVilla = {
        name: "Food Villa",
        techUsed: "React, React Router, Redux, TailwindCSS",
        description: "It's a Swiggy clone web app in this web app using a Swiggy API for showing the restaurant and restaurant menu.",
        imageUrl: "./ProjectImages/foodVilla.png",
        githubUrl: "https://github.com/shah-mohd/food-villa",
        projectUrl: null,
    };

    const projectWeather = {
        name: "Weather App",
        techUsed: "React, TailwindCSS",
        description: " Displays the weather forecast of any location across the world with the help of openweather API.",
        imageUrl: "./ProjectImages/weatherDekho.png",
        githubUrl: "https://github.com/shah-mohd/weather-dekho",
        projectUrl: "https://weather-dekho-gamma.vercel.app/",
    };

    return(
        <div>
            <Header/>
            <div>
                {/* project-1 */}
                <div className="sm:flex bg-gray-100 px-4 py-5 mx-5 my-8 rounded-xl">

                    <ProjectCard data={projectFoodVilla}/>
                    <ProjectCard data={projectWeather}/>
                    
                </div>
            </div>
        </div>
    )
}

export default Projects;