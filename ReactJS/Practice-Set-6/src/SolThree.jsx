import React, { useEffect, useState } from "react";
import "./App.css";

export const SolThree = ({ fetchThree }) => {
    const [habit, setHabit] = useState({ allHabits: [], loading: false });
    const getHabit = async () => {
        try {
            const response = await fetchThree("https://example.com/api/habits");
            const { status, data } = response;
            if (status === 200) {
                setHabit((habit) => ({
                    ...habit,
                    loading: true,
                    allHabits: [...data.habits],
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        // getHabit();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 3</h2>
            <h3>{!habit.loading && "Loading..."}</h3>
            <ul style={{ display: !habit.loading ? "none" : "block" }}>
                {habit.allHabits.map(
                    ({ title, desc, daysFollowed, daysSkipped }, index) => (
                        <li key={index} style={{textAlign: "left"}}>
                            <h3>{title}</h3>
                            <p>{desc}</p>
                            <h4>Days Followed: {daysFollowed}</h4>
                            <h4>Days Skipped: {daysSkipped}</h4>
                            <hr />
                        </li>
                    )
                )}
            </ul>
            <hr />
        </React.Fragment>
    );
};
