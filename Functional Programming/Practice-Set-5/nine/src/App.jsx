import "./App.css";

// 9. Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component where you can create an array of products and generate an ordered list of products, where each list item displays the product's name, price, and category.
function App() {
    let products = [
        {
            id: 1,
            name: "Apple iPhone 13",
            price: 999,
            category: "Electronics",
        },
        {
            id: 2,
            name: "Nike Air Max 270 React",
            price: 150,
            category: "Shoes",
        },
        {
            id: 3,
            name: "Bose QuietComfort 35 II",
            price: 299,
            category: "Electronics",
        },
        {
            id: 4,
            name: "Nintendo Switch",
            price: 299,
            category: "Gaming",
        },
        {
            id: 5,
            name: "Levi's 501 Original Fit Jeans",
            price: 69,
            category: "Clothing",
        },
    ];

    return (
        <div className="App">
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        Name: {product.name}, Price: {product.price}, Category:{" "}
                        {product.category}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
