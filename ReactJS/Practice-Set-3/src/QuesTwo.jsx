import "./App.css";

// Given an array of objects with cartoon character details as: id, name, superpower, magnitude. Build a React component and display all details of those characters whose magnitude is greater than 5.

// Use the cartoons data from above question (2) and build a React component to display only the names of characters whose magnitude is an even number. Use h1 tag to display names. Pass the entire data as props.

// Use the cartoons data from above question (2) and build a React component that takes the superpower ”Intelligence”, as prop and display the details of the character having that super power. Show details on DOM in the format “name - superpower - magnitude”.

export function QuesTwo({ cartoons, requiredSuperpower }) {
    return (
        <div>
            <h2>Solution 2</h2>
            <ul>
                {cartoons.map(({ id, name, superpower, magnitude }) =>
                    magnitude > 5 ? (
                        <li key={id}>
                            {name}, {superpower}, {magnitude}
                        </li>
                    ) : (
                        ""
                    )
                )}
            </ul>
            <hr />
            <h2>Solution 3</h2>
            <ul>
                {cartoons.map(({ id, name, superpower, magnitude }) =>
                    magnitude % 2 === 0 ? (
                        <li key={id}>
                            {name}, {superpower}, {magnitude}
                        </li>
                    ) : (
                        ""
                    )
                )}
            </ul>
            <hr />
            <h2>Solution 4</h2>
            <ul>
                {
                    cartoons.map(({ id, name, superpower, magnitude }) => ((superpower === requiredSuperpower) ? (<li key={id}>{name} {superpower} {magnitude}</li>) : ""))
                }
            </ul>
        </div>
    );
}
