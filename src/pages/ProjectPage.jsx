import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectPage() {
    const [projectData, setProjectData ] = useState({pledges: []});
    const { id } = useParams();

    useEffect(() => 
        {fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
            })
            .then((data) => {
            setProjectData(data);
            });
    }, []);
console.log(projectData.goal)
    return (
        <div>
            <h2>{projectData.title}</h2>
            <h2>{projectData.owner_projects}</h2>
            <h2>{projectData.description}</h2>
            <h3>${projectData.goal}</h3>
            <h3>{`Status: ${projectData.is_open}`}</h3>
            <img src={projectData.image}></img>
            <h3>
                {projectData.pledges.map((pledgeData, key) => {
                    return <li key={key}>{pledgeData.amount}</li>
                })}
            </h3>
           
        </div>
    )
}

export default ProjectPage;