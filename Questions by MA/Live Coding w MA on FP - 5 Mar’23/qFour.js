// Given an array. Write a function that takes in the given array 
// and prints only the numbers which are less than 8 and also an even number.

const arr = [2,4,5,7,9,17,34,65,90];
const evenAndLessThan8 = (arr) => arr.reduce((acc, curr) => ((curr < 8 && curr % 2 === 0) ? acc = ([...acc, curr]) : acc), []);
console.log(evenAndLessThan8(arr));
// Output = [2, 4]