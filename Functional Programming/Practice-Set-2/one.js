// Given an array of objects representing people, write an ES6 function to return a new array containing only the names of the people.

const people = [{
        name: 'Raj',
        age: 28
    },
    {
        name: 'Swapnil',
        age: 42
    },
    {
        name: 'Anushka',
        age: 35
    }
];

// Your code here

const getNames = (people) => people.map(({name}) => name);

console.log(getNames(people)); // Output: ['Raj', 'Swapnil', 'Anushka']