import React, { useEffect, useState } from "react";
import "./App.css";

export const SolFive = ({ fetchFive }) => {
    const [post, setPost] = useState({ allPost: [], loading: true });
    const getPost = async () => {
        try {
            const response = await fetchFive("https://example.com/api/posts");
            const { status, data } = response;
            if (status === 200) {
                setPost((post) => ({
                    ...post,
                    allPost: data.posts,
                    loading: false,
                }));
                console.log(data);
            }
        } catch (e) {
            console.log(e);
        }
    };
    const showBakery = () => {
        const bakeryItems = post.allPost.filter(({category}) => category === "Bakery");
        setPost(post => ({...post, allPost: bakeryItems}));
    }
    useEffect(() => {
        // getPost();
    }, []);
    console.log(post.allPost);
    return (
        <React.Fragment>
            <h2>Solution 5</h2>
            <h3>{post.loading && "Loading..."}</h3>
            <div
                style={{ display: "flex", flexWrap: "wrap", textAlign: "left" }}
            >
                {post.allPost.map(({ caption, likes, views, src }, index) => (
                    <div
                        key={index}
                        style={{
                            margin: "10px",
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            height: "auto",
                            width: "200px",
                        }}
                    >
                        <img src={src} alt="" />
                        <h3>{caption}</h3>
                        <span>
                            <strong>Likes: </strong>
                            {likes}
                        </span>
                        <span>
                            <strong>Views: </strong>
                            {views}
                        </span>
                    </div>
                ))}
                <button style={{display: post.loading ? "none" : "block"}} onClick={showBakery}>Show Bakery</button>
            </div>
            <hr />
        </React.Fragment>
    );
};
