import React from 'react';
import {Link} from 'react-router-dom';
import './ProjectCard.css';
import PledgeForm from '../PledgeForm';


function ProjectCard(props) {
    const {projectData} = props;
    
    return (
    
        <div className="project-card">

            <div>
            <Link to={`/projects/${projectData.id}/`}>

                <div className="project-image-container">
                    <img id="project-display-image" src={projectData.image}></img>
                </div>
            </Link>
            </div>

            <div>

                <div className="project-text">
                    <h3>{projectData.title}</h3>
                    <p>{projectData.description}</p>
                    <h6 className='by'>by {projectData.charity_name}</h6>
                    <h6>{projectData.cause}</h6>
            </div>

        </div>

        </div>

    )
}

export default ProjectCard;