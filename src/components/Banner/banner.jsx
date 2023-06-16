import React from 'react';
import './banner.css';



function Banner() {
    return (
        <div className='container'>
            <div classname='hero'>
                <div className="hero-wrapper">
                    <div>
                        <img className="banner-image" src="images/Asset 5.png"></img>
                    </div>
                    <div className="banner-tagline">
                        <div className='tagline'>
                            <h3>Small Projects, <br></br>
                                    Big Change
                                </h3>
                        </div>
                        <div>
                            <button className='banner-btn'><h5>See all projects</h5></button>
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