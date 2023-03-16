// Write an ES6 function that takes an array of numbers and returns the first number that is divisible by 7.

const numbers = [1, 2, 3, 21, 14, 7];
// Your code here

const isDivisibleBy7 = (numbers) => numbers.find((number) => (number % 7 === 0));

console.log(isDivisibleBy7(numbers));
// Output: 21