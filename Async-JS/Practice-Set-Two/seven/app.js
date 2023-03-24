// Use this URL - https://example.com/api/users to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM (Oops! Unexpected Error. Please try again.), as per the status received from the server. The error should be displayed in red colour. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/api/users") {
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
fakeFetch("https://example.com/api/users")
    .then((response) => console.log(response))
    .catch((error) => op.innerText = `Oops. Unexpected Error. Please try again.`);
// Output on the DOM should be (in red color):
// Oops. Unexpected Error. Please try again.