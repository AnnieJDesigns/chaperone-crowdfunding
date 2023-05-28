import React, { useState, useEffect, } from "react";
import { useParams, Link } from "react-router-dom";
import { allProjects } from "../data";
import PledgeForm from "../components/PledgeForm";
import '../pages/css/ProjectPage.css'

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
        <body>
            <div className="project-page">
                <div className='project-page-image'>
                    <img src={projectData.image}></img>
                </div>
                <div className="project-page-container">
                    <div className="project-page-wrapper">
                        <div className="project-page-details">
                            <h2>{projectData.title}</h2>
                            <h3>{`By: ${projectData.owner_projects}`}</h3>
                            <p>{`Description: ${projectData.description}`}</p>
                            <p>{`Goal: $ ${projectData.goal}`}</p>
                            {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
                            <p>{`Date created: ${projectData.date_created}`}</p>
                            <h3>Pledges</h3>
                            <ul> {projectData.pledges.map((pledgeData, key) => {
                                    return ( <li> ${pledgeData.amount} from {pledgeData.supporter}
                                    </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                <div className="project-page-pledgeform">
                    <PledgeForm />  
                </div>
                </div>
        </div>
    </body>
    )
}

export default ProjectPage;