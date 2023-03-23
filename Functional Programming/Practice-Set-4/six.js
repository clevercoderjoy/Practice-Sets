// Write an ES6 function that takes an array of strings and returns the longest string.

const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here

const longestString = (strings) => {
    let maxLen = 0;
    strings.filter((string) => {
        if(string.length > maxLen){
            maxLen = string.length;
        }
    });
    let res = strings.filter((string) => string.length === maxLen);
    return res[0];
}

console.log(longestString(strings)); 
// Output: 'Haule Haule