import React, { useEffect, useState } from "react";
import "./App.css";

export const SolSix = ({ fetchSix }) => {
    const [habit, setHabit] = useState({
        allHabit: [],
        habitHeading: "UnArchived",
        habitsToDisplay: [],
        showArchived: false,
        loading: true,
    });
    const filterUnArchived = (data) => {
        const filteredHabit = data.habits.filter(
            ({ archived }) => archived === false
        );
        setHabit((habit) => ({ ...habit, habitsToDisplay: filteredHabit }));
    };
    const getHabit = async () => {
        try {
            const response = await fetchSix("https://example.com/api/habits");
            const { status, data } = response;
            if (status === 200) {
                filterUnArchived(data);
                setHabit((habit) => ({
                    ...habit,
                    allHabit: data.habits,
                    loading: false,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };
    const showArchivedHabits = () => {
        const filterHabits = habit.allHabit.filter(
            ({ archived }) => archived === true
        );
        setHabit((habit) => ({
            ...habit,
            habitHeading: "Archived",
            habitsToDisplay: filterHabits,
        }));
    };
    useEffect(() => {
        // getHabit();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 6</h2>
            <h3>{habit.loading && "Loading..."}</h3>
            <div style={{ display: !habit.loading ? "block" : "none" }}>
                <h3>{habit.habitHeading}</h3>
                {habit.habitsToDisplay.map(
                    ({ title, desc, daysFollowed, daysSkipped }, index) => (
                        <div style={{ textAlign: "left" }} key={index}>
                            <span style={{ fontWeight: "bold" }}>{title}</span>
                            <br />
                            <span>{desc}</span>
                            <br />
                            <span>
                                <strong>Days Followed: </strong>
                                {daysFollowed}
                            </span>
                            <br />
                            <span>
                                <strong>Days Skipped: </strong>
                                {daysSkipped}
                            </span>
                            <hr />
                        </div>
                    )
                )}
                <button onClick={showArchivedHabits}>Show Archived</button>
            </div>
            <hr />
        </React.Fragment>
    );
};
