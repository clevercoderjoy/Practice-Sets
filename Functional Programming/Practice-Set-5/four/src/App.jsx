import "./App.css";

// 4. Create an array of objects representing employees in a company. Each object has the following properties: id, name, department, and salary. Write a React component  where you can create an array of employees and return an unordered list of employees, where each list item displays the employee's name, department, and salary.
function App() {
    const employees = [
        {
            id: 1,
            name: "John Doe",
            department: "Sales",
            salary: 50000,
        },
        {
            id: 2,
            name: "Jane Smith",
            department: "Marketing",
            salary: 60000,
        },
        {
            id: 3,
            name: "Bob Johnson",
            department: "Finance",
            salary: 70000,
        },
        {
            id: 4,
            name: "Sarah Lee",
            department: "HR",
            salary: 55000,
        },
        {
            id: 5,
            name: "Mike Williams",
            department: "IT",
            salary: 80000,
        },
    ];

    return <div className="App">
      <ul>
        {employees.map((employee) => (
          <li key={employee.id}>Name: {employee.name}, Dept: {employee.department}, Salary: {employee.salary}</li>
        ))}
      </ul>
    </div>;
}

export default App;
