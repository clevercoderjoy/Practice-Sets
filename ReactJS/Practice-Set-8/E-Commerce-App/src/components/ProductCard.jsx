import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { DataContext } from '../contexts/DataContext';
import { StyledCard, StyledDiv, StyledLink } from './Home';

function ProductCard() {
    const { productId } = useParams();
    const { commerce } = useContext(DataContext);
    const { addToCart } = useContext(DataContext);
    const { addToWishList } = useContext(DataContext);
    const product = commerce.products.filter((item) => item.id === Number(productId));

    return (
        <>
            <StyledDiv>
                <StyledCard>
                    <StyledContainer>
                        <StyledTitle>Name: </StyledTitle>
                        <StyledDescription>{product[0]?.name}</StyledDescription>
                    </StyledContainer>
                    <StyledContainer>
                        <StyledTitle>Category: </StyledTitle>
                        <StyledDescription>{product[0]?.category}</StyledDescription>
                    </StyledContainer>
                    <StyledContainer>
                        <StyledTitle>Brand: </StyledTitle>
                        <StyledDescription>{product[0]?.brand}</StyledDescription>
                    </StyledContainer>
                    <StyledContainer>
                        <StyledTitle>Description: </StyledTitle>
                        <StyledDescription>{product[0]?.description}</StyledDescription>
                    </StyledContainer>
                    <PriceAndQuantity>
                        <StyledContainer>
                            <StyledTitle>Price: </StyledTitle>
                            <StyledDescription>INR {product[0]?.price}/-</StyledDescription>
                        </StyledContainer>
                        {/* <StyledContainer>
                            <StyledTitle>Quantity: </StyledTitle>
                            <StyledDescription>{product[0]?.quantity - commerce.cart[0]?.cartQuantity || (product[0]?.quantity - commerce.cart[0]?.cartQuantity === 0 ? "0" : product[0]?.quantity)}</StyledDescription>
                        </StyledContainer> */}
                    </PriceAndQuantity>
                    <StyledContainer>
                        <StyledButtons>
                            <StyledButton onClick={() => addToCart(product[0])}>Add to Cart</StyledButton>
                            <StyledLink to={`/`}><StyledButton>See All Products</StyledButton></StyledLink>
                            <StyledButton onClick={() => addToWishList(product[0])}>Add to WishList</StyledButton>
                        </StyledButtons>
                    </StyledContainer>
                </StyledCard>
            </StyledDiv>
        </>
    )
}

export default ProductCard

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const StyledTitle = styled.div`
    margin-right: 1rem;
`;
const StyledDescription = styled.div`
    text-align: left;
`;
const PriceAndQuantity = styled.div`
    display: flex;
    justify-content: center;
    border: 3px solid #01e08f;
    padding: 1rem;
    border-radius: 5px;
    margin: 1rem;
`;
const StyledButtons = styled.div`
    display: flex;
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