import "./App.css";
// 5. Create an array of objects representing recipes in a cookbook. Each object has the following properties: id, recipe name, recipe creator name. Write a React component where you can create an array of recipes and return an unordered list, where each list item displays the recipe's name and recipe creator name.
function App() {
    const cookbook = [
        {
            id: 1,
            recipeName: "Spaghetti Carbonara",
            recipeCreatorName: "Giada De Laurentiis",
        },
        {
            id: 2,
            recipeName: "Chocolate Chip Cookies",
            recipeCreatorName: "Alton Brown",
        },
        {
            id: 3,
            recipeName: "Beef Stroganoff",
            recipeCreatorName: "Ina Garten",
        },
        {
            id: 4,
            recipeName: "Roast Chicken",
            recipeCreatorName: "Julia Child",
        },
        {
            id: 5,
            recipeName: "Hummus",
            recipeCreatorName: "Yotam Ottolenghi",
        },
    ];

    return (
        <div className="App">
            <ul>
                {cookbook.map((dish) => (
                    <li key={dish.id}>
                        Name: {dish.recipeName}, Creater:{" "}
                        {dish.recipeCreatorName}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
