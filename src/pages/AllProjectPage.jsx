import React, {useState, useEffect} from "react";
import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard";

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
                <h2>All Projects</h2>
                <div className='all-projects'>
                    {projectList.map((projectData, key)=> {
                        return <ProjectCard key={key} projectData={projectData} />;
                    }
                    )}
                </div>
            </div>
        )
    }
    
    export default AllProjectPage;
    
