import "./App.css";

// Build a "Todo" React component that takes a prop called "todoItems". Inside the component, Display the title of a to-do item in a heading tag and the description in a paragraph. If the todoItem is completed, show the title and description in green color otherwise in red color.

export function QuesTen({todoItems}){
    return (
        <div>
            <h2>Solution 10</h2>
            <ol>
                {todoItems.map(({id, title, description, isCompleted}) => ((<li key={id} style={{color: (isCompleted) ? "green" : "red"}}><h3>{title}</h3> <p>{description}</p></li>)))}
            </ol>
            <hr />
        </div>
    );
}