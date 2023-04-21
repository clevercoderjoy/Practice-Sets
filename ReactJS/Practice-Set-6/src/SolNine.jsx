import React, { useEffect, useState } from "react";
import "./App.css";

export const SolNine = ({ fetchNine }) => {
    const [video, setVideo] = useState({
        loading: true,
        videoData: {},
        showInput: false,
    });
    const getVideo = async () => {
        try {
            const response = await fetchNine(
                "https://example.com/api/getvideo"
            );
            const { status, data } = response;
            if (status === 200) {
                setVideo((video) => ({
                    ...video,
                    loading: false,
                    videoData: data.videos,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };
    const addLabel = (e) => {
        const label = e.target.value;
        video.videoData.label = label;
    };
    const showInputField = () => {
        setVideo((video) => ({ ...video, showInput: true }));
    };
    const handleEnter = (e) => {
        if (e.key === "Enter") {
            setVideo((video) => ({ ...video, showInput: false }));
            objectToArray();
        }
    };
    useEffect(() => {
        // getVideo();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 9</h2>
            <h3>{video.loading && "Loading..."}</h3>
            <div
                style={{
                    display: video.loading ? "none" : "block",
                    textAlign: "left",
                }}
            >
                <img src={video.videoData.thumbnail} alt="" />
                {Object.entries(video.videoData).map(([key, val], index) => (
                    <p key={index}>
                        <span style={{ fontWeight: "bold" }}>{key}:</span> {val}
                    </p>
                ))}
                <input
                    onChange={(e) => addLabel(e)}
                    onKeyDown={(e) => handleEnter(e)}
                    type="text"
                    style={{ display: video.showInput ? "block" : "none" }}
                />
                <button onClick={showInputField}>Add Label</button>
            </div>
            <hr />
        </React.Fragment>
    );
};
