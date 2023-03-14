// Write a function that uses destructuring to extract the first two elements from an array, and returns them in an object with keys 'first' and 'second'.

// Your ES6 code here

const pickFirstAndSecond = (arr) => {
    const [first, second] = arr;
    return {first: first, second: second};
}

console.log(pickFirstAndSecond(["orange", "banana", "apple"]))
// {first: 'orange', second: 'banana'}

console.log(pickFirstAndSecond(["red", "blue", "green"]))
// {first: 'red', second: 'blue'}