import { useState } from "react";
import "./App.css";

// Build a React component with two buttons + and - which increases/decreases the font size of a heading text “Welcome” by 1px. Keep the initial font size to 18px. Use useState Hook.

export function QuesTwo() {
    const [currentFontSize, setCurrentFontSize] = useState(18);
    const handleIncreaseFontSize = () =>
        setCurrentFontSize(currentFontSize + 1);
    const handleDecreaseFontSize = () =>
        setCurrentFontSize(currentFontSize - 1);

    return (
        <div>
            <h2>Solution 2</h2>
            <p style={{ fontSize: currentFontSize + "px" }}>Welcome</p>
            <button onClick={() => handleIncreaseFontSize()}>Increase</button>
            <button onClick={() => handleDecreaseFontSize()}>Decrease</button>
            <hr />
        </div>
    );
}
