import React from 'react';
import PledgeForm from '../components/PledgeForm';

function CreatePledge() {
    return (
        <div>
            <div className='form-wrapper'>
                <div className='formpage-inner'>
                    <div className='formpage-container'>
                        <div className='form-wrapper'>
                            <PledgeForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default CreatePledge;