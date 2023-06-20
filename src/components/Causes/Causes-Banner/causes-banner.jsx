import React from 'react';
import { CausesData } from './data';
import CausesProjectCard from '../Causes-Project-Card/causes-project-card';
import './causes-banner-css.css'

function CausesBanner() {
    return (
        <div className='cause-banner-wrapper'>
            <div className='cause-banner-inner'>
                <div className='cause-banner-container'>
                    <div className='cause-banner-title'>
                        <h4>Support what you are passionate about</h4>
                        <h2>Causes</h2>
                    </div>
                    <div className='causes-banner-map'>
                        {CausesData.map((projectData, key) => {
                            return <CausesProjectCard key = {key} projectData = {projectData} />;
                        })}     
                    </div>
                </div>
            </div>
        </div>  
        
    )
}
export default CausesBanner;