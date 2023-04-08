import { useState } from "react";
import "./App.css";

export function QuesSeven({currentLives}){

    const [life, setLife] = useState(currentLives);
    const increaseLife = () => setLife(life + 1);
    const decreaseLife = () => {
        if(life > 0){
            setLife(life - 1);
        }
    };

    return (
        <div>
            <h2>Solution 7</h2>
            <h3>Current Lives: {life}</h3>
            <button onClick={() => decreaseLife()}>Loose a Life Point</button>
            <button onClick={() => increaseLife()}>Gain a Life Point</button>
            <h4 style={{display: currentLives ? "none" : "block"}}>Game Over! You Loose</h4>
            <hr />
        </div>
    );
}