import { useEffect, useState } from "react";
import "./App.css";

// Create a React component that fetches products data from an API endpoint using useEffect hook and display products (name, price, quantity) as a list on the screen using the useState hook.
// a. Add a button, on click of which it displays only the items with more than 20 as quantity.

export const QuesTwo = ({ fetchProductsTwo }) => {
    const [arrays, setArrays] = useState({products:[], showOriginal: true, originalProducts: []});
    // const [products, setProducts] = useState([]);
    // const [originalProducts, setOriginalProducts] = useState([]);
    // const [showOriginal, setShowOriginal] = useState(true);

    const getProducts = async () => {
        try {
            const response = await fetchProductsTwo(
                "https://example.com/api/products"
            );
            const { status, data } = response;
            if (status === 200) {
                setArrays({...arrays,  products: data.products});
                setArrays({...arrays, originalProducts: data.products})
                // setOriginalProducts(data.products);
            }
        } catch (e) {
            console.log(e);
        }
    };

    const getProductsGreaterThanTwenty = () => {
        const filteredProducts = arrays.products.filter(
            ({ quantity }) => quantity > 20
        );
        if(arrays.showOriginal){
            setArrays({...arrays, products: arrays.originalProducts});
        }
        else{
            setArrays({...arrays, products: filteredProducts});
            // setProducts(filteredProducts);
        }
        // setShowOriginal(!showOriginal);
        setArrays({...arrays, showOriginal: !arrays.showOriginal})
    };

    // const filterByPrice = () => {
    //     // const filterPrice = products.filter(({price}) => price > 100);
    //     // setProducts([...filterPrice]);
    // };

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <h2>Solution 2</h2>
            <h3>Products:</h3>
            <ul>
                {arrays.products.map(({ name, price, quantity }, index) => (
                    <li key={index}>
                        {name} - Rs.{price} - Quantity: {quantity}
                    </li>
                ))}
            </ul>
            <button onClick={getProductsGreaterThanTwenty}>
                Show Products With Quantity More Than 20
            </button>
            {/* <button onClick={filterByPrice}>Filter By Price</button> */}
            <hr />
        </div>
    );
};
