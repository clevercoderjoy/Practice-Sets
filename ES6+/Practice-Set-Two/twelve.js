// Write a function that takes an array and returns the first element of the array.

// Your ES6 code here

const firstElement = ([first, ...rest]) => first;

console.log(firstElement([1, 2, 3, 4, 5])); // 1