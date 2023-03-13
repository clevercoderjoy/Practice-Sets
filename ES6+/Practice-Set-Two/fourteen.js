// Write a function that takes an array and returns the sum of first and last element

// Your ES6 code here

const sumFirstAndLast = ([first, ...rest]) => first + rest[rest.length - 1];

console.log(sumFirstAndLast([1, 2, 3, 4, 8])); // 9