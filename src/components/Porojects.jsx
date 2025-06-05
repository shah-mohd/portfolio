import Header from "./Header";
import ProjectCard from "./ProjectCard";

const Projects = ()=> {

    const projectFoodVilla = {
        name: "Food Villa",
        techUsed: "React, React Router, Redux, TailwindCSS",
        description: "Its a clone of swiggy with using swiggy API",
        imageUrl: "./ProjectImages/foodVilla.png",
    };

    const projectWeather = {
        name: "Weather App",
        description: "Its a weather app",
        imageUrl: "./ProjectImages/weather02.png"
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