import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

function ProjectForm() {
    const [ project, setProject ] = useState({
        title: '',
        description: '',
        is_open: true,
        goal: '',
        image: '',
        cause: '',
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setProject((prevProjects) => ({
            ...prevProjects,
            [id]: value
        }));
    };
    
    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (project.title && project.description){
            postData().then((response)=> {
                console.log(response)
                navigate(`/project/${response.id}`);
            })
        }
    }
    
    const postData = async() => {
        const token = window.localStorage.getItem("token")

        console.log(token);

        const response = await fetch(`${import.meta.env.VITE_API_URL}projects/`,
        {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "authorization": `token ${token}`
            },
            body: JSON.stringify(project)
        })
       
        return response.json();
    }
    

    
        return (
            <form>
                <div>
                    <label htmlFor="title">Title</label>
                    <input onChange={handleChange} type="text" id="title" placeholder="enter title"/>
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input onChange={handleChange} type="text" id="description" placeholder="enter description"/>
                </div>
                <div>
                    <label htmlFor="goal">Goal</label>
                    <input onChange={handleChange} type="text" id="goal" placeholder="enter goal"/>
                </div>
                <div>
                    <label htmlFor="image">Image</label>
                    <input onChange={handleChange} type="url" id="image" placeholder="enter image"/>
                </div>
                <div>
                    <label>
                        Select a cause:
                    <select value={project.cause} onChange={handleChange} id="cause">
                        <option value="climate change">Climate Change</option>
                        <option value="mental health">Mental Health</option>
                        <option value="animal rights">Animal Rights</option>
                    </select>
                    </label>
                </div>
                
                <button onClick={handleSubmit} type="submit">
                    Submit
                </button>
            </form>
        );
    

}


    
export default ProjectForm;