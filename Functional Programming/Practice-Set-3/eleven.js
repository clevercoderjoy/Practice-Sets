// Write an ES6 function that takes an array of numbers and returns the sum of all the even numbers in the array using the reduce function.

const numbers = [12, 23, 4, 2, 11, 21] 
// Your code here

const sumOfEvenNumbers = (numbers) => numbers.reduce((acc, curr) => ((curr % 2 === 0) ? acc + curr : acc));

console.log(sumOfEvenNumbers(numbers))
// Output: 18