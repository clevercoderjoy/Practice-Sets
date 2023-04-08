import { useState } from "react";
import "./App.css";

// a. Build a React component that displays a list of items. Display fruits in orange color and vegetables in green color.
// b. Create two buttons to filter the items by their category using the useState hook.

export function QuesThree({listItems}) {
    const fruits = listItems.filter(({category}) => (category === "Fruit"));
    const vegetables = listItems.filter(({category}) => (category === "Vegetable"));

    const [displayItems, setDisplayItems] = useState([]);

    const showAllItems = () => setDisplayItems(displayItems => [...listItems]);
    const showAllFruits = () => setDisplayItems(displayItems => [...fruits]);
    const showAllVegetables = () => setDisplayItems(displayItems => [...vegetables]);

    return (
        <div>
            <h2>Solution 3</h2>
            <button onClick={() => showAllItems()}>All</button>
            <button onClick={() => showAllFruits()}>Fruits</button>
            <button onClick={() => showAllVegetables()}>Vegetables</button>
            {
                <ul>
                    {
                    displayItems.map(({id, name, category}) => (<li key={id} style={{color: category === "Fruit" ? "orange" : "green"}}>{name}</li>))
                    }
                </ul>
            }
            <hr />
        </div>
    );
}
