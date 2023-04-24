import React, { useEffect, useState } from "react";
import "./App.css";

export const SolSix = ({ fetchSix }) => {
    const [movies, setMovies] = useState({
        loading: true,
        allMovies: [],
        moviesToShow: [],
    });
    const getMovies = async () => {
        try {
            const response = await fetchSix("https://example.com/api/movies");
            const { status, data } = response;
            console.log(response);
            if (status === 200) {
                console.log(data);
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
    const filterMoviesByGenre = (e) => {
        const selectedDropdown = e.target.value;
        if (selectedDropdown === "all") {
            setMovies((movies) => ({
                ...movies,
                moviesToShow: movies.allMovies,
            }));
        } else {
            const filteredMovies = movies.allMovies.filter(
                ({ genre }) => genre === selectedDropdown
            );
            console.log(filteredMovies);
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
            <h2>Solution 6</h2>
            <h3>{movies.loading && "Loading..."}</h3>
            <div
                style={{
                    display: movies.loading ? "none" : "block",
                    textAlign: "left",
                }}
            >
                <h3>Movies</h3>
                <span>Filter By Genre: </span>
                <select name="movies" onChange={(e) => filterMoviesByGenre(e)}>
                    <option value="all">All</option>
                    <option value="Crime">Crime</option>
                    <option value="Drama">Drama</option>
                    <option value="Action">Action</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Action">Action</option>
                </select>
                <ul>
                    {movies.moviesToShow.map(
                        ({ title, year, genre }, index) => (
                            <li key={index}>
                                <p>{title}</p>
                                <p>{year}</p>
                                <p>{genre}</p>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <hr />
        </React.Fragment>
    );
};
