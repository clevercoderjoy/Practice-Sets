// Write an ES6 function to return sum of all numbers at even indices of the given array.

// Your ES6 code here

const sumOfEvenIndices = (arr) => {
    let sum = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(i % 2 === 0){
            sum += arr[i];
        }
    }
    return sum;
};

console.log(sumOfEvenIndices([2, 4, 3, 7, 1, 5])) // 6
console.log(sumOfEvenIndices([12, 14, 3, 27, 15, 25])) // 30