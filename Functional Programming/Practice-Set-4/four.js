// Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

// Your code here

const concatStrings = (string) => string.reduce((acc, curr) => acc += curr, "");

console.log(concatStrings(['this', 'is', 'fun'])); // Output: 'thisisfun'