// Write an ES6 function that accepts an array of integers and returns the maximum element in the array. Avoid using in-built methods.

// Your ES6 code here

const getMaxElement = (arr) => arr.reduce((acc, curr) => curr > acc ? acc = curr : acc);

let array = [4,78,8,3,6,0,12,34]
console.log(getMaxElement(array)) // 78