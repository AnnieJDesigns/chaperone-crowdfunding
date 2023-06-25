import React, {useState} from 'react';
import { useNavigate, useOutletContext } from 'react-router-dom';
import '../../pages/css/Form.css';

function LoginForm() {

    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setCredentials((prevCredentials) => ({
            ...prevCredentials,
            [id]: value,
        }));
    };

    const postData = async () => {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}api-token-auth/`,
            {
                method: "post",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            }
        );
        return response.json();
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        if (credentials.username && credentials.password) {
            const { token } = await postData();
            if(token !== undefined) {
                window.localStorage.setItem("token", token);
                navigate("/");

            } else {
                const response = await postData();
                alert(JSON.stringify(response));
            }
        }
    };

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
                <label htmlFor="email"> Email: </label>
                <input onChange={handleChange} type="text" id="email" placeholder="Enter email"></input> 
            </div>

            <div>
                <label htmlFor="password">Password: </label>
                <input onChange={handleChange} type="text" id="password" placeholder="Password"></input> 
            </div>
            <div className='space-small'></div>

            <button className="primary-btn" onClick={handleSubmit} type="submit">Login</button>
            

        </form>

    )

}

export default LoginForm;