import React, { useEffect, useState } from "react";
import "./App.css";

// Create a React component called Comments.
// a. Fetch the comments using the fake fetch and list the data on DOM.
// b. Each comment component will have the text, user’s name and a delete button.
// c. On click of the delete button, that particular comment object should be deleted and should not be visible on the DOM.

export const QuesSeven = ({ fetchCommentsSeven }) => {
    const [userComments, setUserComments] = useState({
        comments: [],
        showLoading: true,
    });

    const getComments = async () => {
        try {
            const response = await fetchCommentsSeven(
                "https://example.com/api/comments"
            );
            const { status, data } = response;
            if (status === 200) {
                setUserComments((userComments) => ({
                    ...userComments,
                    comments: data.comments,
                }));
            }
        } catch (e) {
            console.log(e);
        }
        setUserComments((userComments) => ({
            ...userComments,
            showLoading: false,
        }));
    };

    const deleteComment = (index) => {
        userComments.comments.splice(index, 1);
        setUserComments(userComments => ({...userComments, comments: userComments.comments}))
    };

    useEffect(() => {
        getComments();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 7</h2>
            <p>{userComments.showLoading && "Loading..."}</p>
            <div
                style={{
                    display: !userComments.showLoading ? "block" : "none", textAlign: "left", padding: "10px",
                }}
            >
                <h3>Comments:</h3>
                {userComments.comments.map(({ name, text }, index) => {
                    return (
                        <div key={index}>
                            <h3>{name}</h3>
                            <p>{text}</p>
                            <button onClick={() => deleteComment(index)}>Delete</button>
                        </div>
                    );
                })}
            </div>
            <hr />
        </React.Fragment>
    );
};
