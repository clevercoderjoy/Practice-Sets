const JSONData = {
    store: {
        name: "The Bookstore",
        address: {
            street: "123 Main St",
            city: "Anytown",
            state: "CA",
            zip: "12345",
        },
        departments: [
            {
                name: "Fiction",
                manager: "John Smith",
                categories: [
                    {
                        name: "Mystery",
                        books: [
                            {
                                title: "The Girl with the Dragon Tattoo",
                                author: "Stieg Larsson",
                                isbn: "9780307473479",
                                price: 14.99,
                            },
                            {
                                title: "Gone Girl",
                                author: "Gillian Flynn",
                                isbn: "9780307588364",
                                price: 12.99,
                            },
                        ],
                    },
                    {
                        name: "Science Fiction",
                        books: [
                            {
                                title: "Dune",
                                author: "Frank Herbert",
                                isbn: "9780441172719",
                                price: 8.99,
                            },
                            {
                                title: "Ender's Game",
                                author: "Orson Scott Card",
                                isbn: "9780812550702",
                                price: 7.99,
                            },
                        ],
                    },
                ],
            },
            {
                name: "Non-Fiction",
                manager: "Alice Brown",
                categories: [
                    {
                        name: "History",
                        books: [
                            {
                                title: "A People's History of the United States",
                                author: "Howard Zinn",
                                isbn: "9780061965586",
                                price: 16.99,
                            },
                            {
                                title: "The Immortal Life of Henrietta Lacks",
                                author: "Rebecca Skloot",
                                isbn: "9781400052189",
                                price: 13.99,
                            },
                        ],
                    },
                    {
                        name: "Self-Help",
                        books: [
                            {
                                title: "The 7 Habits of Highly Effective People",
                                author: "Stephen R. Covey",
                                isbn: "9780743269513",
                                price: 10.99,
                            },
                            {
                                title: "How to Win Friends and Influence People",
                                author: "Dale Carnegie",
                                isbn: "9780671027032",
                                price: 9.99,
                            },
                        ],
                    },
                ],
            },
        ],
    },
};
// create an Object, category name as the key and an array of book titles of that category as value
// create an object where the key is the department name and the value is the average price of the books in that department

const resOne = (JSONData) => ;
console.log(resOne(JSONData));