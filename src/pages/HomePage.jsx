import React, {useState, useEffect} from "react";
import { allProjects } from "../data";
import ProjectPage from "./ProjectPage";
import ProjectCard from "../components/ProjectCard";
import Banner from "../components/Banner/banner";
import './HomePage.css'
import StyledLink from "../components/Link/StyledLink";
import CausesBanner from "../components/Causes/Causes-Banner/causes-banner";




function HomePage() {
const [projectList, setProjectList] = useState([]);



useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}projects`)
    .then((results) => {
        return results.json();
    })
    .then((data) => {
        const recentProjects = data
        .sort((a,b) => new Date(b.date_created) - new Date(a.date_created))
        .slice(0,3);
        setProjectList(recentProjects);
    });
}, []);


    return (
        
        <div>
            <section>
            <div>
            <Banner/>
            </div>
            <div className="space-medium"></div>
            <div className="what-can-I-expect-wrapper">
                <div className="what-can-I-expect-inner">
                    <div className='what-can-I-expect'>

                                    {/* TAGLINE */}
                                    <div className = 'tagline'>
                                        <h4>I am a charity, what can I expect?</h4>
                                        <h2>Fundraising on Chaperone is easy</h2>
                                    </div>

                                    <div className="instructions-wrapper">
                                        <div className="instructions-inner">
                                            <div className="instructions-container">


                                   {/* STEPS */}
                                    <div className='step-wrapper' >
                                        <div className='step'>
                                            <div className='step-number'>1</div>
                                        </div>
                                        <div className='step-instructions'>
                                            <h5>Fill out the form</h5>
                                            <h6>Start by filling out the basics</h6>
                                        </div>
                                    </div>
                                    <div className='step-wrapper'>
                                        <div className='step'>
                                            <div className='step-number'>2</div>
                                        </div>
                                        <div className='step-instructions'>
                                            <h5>Tell them your story</h5>
                                            <h6>Let them know your why</h6>
                                        </div>
                                    </div>
                                    <div className='step-wrapper'>
                                        <div className='step'>
                                            <div className='step-number'>3</div>
                                        </div>
                                        <div className='step-instructions'>
                                            <h5>Share your project</h5>
                                            <h6>Spread the word with your network</h6>
                                        </div>
                                    </div>
                                    {/* END OF STEPS */}

                                            </div>

                                        </div>

                                    </div>
                    </div>
                </div>
            </div>

            <div className="space-medium"></div>
            <div className="divider"></div>
            <div className="space-medium"></div>

            {/* Causes Component */}

            <CausesBanner/>


            {/* End of Causes Component */}
            
            <div className="space-medium"></div>
            <div className="divider"></div>
            <div className="space-medium"></div>

                <div>
                    <div className = "project-wrapper">
                        <div className = "project-inner">
                            <div className = "project-container">
                                <div className = "project">
                                        <h2>Latest Projects</h2>
                                        <StyledLink ToURL="/projects" TitleLink = 'Explore Projects >'/>
                                    </div>
                                <div className ="project-carousel">
                                    {projectList.map((projectData, key)=> {
                                        return <ProjectCard key={key} projectData={projectData} />;
                                    }
                )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage;