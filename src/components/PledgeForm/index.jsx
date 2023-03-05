import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

function  PledgeForm() {
    const [pledges,setPledge] = useState({
        amount: '',
        comment: '',
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
                console.log(response)
                navigate(`/pledges/${response.id}`);
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
                    <form>
                        <div>
                            <label htmlFor="amount">Amount</label>
                            <input onChange={handleChange} type="text" id="amount" placeholder="enter amount"/>
                        </div>
                        <div>
                            <label htmlFor="comment">Comment</label>
                            <input onChange={handleChange} type="text" id="comment" placeholder="enter comment"/>
                        </div>
                        
                        <button onClick={handleSubmit} type="submit">
                            Submit
                        </button>
                    </form>
                )
            
            }

    export default PledgeForm;