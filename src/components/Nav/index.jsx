import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import StyledLink from '../Link/StyledLink';
import {Link} from 'react-router-dom'
import './nav.css';



function Nav() {

    const isLogIn = window.localStorage.getItem("token") !== null;
    const navigate = useNavigate();


const onLogOut = () => {
    localStorage.clear();
    navigate('/');
}



    return (
        <div className='nav-bar-1'>
            <nav>
                <div className='nav-bar'>
                    <div className='nav-bar-container'>
                        <div className='nav-bar-logo'>
                                <h5>Chaperone</h5>
                        </div>
                        <div className='nav-bar-main'>
                            <div>
                                <StyledLink ToURL="/" TitleLink = 'Home'/>
                            </div>
                            <div>
                                <StyledLink ToURL="/projects" TitleLink = 'All Projects'/>
                            </div>
                            <div>
                                {isLogIn && <StyledLink ToURL="/createproject" TitleLink = 'Create Project'/>}
                            </div>
                        </div>
                        <div className='nav-bar'>
                            <div>
                            {isLogIn && <StyledLink ToURL="/" TitleLink ='Log out' Action={onLogOut}/>}
                                {/* {isLogIn && <Link onClick ={onLogOut} to="/">Log out</Link>} */}
                            </div>
                            <div>
                                <StyledLink ToURL="/login" TitleLink = 'Login'/>
                            </div>
                            <div>
                                {!isLogIn && <StyledLink ToURL="/signup" TitleLink = 'Sign Up'/>}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
    

};
export default Nav;