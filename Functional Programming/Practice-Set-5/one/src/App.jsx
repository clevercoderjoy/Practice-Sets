import "./App.css";

function App() {
    const movies = [
        { id: 1, title: "movieOne", director: "directorOne" },
        { id: 2, title: "movieTwo", director: "directorTwo" },
        { id: 3, title: "movieThree", director: "directorThree" },
        { id: 4, title: "movieFour", director: "directorFour" },
    ];
    const total = 45;

    return (
        <div className="App">
            <h1>Movies</h1>
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>{movie.title} : {movie.director}</li>
              ))}
            </ul>
        </div>
    );
}

export default App;
