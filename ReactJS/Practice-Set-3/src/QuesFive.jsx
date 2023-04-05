import { useState } from "react";
import "./App.css";

// Build a React component to display the list of all the vegetables and their pick date as ordered list. Create a button which says “Highlight Fresh Vegetables”. On click of the button change the color of the vegetable to green whose pick date is ‘2023-03-30’.

export function QuesFive({vegetables}) {

    const[highlight, setHighlight] = useState(false);
    const highlightFresh = () => setHighlight(true);

    return (
        <div>
            <h2>Solution 5</h2>
            <ol>
                {
                    vegetables.map(({id, name, pickDate}) => (<li key={id} style={{background: ((pickDate === "2023-03-30" && highlight) ? "red" : "")}}>{name}, {pickDate}</li>))
                }
            </ol>
            <button onClick={() => highlightFresh()}>Highlight Fresh</button>
            <hr />
        </div>
    );
}