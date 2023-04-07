// Given an array of objects representing students,
// where each object has a name property and a grades property (an array of numbers),
// write a function that returns an array of objects representing the students
// who have an average grade of at least 90.

const students = [
    { name: "Alice", grades: [90, 95, 92] },
    { name: "Bob", grades: [80, 85, 87] },
    { name: "Charlie", grades: [92, 88, 94] },
    { name: "David", grades: [75, 80, 82] },
];

const getResults = (students) => students.filter((student) => ((getAvgGrades(student.grades) > 90))).map((student) => ({name: student.name, averageGrades: getAvgGrades(student.grades)}));
const getAvgGrades = (grades) => grades.reduce((acc, curr) => acc + curr) / grades.length;
console.log(getResults(students));
// Output: [{ name: 'Alice', averageGrade: 92.33333333333333 }, { name: 'Charlie', averageGrade: 91.33333333333333 }]
