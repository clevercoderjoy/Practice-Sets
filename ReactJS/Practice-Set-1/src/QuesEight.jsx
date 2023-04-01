import "./App.css";
// 8
// Build a React component to display all the employee details as unordered list on the DOM in the following format:
// name: name, level: level, dept: dept, designation: designation, salary: salary
// No need to pass as props.

// 9
// Considering above data given in question 8, at the end of all the employee details, calculate and display the total salary expense of the company. Total Salary Expense: totalSalary

// 10
// Considering above data given in question 8, display the details of employee with orange backgroundColor, who are at level 2.

// 11
// Considering above data given in question 8, add a border around the employee details whose designation is “President”.

export function QuesEight({employees}){

    const totalSalary = employees.reduce((acc, curr) => acc + curr.salary, 0);

    return (
        <div>
            <hr />
            <h2>Solution 8, 10, 11</h2>
            <ul>
                {employees.map(({name, level, dept, designation, salary}, index) => <li style={{background: ((level === 2) ? "orange" : ""), border: ((designation === "President") ? "2px solid red": "") }} key={index}>Name: {name}, Level: {level}, Dept: {dept}, Designation: {designation}, Salary: {salary}</li>)}
            </ul>

            <h2>Solution 9</h2>
            <p>Total Salary: {totalSalary}</p>
        </div>
    );
}