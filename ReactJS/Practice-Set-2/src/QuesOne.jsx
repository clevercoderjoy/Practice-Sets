import "./App.css";

// Create a React component called Greeting that receives a name prop and displays a message like "Hello, name!" on the DOM.

export function QuesOne({name}){
    return (
        <div>
            <h2>Solution 1</h2>
            <p>Hello, {name}!</p>
            <hr />
        </div>
    );
}