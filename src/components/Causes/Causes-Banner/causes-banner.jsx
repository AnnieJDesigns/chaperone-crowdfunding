import React from 'react';
import { CausesData } from './data';
import CausesProjectCard from '../Causes-Project-Card/causes-project-card';

function CausesBanner() {
    return (
        <div>
        {CausesData.map((projectData, key) => {
            return <CausesProjectCard key = {key} projectData = {projectData} />;
        })}   
        </div>  
        
    )
}
export default CausesBanner