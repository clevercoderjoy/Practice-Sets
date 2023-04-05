import "./App.css";

// Build a React component which takes an array of objects as props. The object represents a bouquet of mixed flowers and consists of: id, flowers, totalFlowers, and price. Display the price of that bouquet on the DOM that has rose in it, in the format, “Price of bouquet with roses : {price}”

// Build a React component to display the flowers of a bouquet in an ordered list on the DOM which has a price above 2000. Pass data as prop.

export function QuesSix({ bouquet }) {
    return (
        <div>
            <h2>Solution 6</h2>
            {bouquet.map(({id, flowers, price}) => ((flowers.includes("rose") ? <p key={id}>Price of bouquet with roses : {price}</p> : "")))}
            <hr />
            <h2>Solution 7</h2>
            <ol>
                {bouquet.map(({flowers, price}) => ((price > 2000) ? (flowers.map((phool, index) => <li key={index}>{phool}</li>)) : ""))}
            </ol>
            <hr />
        </div>
    );
}
