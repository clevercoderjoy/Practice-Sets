import React, { useEffect, useState } from "react";
import "./App.css";

export const SolNine = ({ fetchNine }) => {
    const [product, setProduct] = useState({
        loading: true,
        allProducts: [],
        productsToDisplay: [],
    });
    const getProducts = async () => {
        try {
            const response = await fetchNine(
                "https://example.com/api/products"
            );
            const { status, data } = response;
            if (status === 200) {
                const sortedProduct = data.products.toSorted(function (a, b) {
                    return b.rating - a.rating;
                });
                setProduct((product) => ({
                    ...product,
                    loading: false,
                    allProducts: data.products,
                    productsToDisplay: sortedProduct,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };
    const filterProducts = (e) => {
        const valueToFilter = e.target.value;
        if (valueToFilter.length > 0) {
            const filteredProduct = product.allProducts.filter(
                ({ name }) => name === valueToFilter
            );
            setProduct((product) => ({
                ...product,
                productsToDisplay: filteredProduct,
            }));
        } else {
            setProduct((product) => ({
                ...product,
                productsToDisplay: product.allProducts,
            }));
        }
    };
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 9</h2>
            <h3>{product.loading && "Loading..."}</h3>
            <div style={{ display: product.loading ? "none" : "block" }}>
                <h3>Products</h3>
                <input
                    type="text"
                    onChange={(e) => filterProducts(e)}
                    placeholder="Search..."
                />
                {product.productsToDisplay.map(
                    ({ name, price, quantity, rating }, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid black",
                                margin: "10px",
                                padding: "10px",
                                textAlign: "left",
                                borderRadius: "10px",
                            }}
                        >
                            <span>{name}</span>
                            <span style={{ margin: "0 250px" }}>
                                Rating: {rating}
                            </span>
                            <p>Price: ${price}</p>
                            <p>Quantity: {quantity}</p>
                        </div>
                    )
                )}
            </div>
            <hr />
        </React.Fragment>
    );
};
