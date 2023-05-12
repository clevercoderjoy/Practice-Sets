import React from 'react';
import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import Home from './Home';
import Cart from './Cart';
import WishList from './WishList';
import ProductCard from './ProductCard';

function Header() {
    return (
        <>
            <StyledH1>E-Commerce App(kinda)</StyledH1>
            <StyledNav>
                <StyledNavLink to="/">Home</StyledNavLink>
                <StyledNavLink to="/cart">Cart</StyledNavLink>
                <StyledNavLink to="/wishList">WishList</StyledNavLink>
            </StyledNav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishList" element={<WishList />} />
                <Route path="/productCard/:productId" element={<ProductCard />} />
            </Routes>
        </>
    )
}

export default Header

const StyledH1 = styled.h1`
    text-align: center;
    font-size: 1.5rem;
    background: #013870;
    margin: 1rem;
    padding: 1rem;
    color: white;
    border-radius: 5px 5px 0 0;
    margin-bottom: 0;
    &:hover{
        color: #01e08f;
    }
`;
const StyledNav = styled.nav`
    text-align: center;
    background: #013870;
    padding: 0.2rem 1rem;
    border-radius: 0 0 5px 5px;
    font-size: 1.5rem;
    margin: 1rem;
    margin-top: 0;
`;
const StyledNavLink = styled(NavLink)`
    margin: 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    color: white;
    &.active{
        color: white;
        text-transform: upperCase;
        background: #01e08f;
        color: white;
        padding: 0.2rem 1rem;
        border-radius: 5px 5px 0 0;
        &:hover{
            color: white;
        }
    }
    &:hover{
        color: #01e08f;
    }
`;
