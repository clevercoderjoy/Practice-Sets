// Write an ES6 function to return only the first character of the given array.

// Your ES6 code here

const printFirstCharacter = (arr) => {
    const [a, ...rest] = arr;
    return a;
};

console.log(printFirstCharacter([1, 2, 3, 5, 8]))
// 1