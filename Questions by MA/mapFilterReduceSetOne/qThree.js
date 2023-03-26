const students = [
    { name: "Alice", scores: [90, 85, 92] },
    { name: "Bob", scores: [75, 80, 85] },
    { name: "Charlie", scores: [90, 95, 85] },
    { name: "David", scores: [100, 100, 100] },
];
// return all the students who’s average score is more than
// 1. 80
// 2. 90

const getFilteredStudents = (students) => students.filter((student) => (getAverageScore(student) > 80)).map((student) => student.name);
const getAverageScore = ({scores}) => scores.reduce((acc, curr) => (acc += curr), 0) / scores.length;
console.log(getFilteredStudents(students));