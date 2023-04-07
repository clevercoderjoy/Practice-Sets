// Given an array of strings, write a function that
// returns the total number of characters in all the strings
// that start with the letter "A".

const strings = ["Apple", "Aardvark", "Banana", "Cat"];
const stringsWithA = (strings) => strings.reduce((acc, curr) => ((curr[0] === 'A') ? acc + curr.length : acc), 0);
console.log(stringsWithA(strings));
// Output: 13
