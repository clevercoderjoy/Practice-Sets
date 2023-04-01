import "./App.css";

// Given a student object with student name and the marks for english, maths and computers. If the total marks of a student is >= 225, the grade is A, >=180 the grade is B, >=150 the grade is C, otherwise the grade is D. Build a React Component that takes the student object as props and uses it to show all the students details, total marks and grade on the DOM as shown in the image below.

export function QuesSeven({student}){
    
    const {name, english, maths, computers} = student;
    const totalMarks = english + maths + computers;
    let grade = ""
    if(totalMarks >= 225){
        grade = "A";
    }
    else if(totalMarks >= 180){
        grade = "B";
    }
    else if(totalMarks >= 150){
        grade = "C"
    }
    else{
        grade = "D";
    }

    return (
        <div>
            <hr />
            <h2>Solution 7</h2>
            <p>Name: {name}</p>
            <p>English: {english}</p>
            <p>Maths: {maths}</p>
            <p>Computers: {computers}</p>
            <p>Total Marks: {totalMarks}</p>
            <p>Grade: {grade}</p>
        </div>
    );
}