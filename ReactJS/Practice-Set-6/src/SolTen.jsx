import React, { useEffect, useState } from "react";
import "./App.css";

export const SolTen = ({ fetchTen }) => {
    const [user, setUser] = useState({ loading: true, showUser: {} });
    const getProfile = async () => {
        try {
            const response = await fetchTen("https://example.com/api/profile");
            const { status, data } = response;
            if (status === 200) {
                console.log(data);
                setUser((user) => ({
                    ...user,
                    loading: false,
                    showUser: data.profile,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };
    const increaseFollowers = (e) => {
        const increasedCount = (user.showUser.followers += 1);
        setUser((user) => ({
            ...user,
            [user.showUser.followers]: increasedCount,
        }));
        e.target.disabled = true;
    };
    useEffect(() => {
        getProfile();
    }, []);
    console.log(user.showUser);
    return (
        <React.Fragment>
            <h2>Solution 10</h2>
            <h3>{user.loading && "Loading..."}</h3>
            <div style={{ textAlign: "left" }}>
                <h3>{user.showUser.name}</h3>
                <p>
                    <strong>Age: </strong>
                    {user.showUser.age}
                </p>
                <p>
                    <strong>Gender: </strong>
                    {user.showUser.gender}
                </p>
                <p>
                    <strong>Email: </strong>
                    {user.showUser.email}
                </p>
                <p>
                    <strong>Occupation: </strong>
                    {user.showUser.occupation}
                </p>
                <p>
                    <strong>Followers: </strong>
                    {user.showUser.followers}
                </p>
                <p>
                    <strong>Followed By: </strong>
                    {user.showUser.followedBy}
                </p>
                <button onClick={(e) => increaseFollowers(e)}>
                    Follow {user.showUser.name}
                </button>
            </div>
            <hr />
        </React.Fragment>
    );
};
