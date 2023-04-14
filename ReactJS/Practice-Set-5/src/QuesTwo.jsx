import React, { useEffect, useState } from "react";
import "./App.css";

// Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.
// a. Add a button, on click of which it displays only the items with more than 20 as quantity.
// In the above question after you have listed all the items, add a button which says “Filter by Price”. On click of the button, display only the items with price less than 100.

export const QuesTwo = ({ fetchProductsTwo }) => {
    const [arrays, setArrays] = useState({
        products: [],
        quantityGreaterThanTwenty: false,
        originalList: [],
        showLoading: false,
        priceGreaterThanHundred: false,
    });
    const getProducts = async () => {
        try {
            setArrays((arrays) => ({ ...arrays, showLoading: true }));
            const response = await fetchProductsTwo(
                "https://example.com/api/products"
            );
            const { status, data } = response;
            if (status === 200) {
                setArrays((arrays) => ({
                    ...arrays,
                    products: data.products,
                    originalList: data.products,
                }));
            }
            setArrays((arrays) => ({ ...arrays, showLoading: false }));
        } catch (e) {
            console.log(e);
        }
    };

    const toggleQuantityGreaterThanTwenty = () => {
        const filteredByQuantity = arrays.products.filter(
            ({ quantity }) => quantity > 20
        );
        if (!arrays.quantityGreaterThanTwenty) {
            setArrays((arrays) => ({
                ...arrays,
                products: filteredByQuantity,
            }));
        } else {
            setArrays((arrays) => ({
                ...arrays,
                products: arrays.originalList,
            }));
        }
        setArrays((arrays) => ({
            ...arrays,
            quantityGreaterThanTwenty: !arrays.quantityGreaterThanTwenty,
        }));
    };

    const togglePriceGreaterThanHundred = () => {
        if (!arrays.priceGreaterThanHundred) {
            const filteredPrice = arrays.products.filter(
                ({ price }) => price > 100
            );
            setArrays((arrays) => ({ ...arrays, products: filteredPrice }));
        } else {
            setArrays((arrays) => ({
                ...arrays,
                products: arrays.originalList,
            }));
        }
        setArrays((arrays) => ({
            ...arrays,
            priceGreaterThanHundred: !arrays.priceGreaterThanHundred,
        }));
    };

    useEffect(() => {
        // getProducts();
    }, []);

    return (
        <React.Fragment>
            <h2>Solution 2</h2>
            <p>{arrays.showLoading && "loading..."}</p>
            <div style={{ display: arrays.showLoading ? "none" : "block" }}>
                <h3>Products:</h3>
                <ul>
                    {arrays.products.map(({ name, price, quantity }, index) => (
                        <li key={index}>
                            {name} - Price: {price} - Quantity: {quantity}
                        </li>
                    ))}
                </ul>
                <button onClick={toggleQuantityGreaterThanTwenty}>
                    Show Products With Quantity More Than 20
                </button>
                <button onClick={togglePriceGreaterThanHundred}>
                    Filter By Price
                </button>
            </div>
            <hr />
        </React.Fragment>
    );
};
