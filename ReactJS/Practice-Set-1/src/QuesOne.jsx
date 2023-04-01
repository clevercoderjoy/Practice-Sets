import "./App.css"

// Build an EmployeeCard component in React to display name, designation and work experience of a person. Pass name, designation and work experience as props.

// The colour of “Designation:” should be green.
// The colour of “Experience:” should be blue.

export function QuesOne({person}){
    const {name, designation, workExperience} = person;
    return (
        <div>
            <hr />
            <h2>Solution 1</h2>
            <h3>Employee Card</h3>
            <p>Name: {name}</p>
            <p style={{color: "green"}}>Designation: {designation}</p>
            <p style={{color: "blue"}}>Work Experience: {workExperience}</p>
        </div>
    );
}