import "./App.css";

// Build a React component to display a button with custom styles and button text as ‘Start’. The styles should be passed as props.

// Data:

export function QuesTwo() {
    return (
        <div>
            <hr />
            <h2>Solution 2</h2>
            <button style={{backgroundColor: backgroundColor, color: color, borderRadius: borderRadius, padding: padding}}>START</button>
        </div>
    );
}

const backgroundColor = "lightgreen";
const color = "darkgreen";
const borderRadius = "5px";
const padding = "10px";
