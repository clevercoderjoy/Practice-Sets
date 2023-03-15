// Write an ES6 function that takes an array of strings and returns a new array with each string capitalized.

// Your ES6 code here

const capitalizeWords = (arr) => arr.map((str) => str.toUpperCase());

console.log(capitalizeWords(["eat", "sleep", "code", "repeat"]))
// ["EAT", "SLEEP", "CODE", "REPEAT"]