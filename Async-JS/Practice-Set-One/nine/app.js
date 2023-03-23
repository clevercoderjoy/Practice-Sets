// Use this URL - https://example.com/api/data to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/api/data") {
                reject({
                    status: 500,
                    message: "Internal Server Error",
                });
            } else {
                resolve({
                    status: 200,
                    data: {
                        message: "Success",
                    },
                });
            }
        }, 2000);
    });
};

// Your Code here
const op = document.getElementById("op");
fakeFetch("https://example.com/api/data")
    .then((data) => console.log(data))
    .catch((error) => op.innerText = `Internal Server Error! The server crashed. Please try again in some time.`);

// Output on the DOM should be:
// Internal Server Error! The server crashed. Please try again in some time.
