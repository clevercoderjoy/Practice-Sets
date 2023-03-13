// Write a function that takes an array and a number and returns the sum of first element and the number.

// Your ES6 code here

const sumFirstElement = ([first, ...rest], num) => first + num;

console.log(sumFirstElement([1, 2, 3], 5)); // 6