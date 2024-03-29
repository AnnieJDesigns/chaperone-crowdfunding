import React from 'react';
import './banner.css';
import {Link} from 'react-router-dom';



function Banner() {
    return (
        <div className='container'>
            <div classname='hero'>
                <div className="hero-wrapper">
                    <div>
                        <img className="banner-image" id='min-width-image'src="images/Asset 5.png"></img>
                    </div>
                    <div className="banner-tagline">
                        <div className='tagline'>
                            <h3>Small Projects, <br></br>
                                    Big Change
                                </h3>
                        </div>
                        <div>
                        <h5>Fundraising for charity projects</h5>
                        </div>
                        <div>
                            <Link to='/projects'>
                            <button className='banner-btn' onClick='/projects'>See all projects</button>
                            </Link>
                        </div>
                </div>
                    <div>
                        <img className="banner-image" src="images/Asset 6.png"></img> 
                    </div>    
                </div>
            </div> 
        </div>  
        
    )
}
export default Banner