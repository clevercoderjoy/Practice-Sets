import React, { useEffect, useState } from "react";
import "./App.css";

// Create a React component that fetches users data from an API endpoint using useEffect hook and display users data (name, image, likes, comments) as a list on the screen using the useState hook.
// a. Show “Loading…” until your data displays on the DOM.
// b. Handle errors by showing an error message on the DOM, in case of any error.

export const QuesFive = ({ fetchUsersFive }) => {
    const [userData, setUserData] = useState({
        users: [],
        showLoading: false,
        showError: true,
        errorMsg: "",
    });

    const getUsersData = async () => {
        try {
            setUserData((userData) => ({ ...userData, showLoading: true }));
            const response = await fetchUsersFive(
                "https://example.com/api/users"
            );
            const { status, data } = response;
            if (status === 200) {
                setUserData((userData) => ({
                    ...userData,
                    users: data,
                    showError: false,
                }));
            }
        } catch (e) {
            setUserData((userData) => ({
                ...userData,
                showError: true,
                errorMsg: e.message,
            }));
        }
        setUserData((userData) => ({ ...userData, showLoading: false }));
    };
    useEffect(() => {
        // getUsersData();
    }, []);

    return (
        <React.Fragment>
            <h2>Solution 5</h2>
            <p>{userData.showLoading && "loading..."}</p>
            <p style={{ display: userData.showError ? "block" : "none" }}>
                {userData.errorMsg}
            </p>
            <div
                style={{
                    textAlign: "left",
                    display: userData.showError === false ? "block" : "none",
                }}
            >
                <h3>User Feed</h3>
                {userData.users.map(
                    ({ name, image, likes, comments }, index) => (
                        <div key={index}>
                            <img
                                src={image}
                                alt="user image"
                                width="200px"
                                height="200px"
                            />
                            <p>{name}</p>
                            <p>Likes: {likes}</p>
                            <p>Comments: {comments}</p>
                        </div>
                    )
                )}
            </div>
            <hr />
        </React.Fragment>
    );
};
