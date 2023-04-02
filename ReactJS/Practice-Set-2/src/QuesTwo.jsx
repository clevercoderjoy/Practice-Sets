import "./App.css";

// Build a Product component that receives product name and price as props and displays them on DOM.
// The name should be in bold and blue in color
// Price should be in italics and green in color

export function QuesTwo({product}){
    const {name, price} = product;
    return (
        <div>
            <h2>Solution 2</h2>
            <p>Name: <span style={boldAndBlue}>{name}</span>, Price: <span style={italicsAndGreen}>{price}</span></p>
            <hr />
        </div>
    );
}

const boldAndBlue = {fontWeight: "bold", color: "blue"};
const italicsAndGreen = {fontStyle: "italic", color: "green"};