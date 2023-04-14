import React, { useEffect, useState } from "react";
import "./App.css";

// Create a React component that fetches chat data from an API endpoint using useEffect hook and display chat data (name and chat message) as a list on the screen using the useState hook.
// a. Show “Loading Chats…” until your data displays on the DOM.

export const QuesSix = ({ fetchChatsSix }) => {
    const [userChats, setUserChats] = useState({
        showError: true,
        chats: [],
        errorMsg: "",
    });
    const getChats = async () => {
        try {
            const response = await fetchChatsSix(
                "https://example.com/api/userchat"
            );
            const { status, data } = response;
            if (status === 200) {
                setUserChats((userChats) => ({
                    ...userChats,
                    showError: false,
                    chats: data,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        // getChats();
    }, []);

    return (
        <React.Fragment>
            <h2>Solution 6</h2>
            <p>{userChats.showError && "Loading Chats..."}</p>
            <ul
                style={{
                    textAlign: "left",
                    display: !userChats.showError ? "block" : "none",
                }}
            >
                {userChats.chats.map(({ name, messages }, index) => {
                    return (
                        <li key={index}>
                            <h3>{name}'s Chat</h3>
                            <ul style={{ textAlign: "center" }}>
                                {messages.map(({ from, message }, index) => (
                                    <li
                                        key={index}
                                        style={{ listStyle: "none",  textAlign: "left" }}
                                    >
                                        <span style={{ fontWeight: "bold" }}>
                                            {from}:
                                        </span>
                                        <span>{message}</span>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    );
                })}
            </ul>
            <hr />
        </React.Fragment>
    );
};
