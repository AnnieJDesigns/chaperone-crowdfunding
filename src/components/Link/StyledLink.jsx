import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'


function StyledLink(props) {
    const {ToURL, TitleLink, Action} = props
    return (
        <Link className="links" to={ToURL} onClick={Action}>{TitleLink}</Link>
    )
}
export default StyledLink