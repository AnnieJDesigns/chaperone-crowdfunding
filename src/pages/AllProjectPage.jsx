import React, {useState, useEffect} from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard";
import '../pages/css/AllProjects.css';

function AllProjectPage() {
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

                <div className="all-projects-wrapper">

                    <div className="all-projects-inner">

                        <div className="all-projects-container">

                            <div className="all-projects-title">
                                <h2>All Projects</h2>
                            </div>
                            <div className='all-projects'>
                                {projectList.map((projectData, key)=> {
                                    return <ProjectCard key={key} projectData={projectData} />;
                                }
                                )}
                            </div>

                        </div>

                    </div>

                </div>
                <div className="space-medium"></div>

            </div>
        )
    }
    
    export default AllProjectPage;
    
