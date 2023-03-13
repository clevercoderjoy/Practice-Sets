// Write a function that takes a string as input and returns the string in all uppercase letters.

// Your ES6 code here

const stringToUpperCase = (str) => {
    str = str.split('');
    let res = "";
    res = str.map((letter) => convertToUpperCase(letter)).join('');
    return res;
}
const convertToUpperCase = (letter) => {
    let charCode = letter.charCodeAt();
    let upperCaseLetter = String.fromCharCode(charCode - 32)
    return upperCaseLetter;
};

console.log(stringToUpperCase("hello")); // "HELLO"