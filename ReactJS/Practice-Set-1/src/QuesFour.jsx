import "./App.css";

// Build a React component to display an image with a caption. The image and caption should be passed as props.

export function QuesFour({imageLink, imageCaption}){
    return (
        <div>
            <hr />
            <h2>Solution 4</h2>
            <img style={{width: "200px", height: "200px"}} src={imageLink} alt="image" caption="{imageCaption}"/>
        </div>
    );
}