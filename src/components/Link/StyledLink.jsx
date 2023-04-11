import React from 'react';
import {Link} from 'react-router-dom';
import './index.css'


function StyledLink(props) {
    const {ToURL, TitleLink} = props
    return (
        <Link className="links" to={ToURL}>{TitleLink}</Link>
    )
}
export default StyledLink