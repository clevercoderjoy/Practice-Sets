import "./App.css";

// Given an array of objects representing a list of cars. Each object consists of: id, name, price, category. Build a React component that shows on the DOM the total number of cars present in each category. For Example: if there are categories, luxury and sports, where there are 5 luxury cars and 2 sports car then the data should be represented as:

export function QuesNine({ cars }) {
    let keyValue = cars.reduce((acc, curr) => {
        if(curr.category === "sports"){
            return {sports: acc.sports + 1, luxury: acc.luxury}
        }
        else if(curr.category === "luxury"){
            return {sports: acc.sports, luxury: acc.luxury + 1};
        }
        return acc;
    }, {sports: 0, luxury: 0})
    return (
        <div>
            <h2>Solution 9</h2>
            <p>Sports: {keyValue.sports}</p>
            <p>Luxury: {keyValue.luxury}</p>
            <hr />
        </div>
    );
}
