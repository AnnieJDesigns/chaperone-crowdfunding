import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../pages/css/Form.css';

function SignUpPage()  {

    const authToken = window.localStorage.getItem("token")


    const [register, setRegister] = useState({
        username: "",
        charity_name:"",
        charity_abn:"",
        email:"",
        password: "",
        about: "",

    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setRegister((prevRegister) => ({
            ...prevRegister,
            [id]: value,}));
        };

        const handleSubmit = async (event) => {
            event.preventDefault();
            {
               postData().then((response) => {
                window.localStorage.setItem("token", response.token);
                console.log(localStorage.getItem('token'))
                navigate("/");
               });
            }
        }

        const postData = async () => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}users/`, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(register),
            });
        
            return await response.json();
        
    }
    return (
        <div>
            <div className='formpage-wrapper'>
                <div className='formpage-inner'>
                    <div className='formpage-container'>
                        <form className='form-wrapper'onSubmit={handleSubmit}>
                        <div className='title-form'>
                            <h2>Sign Up</h2>
                        </div>
                        <div className="username">
                            <label htmlFor="username">Username:</label>
                            <input type="text" onChange={handleChange} id="username" placeholder="Username"/>
                        </div>
                        <div className="charity_name">
                            <label htmlFor="charity_name">Charity Name</label>
                            <input type="text" onChange={handleChange} id="charity name" placeholder="Charity Name"/>
                        </div>
                        <div className="charity_abn">
                            <label htmlFor="charity_abn">Charity ABN</label>
                            <input type="text" onChange={handleChange} id="charity abn" placeholder="Charity ABN"/>
                        </div>
                        <div className="email">
                            <label htmlFor="email">Email:</label>
                            <input type="email" onChange={handleChange} id="email" placeholder="Email"/>
                        </div>
                        <div className="about">
                            <label htmlFor="about">About:</label>
                            <input type="text" onChange={handleChange} id="about" placeholder="About"/>
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password:</label>
                            <input type="password" onChange={handleChange} id="password" placeholder="Password"/>
                        </div>
                        <div className='space-small'></div>
                        <button className="primary-btn" type="submit">Sign up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default SignUpPage;