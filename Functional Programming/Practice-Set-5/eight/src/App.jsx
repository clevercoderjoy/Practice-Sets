import "./App.css";

// 8. Create an array of objects representing movies in your watchlist. Each object has the following properties: id, title, director, and runtime. Write a React component where you can create an array of movies and generate an ordered list of movies, where each list item displays the movie's title, director, and runtime.
function App() {
    let watchlist = [
        {
            id: 1,
            title: "The Godfather",
            director: "Francis Ford Coppola",
            runtime: 175,
        },
        {
            id: 2,
            title: "The Shawshank Redemption",
            director: "Frank Darabont",
            runtime: 142,
        },
        {
            id: 3,
            title: "The Dark Knight",
            director: "Christopher Nolan",
            runtime: 152,
        },
        {
            id: 4,
            title: "Pulp Fiction",
            director: "Quentin Tarantino",
            runtime: 154,
        },
        {
            id: 5,
            title: "Forrest Gump",
            director: "Robert Zemeckis",
            runtime: 142,
        },
    ];

    return <div className="App">
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.id}>Title: {movie.title}, Director: {movie.director}, Runtime: {movie.runtime}</li>
        ))}
      </ul>
    </div>;
}

export default App;
