import "./App.css";

function App() {
    // Create an array of objects representing products in an online store. Each object has the following properties: id, name, price, and category. Write a React component where you can create an array of products and return an unordered list of products, where each list item displays the product's name, price, and category.
    const products= [
        { id: 1, name: "Book", price: 10, category: "stationary" },
        { id: 2, name: "T-Shirt", price: 15, category: "dress" },
        { id: 3, name: "Hat", price: 8, category: "accessories" },
        { id: 4, name: "Sunglasses", price: 12, category: "accessories" },
    ];
    return <div className="App">
      <ul>
        {products.map((product) => (
          <li key={product.id}>Name: {product.name} Price: {product.price} Category: {product.category}</li>
        ))}
      </ul>
    </div>;
}

export default App;
