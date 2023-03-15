// Write an ES6 function that takes an array of numbers and returns the average of all the numbers. Avoid using in-built methods.

// Your ES6 code here

const calculateAverage = (arr) => arr.reduce((acc, curr) => acc + curr) / arr.length;

console.log(calculateAverage([1, 2, 3, 4, 5])); // 3