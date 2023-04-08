import { useState } from "react";
import "./App.css";

// a. Build a React component that displays the title and author of each book.
// b. Add buttons to filter the books by genre using the useState hook.

export function QuesSix({books}){

    const [displayBooks, setDisplayBooks] = useState([books]);

    const displayAllBooks = () => setDisplayBooks(displayBooks => [...books]);
    const displayDystopianBooks = () => {
        const dystopianBooks = books.filter(({genre}) => genre === "Dystopian");
        setDisplayBooks(displayBooks => [...dystopianBooks]);
    };
    const displayYoungAdultBooks = () => {
        const youngAdultBooks = books.filter(({genre}) => genre === "Young Adult");
        setDisplayBooks(displayBooks => [...youngAdultBooks]);
    };
    const displayClassicBooks = () => {
        const classicBooks = books.filter(({genre}) => genre === "Classic");
        setDisplayBooks(displayBooks => [...classicBooks]);
    };

    return (
        <div>
            <h2>Solution 6</h2>
            <button onClick={() => displayAllBooks()}>All Genres</button>
            <button onClick={() => displayClassicBooks()}>Classics</button>
            <button onClick={() => displayDystopianBooks()}>Dystopian</button>
            <button onClick={() => displayYoungAdultBooks()}>Young Adult</button>
            {
                displayBooks.map(({title, author}, index) => {
                    return (
                        <div key={index}>
                            <h3>{title}</h3>
                            <p>{author}</p>
                        </div>
                    );
                })
            }
            <hr /> 
        </div>
    );
}