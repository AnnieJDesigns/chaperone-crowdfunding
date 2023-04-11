import React from 'react';
import {Link} from 'react-router-dom';
import './ProjectCard.css';
import PledgeForm from '../PledgeForm';


function ProjectCard(props) {
    const {projectData} = props;
    
    return (
    
        <div className="project-card">
            <Link to={`/projects/${projectData.id}`}>
                <div className="project-image-container">
                    <img id="project-display-image" src={projectData.image}></img>
                </div>
                <div className="project-text">
                    <h3>{projectData.title}</h3>
                    <p>{projectData.description}</p>
                    <p>by {projectData.charity_name}</p>
                    <p>{projectData.cause}</p>
                </div>
        
            </Link>
            <div>
                
            </div>
        </div>

    )
}

export default ProjectCard;