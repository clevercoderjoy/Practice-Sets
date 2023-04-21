import React, { useEffect, useState } from "react";
import "./App.css";

export const SolTwo = ({ fetchTwo }) => {
    const [todo, setTodo] = useState({
        cat1: [],
        cat2: [],
        cat3: [],
        loading: false,
    });
    const getTodo = async () => {
        try {
            const response = await fetchTwo("https://example.com/api/todos");
            const { status, data } = response;
            if (status === 200) {
                setTodo((todo) => ({ ...todo, loading: true }));
                data.todos.map(({ title, todosList }) => {
                    if (title === "Go Outside") {
                        setTodo((todo) => ({ ...todo, cat1: [...todosList] }));
                    } else if (title === "Let's Work") {
                        setTodo((todo) => ({ ...todo, cat2: [...todosList] }));
                    } else if (title === "Home Work") {
                        setTodo((todo) => ({ ...todo, cat3: [...todosList] }));
                    }
                });
                console.log(data.todosList);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        // getTodo();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 2</h2>
            <h3>{!todo.loading && "Loading..."}</h3>
            <div>
                <div
                    style={{
                        display: todo.cat1.length === 0 ? "none" : "block",
                    }}
                >
                    <h3>Go Outside: Get some fresh air</h3>
                    <ol>
                        {todo.cat1.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>
                <div
                    style={{
                        display: todo.cat2.length === 0 ? "none" : "block",
                    }}
                >
                    <h3>Let's Work: Deadline closes in 3 days</h3>
                    <ol>
                        {todo.cat2.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>
                <div
                    style={{
                        display: todo.cat3.length === 0 ? "none" : "block",
                    }}
                >
                    <h3>Home Work: To be done on priority</h3>
                    <ol>
                        {todo.cat3.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ol>
                </div>
            </div>
            <hr />
        </React.Fragment>
    );
};
