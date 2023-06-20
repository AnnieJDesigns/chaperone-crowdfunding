import React from 'react';
import './causes.css'

function CausesProjectCard(props) {
    const {projectData} = props;
    return (
        <div className='causes-project-card'>

            <div className='causes-project-card-inner'>
                <img className='cause-image' src={projectData.image}/>
                <h5>{projectData.cause}</h5>
            </div>
          
        </div>  
        
    )
}
export default CausesProjectCard;