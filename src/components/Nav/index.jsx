import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './nav.css';
import StyledLink from '../Link/StyledLink';
import {Link} from 'react-router-dom'



function Nav() {

    const isLogIn = window.localStorage.getItem("token") !== null;
    const navigate = useNavigate();


const onLogOut = () => {
    localStorage.clear();
    navigate('/');
}



    return (
        <div>
            <nav>
                <div className="logo">
                <h2>Chaperone</h2>
                </div>
                <div className="links">  
                <StyledLink ToURL="/" TitleLink = 'Home'/>
                <StyledLink ToURL="/projects" TitleLink = 'Project'/>
                {isLogIn && <StyledLink ToURL="/createproject" TitleLink = 'Create Project'/>}
                {isLogIn && <Link onClick ={onLogOut} to="/">Log out</Link>}
                {!isLogIn && <StyledLink ToURL="/login" TitleLink = 'Login'/>}
                {!isLogIn && <StyledLink ToURL="/signup" TitleLink = 'Sign Up'/>}
                </div>
            </nav>
        </div>
        )
    

};
export default Nav;