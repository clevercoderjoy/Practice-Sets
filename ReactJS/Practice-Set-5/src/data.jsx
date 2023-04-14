export const fakeFetchUsersOne = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/api/users/status") {
                resolve({
                    status: 200,
                    message: "Success",
                    data: {
                        users: [
                            { name: "Raju", status: "Online" },
                            { name: "Pankaj", status: "Offline" },
                            { name: "Sakshi", status: "Offline" },
                            { name: "Kishore", status: "Offline" },
                        ],
                    },
                });
            } else {
                reject({
                    status: 404,
                    message: "No users Found",
                });
            }
        }, 2000);
    });
};

export const fakeFetchProductsTwo = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/api/products") {
                resolve({
                    status: 200,
                    message: "Success",
                    data: {
                        products: [
                            { name: "Color Pencils", price: 50, quantity: 40 },
                            { name: "Sketchpens", price: 110, quantity: 20 },
                            { name: "Erasor", price: 20, quantity: 20 },
                            { name: "Sharpner", price: 22, quantity: 30 },
                        ],
                    },
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

export const fakeFetchUserFour = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/api/user") {
                resolve({
                    status: 200,
                    message: "Success",
                    data: {
                        name: "Saroj",
                        image: "https://cdn.pixabay.com/photo/2016/07/11/15/43/woman-1509956_1280.jpg",
                        likes: 500,
                        comments: 10,
                    },
                });
            } else {
                reject({
                    status: 404,
                    message: "user data not found.",
                });
            }
        }, 2000);
    });
};

// You can use your own images if you wish

export const fakeFetchUsersFive = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (url === "https://example.com/api/users") {
                resolve({
                    status: 200,
                    message: "Success",
                    data: [
                        {
                            name: "Saroj",
                            image: "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
                            likes: 500,
                            comments: 10,
                        },
                        {
                            name: "Meeta",
                            image: "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
                            likes: 200,
                            comments: 1,
                        },
                        {
                            name: "Alia",
                            image: "https://cdn.pixabay.com/photo/2017/06/13/13/06/girl-2398822_1280.jpg",
                            likes: 100,
                            comments: 5,
                        },
                    ],
                });
            } else {
                reject({
                    status: 404,
                    message: "users data not found.",
                });
            }
        }, 2000);
    });
};