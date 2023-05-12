import React, { useContext } from 'react';
import styled from 'styled-components';

import {StyledH2} from "../components/Home";
import { DataContext } from '../contexts/DataContext';

function WishList() {
    const { commerce } = useContext(DataContext);
    const { removeFromWishList } = useContext(DataContext);
    return (
        <>
            <StyledDiv>
                <StyledH2>Total WishList Items: {commerce.wishList.length}</StyledH2>
                {commerce.wishList.length === 0 && "Go ahead... Add something to your WishList... Burn your money later..."}
                <StyledUl>
                    {
                        commerce.wishList.map((product, index) => {
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
                                                    <StyledDescription>{quantity - commerce.cart[index]?.cartQuantity || (quantity - commerce.cart[index]?.cartQuantity === 0 ? "0" : quantity)}</StyledDescription>
                                                </StyledContainer>
                                            </StyledButtons>
                                        </PriceAndQuantity>
                                        <StyledButton onClick={() => removeFromWishList(product)}>Remove from WishList</StyledButton>
                                    </StyledCard>
                                </StyledLi>)
                        })
                    }
                </StyledUl>
            </StyledDiv>
        </>
    )
}

export default WishList

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