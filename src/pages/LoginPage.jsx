import React from 'react'
import LoginForm from '../components/LoginForm';
import '../pages/css/Form.css';

function LoginPage() {
    return ( 
        <div>
            <div className='formpage-wrapper'>
                <div className='formpage-inner'>
                    <div className='formpage-container'>
                        <div className='form-wrapper'><LoginForm /></div>
                    </div>
                </div>
            </div>
        </div>
     )
};

export default LoginPage;