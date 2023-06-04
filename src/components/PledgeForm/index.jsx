import React, {useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';

function  PledgeForm() {
    const { id } = useParams();
    const [pledges,setPledge] = useState({
        project: id,
        amount: '',
        comment: '',
        anonymous: false,
    });

    const handleChange = (event) => {
        const { id, value } = event.target;
        setPledge((prevPledge) => ({
            ...prevPledge,
            [id]: value,
        }));
    };
    
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        //get auth token from local storage
        const authToken = window.localStorage.getItem("token")

        if (authToken) {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}pledges/`,
                
                    {
                        method: "post",
                        headers: {
                            "Content-type": "application/json",
                            Authorization: `Token ${authToken}`,
                        },
                        body: JSON.stringify({project:id,...pledges}),
                    }
                );
                if (!response.ok) {
                    throw new Error(await response.text());
                }
                location.reload();
            } catch (err) {

                alert(`Error: ${err.message}`);
              }
            } else {
              //REDIRECT TO LOGIN PAGE
              navigate(`/login`);
            }
        };     
   




    // const postData = async() => {
    //     const token = window.localStorage.getItem("token")

    //     console.log(token);

    //     const response = await fetch(`${import.meta.env.VITE_API_URL}pledges/`,
    //     {
    //         method: "post",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "authorization": `token ${token}`
    //         },
    //         body: JSON.stringify(pledges)
    //     })
       
    //     return response.json();
    // }

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
                        <button className="primary-button" onClick={handleSubmit} type="submit">
                            Submit
                        </button>
                    </form>
                )
            
                }

    export default PledgeForm;