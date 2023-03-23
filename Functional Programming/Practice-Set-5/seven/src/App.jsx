import "./App.css";

// 7. Create an array of objects representing students in a class. Each object has the following properties: id, name, grade, and attendance. Write a React component where you can create an array of students and generate an ordered list of students, where each list item displays the student's name, grade, and attendance.

function App() {
    let students = [
        {
            id: 1,
            name: "John",
            grade: 85,
            attendance: 90,
        },
        {
            id: 2,
            name: "Jane",
            grade: 92,
            attendance: 95,
        },
        {
            id: 3,
            name: "Bob",
            grade: 78,
            attendance: 80,
        },
        {
            id: 4,
            name: "Samantha",
            grade: 95,
            attendance: 100,
        },
        {
            id: 5,
            name: "Michael",
            grade: 80,
            attendance: 85,
        },
    ];

    return <div className="App">
      <ul>
      {students.map((student) => (
        <li key={student.id}>Name: {student.name}, Grade: {student.grade}, Attendance: {student.attendance}</li>
      ))}
      </ul>
    </div>;
}

export default App;
