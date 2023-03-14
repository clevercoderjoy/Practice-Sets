// Write a function to return the last 5 characters as an array from the given array.

// Your ES6 code here

const printLastFive = (arr) => {
    const [a, b, ...rest] = arr;
    return rest;
}

console.log(printLastFive([0, 1, 1, 2, 3, 5, 8]))
// [1, 2, 3, 5, 8]