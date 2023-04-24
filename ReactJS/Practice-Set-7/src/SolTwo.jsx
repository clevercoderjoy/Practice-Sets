import React, { useEffect, useState } from "react";
import "./App.css";

export const SolTwo = ({ fetchTwo }) => {
    const [userData, setUserData] = useState({
        loading: true,
        showDetails: false,
        userDetails: {},
        buttonText: "Show Address",
        userAddress: {},
    });
    const getUser = async () => {
        try {
            const response = await fetchTwo("https://example.com/api/user");
            const { status, data } = response;
            if (status === 200) {
                setUserData((userData) => ({
                    ...userData,
                    loading: false,
                    userDetails: data,
                    userAddress: data.address,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };
    const toggleInfo = (e) => {
        setUserData((userData) => ({
            ...userData,
            showDetails: !userData.showDetails,
        }));
        if (!userData.showDetails) {
            e.target.textContent = "Hide Address";
        } else {
            e.target.textContent = "Show Address";
        }
    };
    useEffect(() => {
        // getUser();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 2</h2>
            <h3>{userData.loading && "Loading..."}</h3>
            <div style={{ display: userData.loading ? "none" : "block" }}>
                <h3>User</h3>
                <p>Name: {userData.userDetails.name}</p>
                <p>Email: {userData.userDetails.email}</p>
                <p>Phone: {userData.userDetails.phone}</p>
                <button onClick={(e) => toggleInfo(e)}>
                    {userData.buttonText}
                </button>
                <div
                    style={{ display: userData.showDetails ? "block" : "none" }}
                >
                    <p>{userData.userAddress.phone}</p>
                    <p>{userData.userAddress.suite}</p>
                    <p>{userData.userAddress.city}</p>
                    <p>{userData.userAddress.zipcode}</p>
                </div>
            </div>
            <hr />
        </React.Fragment>
    );
};
