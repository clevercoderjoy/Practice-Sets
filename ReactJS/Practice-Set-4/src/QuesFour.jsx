import { useState } from "react";
import "./App.css";

// Ques 4:
// a. Build a React component that takes the todoItems as props and list all the todo tasks.
// b. if isDone is true then show the item with a strikethrough.
// c. Add a X button against each item and remove that task from the list on click of the button.

export function QuesFour({ todo }) {
    const [items, setItems] = useState([]);
    const removeItem = (index) => {
        todo.splice(index, 1);
        setItems((items) => [...todo]);
        console.log(items);
    };

    return (
        <div>
            <h2>Solution 4</h2>
            <h3>Todo List:</h3>
            <ul>
                {todo.map(({ id, task, isDone }, index) => (
                    <li
                        key={id}
                        style={{ textDecoration: isDone ? "line-through" : "" }}
                    >
                        {task}
                        <button onClick={() => removeItem(index)}>X</button>
                    </li>
                ))}
            </ul>
            <hr />
        </div>
    );
}
