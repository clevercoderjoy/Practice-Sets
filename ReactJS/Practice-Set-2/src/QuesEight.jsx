import { useState } from "react";
import "./App.css";

// Build a React component called MyGadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Create a button below all the listings which says “Highlight Expensive Gadget” and on click of the button add a lightgreen backgroundColor to the items which has a price more than 50000.

export function QuesEight({products}){

    const [shouldHighlight, setShouldHighlight] = useState(false);
    const highlightGadgets = () => setShouldHighlight(true);
    return (
        <div>
            <h2>Solution 8</h2>
            <h3>My Gadgets</h3>
            <ol>
                {products.map(({id, name, description, price}) => (<li style={{backgroundColor: ((price > 50000) && shouldHighlight) ? "lightgreen" : ""}} key={id}>{name}, {description}, {price}</li>))}
            </ol>
            <button onClick={() => highlightGadgets()}>Highlight Expensive Gadgets</button>
            <hr />
        </div>
    );
}