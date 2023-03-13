// Create a function changeOccupation that takes an object person and a string newOccupation as parameters, and changes the occupation property of the person object to the newOccupation. Log the person object to the console before and after calling the function.

// Your ES6 code here

const person = {
    name: 'Amit',
    age: 25,
    occupation: 'Software Engineer',
};

const changeOccupation = (person) => {
    person.occupation = "Product Manager"
};

console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Software Engineer' } to the console
changeOccupation(person, 'Product Manager');
console.log(person); // logs { name: 'Amit', age: 25, occupation: 'Product Manager' } to the console