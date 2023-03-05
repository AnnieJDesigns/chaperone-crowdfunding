import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/project">Project</Link>
            <Link to="/createproject">Create Project</Link>
            <Link to="/login">Login</Link>
            <Link to="/createpledge">Create Pledge </Link>
        </nav>
    )
}
export default Nav