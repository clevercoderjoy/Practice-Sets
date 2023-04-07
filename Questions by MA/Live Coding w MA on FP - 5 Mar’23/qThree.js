// Given an array of numbers, write a function that 
// returns the sum of the cubes of all odd numbers in the array.

const numbers = [1, 2, 3, 4, 5];
const sumOfCubes = (numbers) => numbers.reduce((acc, curr) => ((curr % 2 !== 0) ? (acc + (curr * curr * curr)) : acc), 0);
console.log(sumOfCubes(numbers));
// Output: 153