import React, { useState, useEffect, } from "react";
import { useParams, Link } from "react-router-dom";
import { allProjects } from "../data";

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


    return (
        <div>
            <img src={projectData.image}></img>
            <h2>{projectData.title}</h2>
            <h3>{`By: ${projectData.owner_projects}`}</h3>
            <p>{`Description: ${projectData.description}`}</p>
            <p>{`Goal: $ ${projectData.goal}`}</p>
            {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
            <p>{`Date created: ${projectData.date_created}`}</p>
            <p> {`Pledges so far:
                ${projectData.pledges.map((pledgeData, key) => {
                    return <li key={key}>{pledgeData.amount}</li>
                })}`}
            </p>
            <Link to="/createpledge"><p>Make a Pledge</p></Link>
           
        </div>
    )
}

export default ProjectPage;