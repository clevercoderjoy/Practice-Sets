// Write an ES6 function which takes out the names of the students whose first letter starts with ‘A’.

const studentNames = ["Ram", "Anjali", "Arpit", "Bhanu Kumar", "Jaya", "Ankit", "shayam"]
// Your code here

const getStudentsByFilter = (studentNames) => studentNames.filter((student) => student[0].toLowerCase() === 'a');

console.log(getStudentsByFilter(studentNames));
// Output: ["Anjali", "Arpit", "Ankit"]