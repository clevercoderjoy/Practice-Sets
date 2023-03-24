// Use this URL - https://example.com/api/productlist to make a fake fetch call and print the total price of all the products. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/api/productlist") {
                resolve({
                    status: 200,
                    message: "Success",
                    data: [
                        { itemName: "Shoes", price: 100, quantity: 2 },
                        { itemName: "Hat", price: 350, quantity: 1 },
                        { itemName: "Tshirt", price: 410, quantity: 5 },
                    ],
                });
            } else {
                reject({
                    status: 404,
                    message: "Items list not found.",
                });
            }
        }, 2000);
    });
};

// Your Code here
const op = document.getElementById("op");
fakeFetch("https://example.com/api/productlist")
    .then((response) => {
        const {data} = response;
        op.innerText = `Total: ${data.reduce((acc, curr) => acc += (curr.price * curr.quantity), 0)}`;
    });
// Output on the DOM should be:
// Total: INR 2600
