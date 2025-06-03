import Header from "./Header";
import ProjectCard from "./ProjectCard";

const Projects = ()=> {

    return(
        <div>
            <Header/>
            <div>
                {/* project-1 */}
                <div className="sm:flex bg-gray-100 px-4 py-5 mx-5 my-8 rounded-xl">

                    <ProjectCard />
                    <ProjectCard />
                    
                </div>
            </div>
        </div>
    )
}

export default Projects;