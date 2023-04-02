import { useState } from "react";
import "./App.css";

// Build a React component called About that accepts three props: heading, your name and learning. Inside the component, render a <h1> tag with the heading prop, <h2> tag with your name and a button below that which says “Know More”. On the click of the button, show the learning in a <p> tag just below the button.

export function QuesSeven({heading, name, learning}){

    const[currLearning, setLearning] = useState("");
    const showLearning = () => setLearning(learning);

    return (
        <div>
            <h2>Solution 7</h2>
            <h3>{heading}</h3>
            <h4>{name}</h4>
            <button onClick={() => showLearning()}>Know More</button>
            <p>{currLearning}</p>
            <hr />
        </div>
    );
}