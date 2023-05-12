import React, { useContext } from 'react';
import styled from 'styled-components';

import { DataContext } from '../contexts/DataContext';
import { StyledH2 } from "./Home";

function Cart() {
    const { commerce } = useContext(DataContext);
    const { addToCart } = useContext(DataContext);
    const { removeFromCart } = useContext(DataContext);
    return (
        <>
            <StyledDiv>
                <StyledH2>Total Cart Items: {commerce.cart.length}</StyledH2>
                {commerce.cart.length === 0 && "Go ahead... Buy something... Burn your money..."}
                <StyledUl>
                    {
                        commerce.cart.map((product, index) => {
                            const { id, name, price, quantity, cartQuantity, category, brand, description } = product;
                            return (
                                <StyledLi key={index}>
                                    <StyledCard>
                                        <StyledContainer>
                                            <StyledTitle>Name: </StyledTitle>
                                            <StyledDescription>{name}</StyledDescription>
                                        </StyledContainer>
                                        <StyledContainer>
                                            <StyledTitle>Category: </StyledTitle>
                                            <StyledDescription>{category}</StyledDescription>
                                        </StyledContainer>
                                        <StyledContainer>
                                            <StyledTitle>Brand: </StyledTitle>
                                            <StyledDescription>{brand}</StyledDescription>
                                        </StyledContainer>
                                        <StyledContainer>
                                            <StyledTitle>Description: </StyledTitle>
                                            <StyledDescription>{description}</StyledDescription>
                                        </StyledContainer>
                                        <PriceAndQuantity>
                                            <StyledButtons>
                                                <StyledContainer>
                                                    <StyledTitle>Price: </StyledTitle>
                                                    <StyledDescription>INR {price}/-</StyledDescription>
                                                </StyledContainer>
                                                <StyledContainer>
                                                    <StyledTitle>Quantity: </StyledTitle>
                                                    <StyledButton onClick={() => addToCart(product)}>+</StyledButton>
                                                    <StyledDescription>{cartQuantity}</StyledDescription>
                                                    <StyledButton onClick={() => removeFromCart(product)}>-</StyledButton>
                                                </StyledContainer>
                                            </StyledButtons>
                                        </PriceAndQuantity>
                                        <StyledButton onClick={() => removeFromCart(product)}>Remove from Cart</StyledButton>
                                    </StyledCard>
                                </StyledLi>)
                        })
                    }
                </StyledUl>
            </StyledDiv>
        </>
    )
}

export default Cart

const StyledDiv = styled.div`
    background: #013870;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    text-align: center;
    color: white;
`;
const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
`;
const StyledLi = styled.li`
    display: flex;
    flex-direction: column;
    border: 3px solid #01e08f;
    margin: 1rem;
    padding: 1rem;
    border-radius: 5px;
`;
const StyledCard = styled.div`
    
`;
const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const StyledTitle = styled.div`
    margin-right: 0.5rem;
`;
const StyledDescription = styled.div`
    text-align: left;
`;
const PriceAndQuantity = styled.div`
    border: 3px solid #01e08f;
    padding: 1rem;
    border-radius: 5px;
    margin: 1rem;
`;
const StyledButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
`;
const StyledButton = styled.button`
    background: #013870;
    border: none;
    border-radius: 5px;
    border: 3px solid #01e08f;
    padding: 0.5rem 1rem;
    color: white;
    font-weight: bold;
    font-size: 16px;
    margin: 1rem;
    &:hover{
        background: tomato;
        border: 3px solid #01e08f;
    }
`;