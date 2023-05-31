import React, { useState, useEffect, } from "react";
import { useParams, Link } from "react-router-dom";
import { allProjects } from "../data";
import PledgeForm from "../components/PledgeForm";
import '../pages/css/ProjectPage.css';
import { useNavigate } from 'react-router-dom';

function ProjectPage() {
    const [projectData, setProjectData ] = useState({pledges: []});
    const { id } = useParams();

    useEffect(() => 
        {fetch(`${import.meta.env.VITE_API_URL}projects/${id}`)
        .then((results) => {
            return results.json();
            })
            .then((data) => {
            setProjectData(data);
            });
    }, []);

    const [pledges,setPledge] = useState({
        amount: '',
        comment: '',
        anonymous: false,
        project_id: '',
        id: ''
    });

const handleChange = (event) => {
    const { id, value } = event.target;
    setPledge((prevPledge) => ({
        ...prevPledge,
        [id]: value
    }));
};

const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();

    if (pledges.amount){
        postData().then((response)=> {
            navigate(`/`);
        })
    }
}




const postData = async() => {
    const token = window.localStorage.getItem("token")

    console.log(token);

    const response = await fetch(`${import.meta.env.VITE_API_URL}pledges/`,
    {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "authorization": `token ${token}`
        },
        body: JSON.stringify(pledges)
    })
   
    return response.json();
}

    return (
        <body>
            <div className="project-page">
                <div className='project-page-image'>
                    <img src={projectData.image}></img>
                </div>
                <div className="project-page-container">
                    <div className="project-page-wrapper">
                        <div className="project-page-details">
                        <h2>{projectData.title}</h2>
                        <h3>{`By: ${projectData.owner_projects}`}</h3>
                        <p>{`Description: ${projectData.description}`}</p>
                        <p>{`Goal: $ ${projectData.goal}`}</p>
                        {/* <h3>{`Status: ${projectData.is_open}`}</h3> */}
                        <p>{`Date created: ${projectData.date_created}`}</p>
                        <h3>Pledges</h3>
                        <ul> {projectData.pledges.map((pledgeData, key) => {
                                return ( <li> ${pledgeData.amount} from {pledgeData.supporter}
                                </li>
                                );
                            })}
                        </ul>
                    </div>
                    </div>
                <div className="project-page-pledgeform">
                <form>
                         <div className='title-form'>
                            <h2>Make a Pledge</h2>
                        </div>
                        <div>
                            <label htmlFor="amount">Amount</label>
                            <input onChange={handleChange} type="text" id="amount" placeholder="enter amount"/>
                        </div>
                        <div>
                            <label htmlFor="comment">Comment</label>
                            <input onChange={handleChange} type="text" id="comment" placeholder="enter comment"/>
                        </div>
                        <div>
                            <label htmlFor="project">Project ID</label>
                            <input onChange={handleChange} type="number" id="project" placeholder="what project would you like to support"/>
                        </div>
                        
                        <button className="primary-button" onClick={handleSubmit} type="submit">
                            Submit
                        </button>
                    </form>
 
                </div>
                </div>
        </div>
    </body>
    )
                        };

export default ProjectPage;