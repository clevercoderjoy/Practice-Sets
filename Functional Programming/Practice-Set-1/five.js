// Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

// Your ES6 function here

const getCityNames = (cities) => cities.map((city) => city.name);

const cities = [{
        name: 'New York',
        population: 8538000
    },
    {
        name: 'Los Angeles',
        population: 3976000
    },
    {
        name: 'Bangalore',
        population: 13608000
    }
];

console.log(getCityNames(cities));
// Output: ["New York", "Los Angeles", "Bangalore"]