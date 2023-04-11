import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function SignUpPage()  {
    const [register, setRegister] = useState({
        username: "",
        charity_name:"",
        charity_abn:"",
        email:"",
        password: "",

    });

    const handleChange = (event) => {
        const {id, value} = event.target;
        setRegister((prevRegister)=> ({
            ...prevRegister,
            [id]: value
        }));
    };

    const navigate = useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if (register.username && register.charity_name) {
            postData().then((response)=> {
                navigate('/login/')
            })
        }
    };

    const postData = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(register),
        })
        return response.json();
    };

    return (
           <div className='form-wrapper'>
            <form >
                <div className='title-form'>
                    <h1>Sign Up</h1>
                </div>
                <div className="username">
                    <label htmlFor="username">Username:</label>
                    <input type="text" onChange={handleChange} id="username" placeholder="Username"/>
                </div>
                <div className="charity_name">
                    <label htmlFor="charity_name">Charity Name</label>
                    <input type="text" onChange={handleChange} id="charity name" placeholder="Charity Name"/>
                </div>
                <div className="email">
                    <label htmlFor="email">Email:</label>
                    <input type="email" onChange={handleChange} id="email" placeholder="email"/>
                </div>
                <div className="password">
                    <label htmlFor="password">Password:</label>
                    <input type="password" onChange={handleChange} id="password" placeholder="password"/>
                </div>
                <button className="primary-button"  onClick={handleSubmit} type="submit">Sign up</button>
                </form>
            </div> 
    )

}

export default SignUpPage;