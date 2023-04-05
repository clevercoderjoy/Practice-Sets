import "./App.css";

// Create an array of objects representing students marks out of 100. Each object consists of: id, name and marks. Build a React component that calculates the mean marks of all the students to see if the institute passes the criteria of the certification.
// If the mean is above 80, display on the DOM Certification Approved
// If the mean is below 80, display on the DOM Certification Not Approved

export function QuesTen({students}) {

    const mean = students.reduce((acc, curr) => (acc + curr.marks), 0) / students.length;
    const res = ((mean > 80) ? "Certification Approved" : "Certification Not Approved");

    return (
        <div>
            <h2>Solution 10</h2>
            <p>{res}</p>
            <hr />
        </div>
    );
}
