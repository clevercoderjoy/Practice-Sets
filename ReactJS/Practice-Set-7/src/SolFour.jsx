import React, { useEffect, useState } from "react";
import "./App.css";

export const SolFour = ({ fetchFour }) => {
    const [users, setUsers] = useState({
        loading: true,
        usersToShow: [],
        allUsers: [],
    });
    const getUsers = async () => {
        try {
            const response = await fetchFour("https://example.com/api/users");
            const { status, data } = response;
            if (status === 200) {
                setUsers((users) => ({
                    ...users,
                    loading: false,
                    allUsers: data,
                    usersToShow: data,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };

    const filterCompanies = (e) => {
        const currentSelect = e.target.value;
        if (currentSelect === "all") {
            users.usersToShow = users.allUsers;
        } else {
            const filteredCompany = users.allUsers.filter(
                ({ company }) => company === currentSelect
            );
            setUsers((users) => ({ ...users, usersToShow: filteredCompany }));
        }
    };

    useEffect(() => {
        // getUsers();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 4</h2>
            <h3>{users.loading && "Loading..."}</h3>
            <div style={{ display: users.loading ? "none" : "block" }}>
                <select name="user" onChange={(e) => filterCompanies(e)}>
                    <option value="all">All</option>
                    <option value="ABC Inc">ABC Inc</option>
                    <option value="XYZ Corp">XYZ Corp</option>
                    <option value="ACME Corp">ACME Corp</option>
                </select>
                <ul>
                    {users.usersToShow.map(
                        ({ name, email, website, company }, index) => (
                            <li key={index}>
                                <p>{name}</p>
                                <p>{email}</p>
                                <p>{website}</p>
                                <p>{company}</p>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <hr />
        </React.Fragment>
    );
};
