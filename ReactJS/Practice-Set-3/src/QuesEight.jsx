import "./App.css";

// Given an array of objects representing people who donated money to the NGO. Each object consists of: id, name, amount. Build a React component that takes the data as props and shows the total donation collected on the DOM. Output should be in the format: Total Donation Collected: _amount_

export function QuesEight({ donations }) {
    return (
        <div>
            <h2>Solution 8</h2>
            <p>
                Total Donation Collected:{" "}
                {donations.reduce((acc, curr) => acc + curr.Donation, 0)}
            </p>
            <hr />
        </div>
    );
}
