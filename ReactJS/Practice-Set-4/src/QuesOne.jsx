import { useState } from "react";
import "./App.css";

// Given an array of characters, build a Tab component in React that shows the name of characters on click of two buttons, one for heroes and other for villains. On click of “Show Heroes” button, a list of heroes should be displayed and on click of “Show Villains” button, a list of villains should be displayed on the DOM. Use useState Hook.

export function QuesOne({ characters }) {
    const [showCharacters, setShowCharacters] = useState([]);
    const { heroes, villains } = characters;
    const showHeroes = () => setShowCharacters((showCharacters) => ["Heroes:", ...heroes]);

    const showVillains = () => setShowCharacters((showCharacters) => ["Villains:", ...villains]);

    return (
        <div>
            <h2>Solution 1</h2>
            <button onClick={() => showHeroes()}>Show Heroes</button>
            <button onClick={() => showVillains()}>Show Villains</button>
            <h3>{showCharacters[0]}</h3>
            {showCharacters.map(({ name, powers, costume }, index) => {
                if (index !== 0) {
                    return (
                        <div key={index}>
                            <h4>{name}</h4>
                            <p>Powers: {powers}</p>
                            <p>Costume: {costume}</p>
                        </div>
                    );
                }
            })}
            <hr />
        </div>
    );
}
