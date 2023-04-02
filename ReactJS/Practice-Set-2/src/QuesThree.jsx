import "./App.css";

// Build a React component called UserProfile that receives an object representing a user as prop and display the details on the DOM.

export function QuesThree({user}){
    const {name, age, email} = user;
    return (
        <div>
            <h2>Solution 3</h2>
            <p>Name: {name}, Age: {age}, Email: {email}</p>
            <hr />
        </div>
    );
}