import React, {useState, useEffect} from "react";
import { allProjects } from "../data";
import ProjectPage from "./ProjectPage";
import ProjectCard from "../components/ProjectCard";
import Banner from "../components/Banner/banner";
import './HomePage.css'



function HomePage() {
const [projectList, setProjectList] = useState([]);



useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        const recentProjects = data
        .sort((a,b) => new Date(b.date_created) - new Date(a.date_created))
        .slice(0,3);
        setProjectList(recentProjects);
    });
}, []);


    return (
        
        <div>
            <section>
            <div>
            <Banner/>
            </div>
                <div className = 'tagline'>
                        <h1>Fundrasing for charity projects</h1>
                </div>
                <div>
                    <div className = "project-wrapper">
                        <div className = "container">
                            <div className = "project">
                                    <h2>Latest Projects</h2>
                                    <button className="secondary-button">Explore Projects</button>
                                </div>
                            <div className ="project-carousel">
                                {projectList.map((projectData, key)=> {
                                    return <ProjectCard key={key} projectData={projectData} />;
                                }
            )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;