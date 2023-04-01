import "./App.css";

// Given the products data. Build a React component to display the name of all products as an unordered list on the DOM. Order of items display can vary from the image shown below.

export function QuesFive({products}){
    return (
        <div>
            <hr />
            <h2>Solution 5</h2>
            <ul>
                {products.map(({name}, index) => <li key={index}>{name}</li>)}
            </ul>
        </div>
    );
}