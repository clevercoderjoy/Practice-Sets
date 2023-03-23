// EXAMPLE QUESTION: (Solution has been provided for this question for your understanding)
// Use this URL - https://example.com/api/itemlist to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/api/itemlist") {
                reject({
                    status: 404,
                    message: "Items list not found.",
                });
            } else {
                resolve({
                    status: 200,
                    data: {
                        message: "Success",
                        data: [
                            { itemName: "Bread", price: 30 },
                            { itemName: "Water Bottle", price: 50 },
                            { itemName: "Dairy Milk", price: 20 },
                        ],
                    },
                });
            }
        }, 2000);
    });
};

// Your Code here (Solution Given)
const op = document.getElementById("op");

fakeFetch("https://example.com/api/itemlist")
    .then((data) => op.innerText = `Status: ${data.status}. Message: ${data.message}`)
    .catch((err) => {
        op.innerText = `Status: ${err.status}. Message: ${err.message}`
    });

// Output on the DOM should be:
// The data you are looking for, does not exist.
