let employees = [
    {
        id: 11,
        name: "Abhinav",
        salary: 75000,
    },
    {
        id: 2131,
        name: "Gaurav",
        salary: 62000,
    },
    {
        id: 3012,
        name: "Raj",
        salary: 32000,
    },
    {
        id: 3014,
        name: "Abhi",
        salary: 48000,
    },
];

// 1. Find the total salary of employees?
// 2. Find all the employee names who earn more than the average salary?

const totalSalary = ({ salary }) =>
    employees.reduce((acc, curr) => (acc += curr.salary), 0);
// console.log(totalSalary(employees));

const averageSalary =
    employees.reduce((acc, curr) => (acc += curr.salary), 0) / employees.length;
const employeesWithAboveAverageSalary = (employees) =>
    employees.filter(({ salary }) => salary > averageSalary);
console.log(employeesWithAboveAverageSalary(employees));
