import React, { useState, useEffect, } from "react";
import { useParams, Link } from "react-router-dom";
import { allProjects } from "../data";
import PledgeForm from "../components/PledgeForm";
import '../pages/css/ProjectPage.css';
import { useNavigate } from 'react-router-dom';

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
            <div className="project-page-wrapper">
            <div><h2>{projectData.title}</h2></div>
            <div className="project-page-inner">
            <div className="project-page-container">
                <div className="project-page-col-1">                     
                            <div className='project-page-image'>
                                <img src={projectData.image}></img>
                            </div>

                            <div className="project-page-detail-container">
                                <div className="project-page-detail-wrapper">
                                    <div className="project-page-detail-details">
                                    <p>{`Description: ${projectData.description}`}</p>
                                    <h3>{`By: ${projectData.owner_projects}`}</h3>
                                    </div>
                                    <div>
                                <h3>Words of Support</h3>
                            </div>
                                </div>
                </div>
            </div>

                        <div className="project-page-col-2">
                            <div className="project-page-title">
                            <h2>{`Goal: $ ${projectData.goal}`}</h2>
                            <button className="project-page-primary-btn">Donate now</button>
                            <div className="space-small"></div>
                            </div>
                            <h3>Pledges</h3>
                                    <ul> {projectData.pledges.map((pledgeData, key) => {
                                            return ( <li> ${pledgeData.amount} from {pledgeData.supporter}
                                            </li>
                                            );
                                        })}
                                    </ul>   

                        </div>
            </div>
            </div>
            </div>

        </div>
   
    )
                        };

export default ProjectPage;