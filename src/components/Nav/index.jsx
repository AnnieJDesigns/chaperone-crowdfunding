import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './nav.css';
import StyledLink from '../Link/StyledLink';

function Nav() {


    return (
    <div>
        <nav>
            <div className="logo">
            <h2>Chaperone</h2>
            </div>
            <div className="links">  
            <StyledLink ToURL="/" TitleLink = 'Home'/>
            <StyledLink ToURL="/projects" TitleLink = 'Project'/>
            <StyledLink ToURL="/createproject" TitleLink = 'Create Project'/>
            {/* <StyledLink ToURL="/createpledge" TitleLink = 'Create Pledge'/> */}
            <StyledLink ToURL="/login" TitleLink = 'Login'/>
            <StyledLink ToURL="/signup" TitleLink = 'Sign Up'/>
            </div>
        </nav>
    </div>
    )

}
export default Nav