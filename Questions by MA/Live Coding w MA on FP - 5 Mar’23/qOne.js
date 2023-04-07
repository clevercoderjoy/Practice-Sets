// Given an array of numbers, write a function that 
// returns the sum of all the even numbers.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const sumOfEvens = (numbers) => numbers.reduce((acc, curr) => ((curr % 2 === 0) ? acc + curr : acc), 0);
console.log(sumOfEvens(numbers));
// Output: 20