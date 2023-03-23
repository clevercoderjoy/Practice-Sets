import "./App.css";

// 3. Create an array of objects representing books in a library. Each object has the following properties: id, title, author, and rating. Write a React component where you can create an array of books and return an unordered list of books, where each list item displays the book's title, author, and rating.
function App() {
    const books = [
        {
            id: 1,
            title: "The Catcher in the Rye",
            author: "J.D. Salinger",
            rating: 4.0,
        },
        {
            id: 2,
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            rating: 4.5,
        },
        {
            id: 3,
            title: "The Hobbit",
            author: "J.R.R. Tolkien",
            rating: 4.2,
        },
        {
            id: 4,
            title: "The Hitchhiker's Guide to the Galaxy",
            author: "Douglas Adams",
            rating: 4.7,
        },
        {
            id: 5,
            title: "Harry Potter and the Philosopher's Stone",
            author: "J.K. Rowling",
            rating: 4.8,
        },
    ];

    return <div className="App">
      <ul>
      {books.map((book) => (
        <li key={book.id}>Title: {book.title}, Author: {book.author}, Ratings: {book.ratings}</li>
      ))}
      </ul>
    </div>;
}

export default App;
