import { useEffect, useState } from "react";
import "./App.css";

// Create a React component where all the users are fetched using fake fetch and listed on the DOM. Show the online users in green color and the offline users in red color.

export const QuesOne = ({ fetchUsersOne }) => {
    const [userStatus, setUserStatus] = useState([]);
    const getUserStatus = async () => {
        try{
            const response = await fetchUsersOne("https://example.com/api/users/status");
            const {status, data} = response;
            if(status === 200){
                setUserStatus([...data.users]);
            }
        }
        catch(e){
            console.log(e);
        }
    }
    // useEffect(() => {getUserStatus()}, []);
    return (
        <div>
            <h2>Solution 1</h2>
            <div>
                {
                    userStatus.map(({name, status}, index) => <p style={{color: ((status === "Online") ? "green" : "red")}} key={index}>{name} - {status}</p>)
                }
            </div>
            <hr />
        </div>
    );
};
