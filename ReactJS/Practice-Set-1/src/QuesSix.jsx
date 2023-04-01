import "./App.css";

// Consider the products data from previous question and display all the product details as unordered list for which the number of sales is more than the quantity.
// Order of items display can vary from the image shown below.

export function QuesSix({products}){
    return (
        <div>
            <hr />
            <h2>Solution 6</h2>
            <ul>
                {products.map(({name, quantity, sales}, index) => ((sales > quantity) ? <li key={index}>Name: {name}, Quantity: {quantity}, Sales: {sales}</li> : ""))}
            </ul>
        </div>
    );
}