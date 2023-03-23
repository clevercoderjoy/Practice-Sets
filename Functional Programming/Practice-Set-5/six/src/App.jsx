import "./App.css";

// 6. Create an array of objects representing cars in a dealership. Each object has the following properties: id, make, model, and price. Write a React component where you can create an array of cars and return an unordered list of cars, where each list item displays the car's make, model, and price.

function App() {
    let cars = [
        {
            id: 1,
            make: "Toyota",
            model: "Camry",
            price: 25000,
        },
        {
            id: 2,
            make: "Honda",
            model: "Civic",
            price: 20000,
        },
        {
            id: 3,
            make: "Ford",
            model: "Mustang",
            price: 35000,
        },
        {
            id: 4,
            make: "Chevrolet",
            model: "Corvette",
            price: 60000,
        },
        {
            id: 5,
            make: "BMW",
            model: "X5",
            price: 50000,
        },
    ];

    return <div className="App">
      <ul>
        {cars.map((car) => (
          <li key={car.id}>Make: {car.make}, Model: {car.model}, Price: {car.price}</li>
        ))}
      </ul>
    </div>;
}

export default App;
