import React from 'react';
import ProjectForm from '../components/ProjectForm';
import '../pages/css/Form.css';

function CreateProject() {
    return (
        <div>
            <div className='formpage-wrapper'>
                <div className='formpage-inner'>
                <div className='formpage-container'>
                        <div className='form-wrapper'>
                            <ProjectForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateProject;