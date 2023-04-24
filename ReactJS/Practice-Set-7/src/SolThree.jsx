import React, { useEffect, useState } from "react";
import "./App.css";

export const SolThree = ({ fetchThree }) => {
    const [movies, setMovies] = useState({
        loading: true,
        moviesToShow: [],
        allMovies: [],
    });
    const getMovies = async () => {
        try {
            const response = await fetchThree("https://example.com/api/movies");
            const { status, data } = response;
            if (status === 200) {
                setMovies((movies) => ({
                    ...movies,
                    loading: false,
                    allMovies: data,
                    moviesToShow: data,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };

    const filterMovies = (e) => {
        const currentSelect = e.target.value;
        if (currentSelect === "all") {
            setMovies((movies) => ({
                ...movies,
                moviesToShow: movies.allMovies,
            }));
        } else {
            const filteredMovies = movies.allMovies.filter(
                ({ year }) => year === Number(currentSelect)
            );
            setMovies((movies) => ({
                ...movies,
                moviesToShow: filteredMovies,
            }));
        }
    };
    useEffect(() => {
        // getMovies();
    }, []);

    return (
        <React.Fragment>
            <h2>Solution 3</h2>
            <h3>{movies.loading && "Loading..."}</h3>
            <div style={{ display: movies.loading ? "none" : "block" }}>
                <select name="movies" onChange={(e) => filterMovies(e)}>
                    <option value="all">All</option>
                    <option value="2007">2007</option>
                    <option value="2008">2008</option>
                    <option value="2009">2009</option>
                    <option value="2010">2010</option>
                </select>
                <ul>
                    {movies.moviesToShow.map(
                        ({ title, year, rating }, index) => (
                            <li key={index}>
                                <p>Name: {title}</p>
                                <p>Year: {year}</p>
                                <p>Ratings: {rating}</p>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <hr />
        </React.Fragment>
    );
};
