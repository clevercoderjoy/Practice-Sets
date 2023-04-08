import { useState } from "react";
import "./App.css";

// Ques 5:
// a. Build a React component that takes the todoItems as props and list all the todo tasks.
// b. Add a "Mark as Done" button against each item and toggle isDone property value between true and false on click of the button. If isDone is true change the color of that task to red with a strikethrough and if it is false remove the strikethrough and the red color.

export function QuesFive({ todo }) {

    const [items, setItems] = useState([]);

    const toggleIsDone = (index) => {
        todo[index].isDone = !todo[index].isDone;
        setItems(items => [...todo]);
    };

    return (
        <div>
            <h2>Solution 5</h2>
            <div>
                {todo.map(({ id, task, isDone }, index) => (
                    <p
                        key={id}
                        style={{
                            color: isDone ? "red" : "",
                            textDecoration: isDone ? "line-through" : "",
                        }}
                    >
                        {task}
                        <button onClick={() => toggleIsDone(index)}>
                            Mark as Done
                        </button>
                    </p>
                ))}
            </div>
            <hr />
        </div>
    );
}
