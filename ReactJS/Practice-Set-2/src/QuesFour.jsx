import "./App.css";

// Build a React component called Gadgets that receives an array of products as a prop. Render each product's name, description, and price as an ordered list. Add a border around the product details which has price above 50000.

export function QuesFour({products}) {
    return (
        <div>
            <h2>Solution 4</h2>
            <ol>
                {products.map(({name, description, price, id}) => <li key={id} style={{border: ((price > 5000) ? "1px solid black" : "")}}>{name}, {description}, {price}</li>)}
            </ol>
            <hr />
        </div>
    );
}
