import React, { useEffect, useState } from "react";
import "./App.css";

// Create a React component that fetches a user’s data from an API endpoint using useEffect hook and displays the data (name, image, likes, comments) on the screen using the useState hook. Pass heading (”User Profile”) and width and height for image as props to the component.

export const QuesFour = ({ fetchUserFour }) => {
    
    const [userData, setUserData] = useState({user: {}, showLoading: true});
    const fetchUserDetails = async () => {
        try{
            setUserData(userData => ({...userData, showLoading: true}));
            const response = await fetchUserFour("https://example.com/api/user");
            const {status, data} = response;
            if(status === 200){
                setUserData(userData => ({...userData, user: data}))
            }
        }
        catch(e){
            console.log(e);
        }
        setUserData(userData => ({...userData, showLoading: false}))
    };
    
    // useEffect(() => {fetchUserDetails()}, []);

    return (
        <React.Fragment>
            <h2>Solution 4</h2>
            <p>{userData.showLoading && "loading..."}</p>
            <div style={{display: ((!userData.showLoading) ? "block" : "none"), textAlign: "left"}}>
                <h3>User Profile</h3>
                <img src={userData.user.image} alt="user image" />
                <p>Name: {userData.user.name}</p>
                <p>Likes: {userData.user.likes}</p>
                <p>Comments: {userData.user.comments}</p>
            </div>
            <hr />
        </React.Fragment>
    );
};
