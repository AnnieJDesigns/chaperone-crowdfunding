import React, {useState, useEffect} from "react";
import { allProjects } from "../data";
import ProjectPage from "./ProjectPage";
import ProjectCard from "../components/ProjectCard";


function HomePage() {
const [projectList, setProjectList] = useState([]);

useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        setProjectList(data);
    });
}, []);

    return (
        <div>
            {projectList.map((projectData, key)=> {
                return <ProjectCard key={key} projectData={projectData} />;
            }
            )}
        </div>
    )
}

export default HomePage;