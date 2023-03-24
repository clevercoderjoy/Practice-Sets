// Use this URL - https://example.com/welcome to make a fake fetch call and display a welcome message to the user on the DOM. Welcome message (if provided) should be used else the default message of Welcome to the server should be shown. Message should be only shown if the user is logged in. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!url === "https://example.com/welcome") {
                reject({
                    status: 511,
                    message: "Network auth required",
                });
            } else {
                resolve({
                    status: 200,
                    data: {
                        logged: true,
                    },
                });
            }
        }, 2000);
    });
};

// your code here
const op = document.getElementById("op");
fakeFetch("https://example.com/welcome")
    .then((response) => ((response.status === 200) ? op.innerText = `Welcome` : op.innerText = `Network auth required`));
// Output: As per the response from server
