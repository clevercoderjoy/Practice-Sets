import React, { useEffect, useState } from "react";
import "./App.css";

export const SolEight = ({ fetchEight }) => {
    const [user, setUser] = useState({
        loading: true,
        userProfile: {},
        showInput: false,
        newName: "",
    });
    const getUsers = async () => {
        try {
            const response = await fetchEight(
                "https://example.com/api/profile"
            );
            const { status, data } = response;
            if (status === 200) {
                setUser((user) => ({
                    ...user,
                    loading: false,
                    userProfile: data.profiles,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };
    const updateName = () => {
        setUser((user) => ({ ...user, showInput: true }));
    };
    const setInput = (e) => {
        const newName = e.target.value;
        user.userProfile.name = newName;
        setUser((user) => ({ ...user, [user.userProfile.name]: newName }));
    };
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            setUser((user) => ({ ...user, showInput: false }));
        }
    };
    useEffect(() => {
        // getUsers();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 8</h2>
            <h3>{user.loading && "Loading..."}</h3>
            <div
                style={{
                    textAlign: "left",
                    display: user.loading ? "none" : "block",
                }}
            >
                <p>
                    <strong>Name: </strong>
                    {user.userProfile.name}
                    <input
                        onChange={(e) => setInput(e)}
                        onKeyDown={(e) => handleEnter(e)}
                        type="text"
                        style={{ display: user.showInput ? "block" : "none" }}
                    />
                </p>
                <p>
                    <strong>Email: </strong>
                    {user.userProfile.email}
                </p>
                <p>
                    <strong>Age: </strong>
                    {user.userProfile.age}
                </p>
                <p>
                    <strong>Gender: </strong>
                    {user.userProfile.gender}
                </p>
                <p>
                    <strong>Occupation: </strong>
                    {user.userProfile.occupation}
                </p>
                <button onClick={() => updateName()}>Update Name</button>
            </div>
            <hr />
        </React.Fragment>
    );
};
