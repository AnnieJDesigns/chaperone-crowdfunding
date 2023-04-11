import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm(){
    const [ credentials, setCredentials ] = useState({
        username: '',
        password: '',
    });

const handleChange = (event) => {
    const { id, value } = event.target;
    setCredentials((prevCredentials) => ({
        ...prevCredentials,
        [id]: value
    }));
};

const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();

    if (credentials.username && credentials.password){
        postData().then((response)=> {
            console.log(response)
            window.localStorage.setItem("token", response.token);
            navigate("/");
        })
    }
}

const postData = async() => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}api-token-auth/`,{
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials)
    })
    return response.json();
}

    return (
        <form>
             <div className='title-form'>
                    <h2>Login</h2>
            </div>
            <div>
                <label htmlFor="username"> Username: </label>
                <input onChange={handleChange} type="text" id="username" placeholder="Enter username"></input> 
            </div>

            <div>
                <label htmlFor="password">Password: </label>
                <input onChange={handleChange} type="text" id="password" placeholder="Password"></input> 
            </div>

            <button className="primary-button" onClick={handleSubmit} type="submit">Login</button>
            

        </form>

    )

}

export default LoginForm;