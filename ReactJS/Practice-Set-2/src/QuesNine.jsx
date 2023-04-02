import { useState } from "react";
import "./App.css";

// Build a React component called "ColorPicker" that displays a list of colors as buttons. On click of each button show the HEX code for that color, just below each button.

export function QuesNine({red, green, blue}) {

    const[colorCode, setColorCode] = useState("");
    const [backgroundStyle, setBackgroundStyle] = useState("");

    const showHexCode = (color) => {
        if(color === red){
            setColorCode(red);
            setBackgroundStyle(red);
        }
        else if(color === green){
            setColorCode(green);
            setBackgroundStyle(green);
        }
        else if(color === blue){
            setColorCode(blue);
            setBackgroundStyle(blue);
        }
    }
    return (
        <div>
            <h2>Solution 9</h2>
            <h3>Color Picker</h3>
            <button onClick={() => showHexCode(red)}>Red</button>
            <button onClick={() => showHexCode(green)}>Green</button>
            <button onClick={() => showHexCode(blue)}>Blue</button>
            <p style={{background: backgroundStyle}}>{colorCode}</p>
            <hr />
        </div>
    );
}
