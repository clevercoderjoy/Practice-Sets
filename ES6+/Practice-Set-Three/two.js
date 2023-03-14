// Create a function that takes a product object as an argument and returns a string that includes the product name, price, and a message based on whether it is in stock or not.

// Your ES6 code here

const product = {
    name: 'Socks',
    price: 249,
    inStock: true,
};

const formatProduct = ({name, price, inStock}) => {
    let res  = `${name} costs INR ${price} and is `;
    if(inStock){
        return res += `in stock.`
    }
    else{
        return res += `not in stock`;
    }
}

const message = formatProduct(product);
console.log(message);
// Socks costs INR 249 and is in stock.