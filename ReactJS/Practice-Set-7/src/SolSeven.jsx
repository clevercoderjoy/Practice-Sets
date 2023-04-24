import React, { useEffect, useState } from "react";
import "./App.css";

export const SolSeven = ({ fetchSeven }) => {
    const [product, setProduct] = useState({
        loading: true,
        allProducts: [],
        productsToDisplay: [],
    });
    const getProducts = async () => {
        try {
            const response = await fetchSeven(
                "https://example.com/api/products"
            );
            const { status, data } = response;
            if (status === 200) {
                setProduct((product) => ({
                    ...product,
                    loading: false,
                    allProducts: data.products,
                    productsToDisplay: data.products,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };
    const lowToHigh = () => {
        const sortedProduct = product.allProducts.toSorted(function (a, b) {
            return a.price - b.price;
        });
        setProduct((product) => ({
            ...product,
            productsToDisplay: sortedProduct,
        }));
    };
    const highToLow = () => {
        const sortedProduct = product.allProducts.toSorted(function (a, b) {
            return b.price - a.price;
        });
        setProduct((product) => ({
            ...product,
            productsToDisplay: sortedProduct,
        }));
    };
    const reset = () => {
        setProduct((product) => ({
            ...product,
            productsToDisplay: product.allProducts,
        }));
    };
    useEffect(() => {
        // getProducts();
    }, []);

    return (
        <React.Fragment>
            <h2>Solution 7</h2>
            <h3>{product.loading && "Loading..."}</h3>
            <div style={{ display: product.loading ? "none" : "block" }}>
                <button onClick={lowToHigh}>Low To High</button>
                <button onClick={highToLow}>High To Low</button>
                <button onClick={reset}>Reset</button>
                <ul>
                    {product.productsToDisplay.map(
                        ({ name, description, price, quantity }, index) => (
                            <li key={index}>
                                <h3>{name}</h3>
                                <p>{description}</p>
                                <p>${price}</p>
                                <p>Quantity: {quantity}</p>
                            </li>
                        )
                    )}
                </ul>
            </div>
            <hr />
        </React.Fragment>
    );
};
