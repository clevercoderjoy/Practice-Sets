import React, { useContext } from 'react';
import styled from 'styled-components';

import { DataContext } from '../contexts/DataContext';
import { Link } from 'react-router-dom';

function Home() {
    const { commerce } = useContext(DataContext);
    const { addToCart } = useContext(DataContext);
    const { addToWishList } = useContext(DataContext);

    return (
        <>
            <StyledDiv>
                {commerce.loading && "Loading..."}
                {commerce.error !== "" && commerce.errorMsg}
                <StyledH2>Total Products: {commerce.products.length}</StyledH2>
                <StyledUl>
                    {
                        commerce.products.map((product, index) => {
                            const { id, name, price, quantity, category, brand } = product;
                            return (<StyledLi key={id}>
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
                                    <PriceAndQuantity>
                                        <StyledContainer>
                                            <StyledTitle>Price: </StyledTitle>
                                            <StyledDescription>INR {price}/-</StyledDescription>
                                        </StyledContainer>
                                        <StyledContainer>
                                            <StyledTitle>Quantity Available: </StyledTitle>
                                            <StyledDescription>{quantity - commerce.cart[index]?.cartQuantity || (quantity - commerce.cart[index]?.cartQuantity === 0 ? "0" : quantity)}</StyledDescription>
                                        </StyledContainer>
                                    </PriceAndQuantity>
                                    <StyledContainer>
                                        <StyledButtons>
                                            <StyledButton onClick={() => addToCart(product)}>Add to Cart</StyledButton>
                                            <StyledLink to={`/productCard/${id}`}><StyledButton>See More</StyledButton></StyledLink>
                                            <StyledButton onClick={() => addToWishList(product)}>Add to WishList</StyledButton>
                                        </StyledButtons>
                                    </StyledContainer>
                                </StyledCard>
                            </StyledLi>)
                        })
                    }
                </StyledUl>
            </StyledDiv>
        </>
    )
}

export default Home

export const StyledH2 = styled.h2`
    margin: 0 0 1rem 0;
`;
export const StyledDiv = styled.div`
    background: #013870;
    border-radius: 5px;
    padding: 1rem;
    margin: 1rem;
    text-align: center;
    color: white;
`;
export const StyledUl = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
`;
export const StyledLi = styled.li`
    display: flex;
    flex-direction: column;
    border: 3px solid #01e08f;
    margin: 1rem;
    padding: 1rem;
    border-radius: 5px;
`;
export const StyledCard = styled.div`
    
`;
export const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const StyledTitle = styled.div`
    margin-right: 1rem;
`;
export const StyledDescription = styled.div`
    text-align: left;
`;
export const PriceAndQuantity = styled.div`
    display: flex;
    justify-content: space-between;
    border: 3px solid #01e08f;
    padding: 1rem;
    border-radius: 5px;
    margin: 1rem;
`;
export const StyledButtons = styled.div`
    display: flex;
    margin: auto;
`;
export const StyledButton = styled.button`
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
export const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`;