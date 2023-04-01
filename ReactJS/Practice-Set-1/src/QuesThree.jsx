import "./App.css";

// Build a React component to display a list of stationery items with a header. The items and header should be passed as props. Header should be “Stationery Items”.

export function QuesThree({items, headerTitle}){
    return (
        <div>
            <hr />
            <h2>Solution 3</h2>
            <header><h3>{headerTitle}</h3></header>
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    );
}