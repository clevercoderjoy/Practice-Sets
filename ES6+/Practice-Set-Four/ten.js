// Write an ES6 function that takes an array of objects and returns the sum of all ages.

// Your ES6 code here

const sumOfAges = (array) => array.reduce((acc, curr) => acc = acc + curr.age, 0);

var array = [{
        name: "Jay",
        age: 60
    },
    {
        name: "Gloria",
        age: 36
    },
    {
        name: "Manny",
        age: 16
    },
    {
        name: "Joe",
        age: 9
    }
];

console.log(sumOfAges(array)); // 121