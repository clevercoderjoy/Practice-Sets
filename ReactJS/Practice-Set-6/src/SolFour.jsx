import React, { useEffect, useState } from "react";
import "./App.css";

export const SolFour = ({ fetchFour }) => {
    const [video, setVideo] = useState({ allVideos: [], loading: true });
    const getVideos = async () => {
        try {
            const response = await fetchFour("https://example.com/api/videos");
            const { status, data } = response;
            if (status === 200) {
                console.log(data);
                setVideo((video) => ({
                    ...video,
                    allVideos: data.videos,
                    loading: false,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };
    const deleteVideo = () => {
        video.allVideos.shift();
        console.log(video.allVideos);
        setVideo((video) => ({ allVideos: video.allVideos }));
    };
    useEffect(() => {
        // getVideos();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 4</h2>
            <h3>{video.loading && "Loading..."}</h3>
            <div
                style={{ display: "flex", flexWrap: "wrap", textAlign: "left" }}
            >
                {video.allVideos.map(
                    ({ title, thumbnail, views, likes }, index) => (
                        <div
                            key={index}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                margin: "10px",
                                padding: "10px",
                                width: "250px",
                                height: "250px",
                            }}
                        >
                            <img src={thumbnail} alt="" />
                            <span style={{ fontWeight: "bold" }}>{title}</span>
                            <span>
                                <strong>Likes: </strong>
                                {likes}
                            </span>
                            <br />
                            <span>
                                <strong>Views: </strong>
                                {views}
                            </span>
                        </div>
                    )
                )}
            </div>
            <button
                style={{ display: video.loading ? "none" : "block" }}
                onClick={() => deleteVideo()}
            >
                Delete Video
            </button>
            <hr />
        </React.Fragment>
    );
};
