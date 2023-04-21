import React, { useEffect, useState } from "react";
import "./App.css";

export const SolOne = ({ fetchOne }) => {
    const [productData, setProductData] = useState({
        allProductDetails: [],
        clicked: false,
        dataFetched: false,
        name: "",
        price: 0,
        desc: "",
        src: "",
    });

    const getProducts = async () => {
        try {
            const response = await fetchOne("https://example.com/api/products");
            const { status, data } = response;
            if (status === 200) {
                setProductData((productData) => ({
                    ...productData,
                    allProductDetails: data.products,
                    dataFetched: true,
                }));
            }
        } catch (e) {
            console.log(e);
        }
    };

    const filterProduct = (productName) => {
        const getFilteredProducts = productData.allProductDetails.filter(
            ({ name }) => name === productName
        );
        setProductData((productData) => ({
            ...productData,
            clicked: true,
            name: getFilteredProducts[0].name,
            price: getFilteredProducts[0].price,
            desc: getFilteredProducts[0].desc,
            src: getFilteredProducts[0].src,
        }));
    };

    useEffect(() => {
        // getProducts();
    }, []);
    return (
        <React.Fragment>
            <h2>Solution 1</h2>
            <div>
                <div>
                    {productData.allProductDetails.map(({ name }, index) => (
                        <button onClick={() => filterProduct(name)} key={index}>
                            Show {name}
                        </button>
                    ))}
                </div>
                <div
                    style={{ display: productData.clicked ? "block" : "none" }}
                >
                    <img
                        style={{ width: "200px", height: "200px" }}
                        src={productData.src}
                        alt="image"
                    />
                    <h3>Name {productData.name}</h3>
                    <p>Price: Rs. {productData.price}</p>
                    <p>Description: {productData.desc}</p>
                </div>
            </div>
            <hr />
        </React.Fragment>
    );
};
