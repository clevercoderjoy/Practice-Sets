import React, { createContext, useEffect, useState } from 'react';
import { fakeFetch } from '../api/FakeFetch';

export const DataContext = createContext();

export function DataContextProvider({ children }) {
    const [commerce, setCommerce] = useState({ loading: true, products: [], cart: [], wishList: [], errorMsg: "" });
    const getProducts = async () => {
        try
        {
            const response = await fakeFetch("https://example.com/api/products");
            const { status, data } = response;
            if (status === 200)
            {
                setCommerce(commerce => ({ ...commerce, loading: false, products: data.products }));
            }
        }
        catch (e)
        {
            setCommerce(commerce => ({ ...commerce, loading: false, errorMsg: "404: Page Not Found" }));
        }
    };

    const addToCart = (product) => {
        const { id, name, price, quantity, category, brand } = product;
        const isProductPresent = commerce.cart.findIndex((item) => item.id === id);
        if (isProductPresent === -1)
        {
            setCommerce(commerce => ({ ...commerce, cart: [...commerce.cart, { ...product, cartQuantity: 1 }] }))
        }
        else
        {
            if (product.cartQuantity < quantity)
            {
                setCommerce(commerce => ({ ...commerce, cart: [...commerce.cart.map((item) => (item.id === id) ? { ...item, cartQuantity: item.cartQuantity + 1 } : item)] }))
            }
        }
    };
    const removeFromCart = (product) => {
        const { id, name, price, quantity, cartQuantity, category, brand } = product;
        if (product.cartQuantity > 1)
        {
            setCommerce(commerce => ({ ...commerce, cart: [...commerce.cart.map((item) => (item.id === id) ? { ...item, cartQuantity: item.cartQuantity - 1 } : item)] }))
        }
        else
        {
            setCommerce(commerce => ({ ...commerce, cart: commerce.cart.filter((item) => item !== product) }));
        }
    }
    const addToWishList = (product) => {
        const { id, name, price, quantity, cartQuantity, category, brand } = product;
        const isProductPresent = commerce.wishList.findIndex((item) => item.id === id);
        if (isProductPresent === -1)
        {
            setCommerce(commerce => ({ ...commerce, wishList: [...commerce.wishList, product] }));
        }
    }
    const removeFromWishList = (product) => {
        const { id, name, price, quantity, cartQuantity, category, brand } = product;
        const isProductPresent = commerce.wishList.findIndex((item) => item.id === id);
        if (isProductPresent !== -1)
        {
            setCommerce(commerce => ({ ...commerce, wishList: commerce.wishList.filter((item) => item !== product) }));
        }
    }

    useEffect(() => { getProducts() }, []);

    return (
        <DataContext.Provider value={{ commerce, addToCart, removeFromCart, addToWishList, removeFromWishList }}>{children}</DataContext.Provider>
    )
}