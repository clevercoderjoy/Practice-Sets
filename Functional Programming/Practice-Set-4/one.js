// Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here

const totalLength = (strings) => strings.map((string) => string.length).reduce((acc, curr) => acc + curr);

console.log(totalLength(strings));
// Output: 30