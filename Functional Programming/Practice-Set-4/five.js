// Write an ES6 function to multiply and return all the elements of a given array.

const numbers = [1, 2, 3, 4, 5];
// Your code here

const product = (number) => numbers.reduce((acc, curr) => acc * curr);

console.log(product(numbers));
// Output: 120