// Convert the function getData, into an ES6 function with last amount of characters. 
// Hint: Destructuring

// function getData(person) {
//     const name = person.name;
//     const address = person.address.city
//     console.log(name); // John Doe
//     console.log(address); // New York
// }

const person = {
    name: 'John Doe',
    address: {
        city: 'New York',
        state: 'NY',
    },
};

const getData = ({name, address}) => console.log(name, address);
getData(person);