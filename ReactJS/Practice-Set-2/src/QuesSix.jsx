import { useState } from "react";
import "./App.css";

// Build a React component called Article that accepts two props: title and content. Inside the component, render a <h1> tag with the title prop and a button below that which says “Know More”. On the click of the button, show the content in a <p> tag just below the button.

export function QuesSix({title, content}){

    const [currContent, setContent] = useState("");
    const showContent = () => setContent(content);

    return (
        <div>
            <h2>Solution 6</h2>
            <h3>Title: {title}</h3>
            <button onClick={() => showContent()}>Know More</button>
            <p>{currContent}</p>
            <hr />
        </div>
    )
}