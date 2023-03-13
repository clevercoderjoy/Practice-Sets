// Write a function that takes a string as input and determines if it contains the letter 'a' or ‘A’.// Your ES6 code here

const checkForAlphabetA = (str) => {
    str = str.split('');
    return str.reduce((acc, curr) => {
        if(curr.toLowerCase() === 'a'){
            return "Includes a";
        }
        return acc;
    }, "Does not include a ");
}

console.log(checkForAlphabetA("Tanay")) // Includes a 
console.log(checkForAlphabetA("Jeep")) // Does not include a 
console.log(checkForAlphabetA("Jane")) // Includes a 