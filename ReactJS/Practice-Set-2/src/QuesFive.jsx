import "./App.css";

// Build a React component called Phones that receives an array of products as a prop. Display only the mobile phones as an unordered list. Display their name, description, and price on the DOM.

export function QuesFive({ products }) {
    return (
        <div>
            <h2>Solution 5</h2>
            <ol>
                {products.map(({id, name, description, price}) => ((name === "mobile") ? (<li key={id}>{name}, {description}, {price}</li>) : ""))}
            </ol>
            <hr />
        </div>
    );
}