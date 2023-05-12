import React from 'react';
import styled from 'styled-components';

function SolThree() {
    return (
        <>
            <StyledH1>Solution 3</StyledH1>
            <hr />
            <StyledH2>Photo Gallery</StyledH2>
            <StyledDiv>
                <StyledNav>
                    <StyledLi className="active">All</StyledLi>
                    <StyledLi>Nature</StyledLi>
                    <StyledLi>Birds</StyledLi>
                    <StyledLi>Animals</StyledLi>
                </StyledNav>
                <StyledCards>
                    <StyledCard>Nature</StyledCard>
                    <StyledCard>Birds</StyledCard>
                    <StyledCard>Animals</StyledCard>
                </StyledCards>
            </StyledDiv>
            <hr />
        </>
    )
}

export default SolThree

const StyledH1 = styled.h1`
    font-size: 2rem;
`;
const StyledH2 = styled.h2`
    font-size: 1.5rem;
`;
const StyledDiv = styled.div`
    border-radius: 5px;
    margin: 1rem;
    padding: 1rem;
`;
const StyledNav = styled.nav`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    .active{
        background: #017bff;
        color: white;
        padding: 0.5rem;
        border-radius: 5px;
        font-weight: bold;
    }
`;
const StyledLi = styled.li`
    margin: 1.5rem;
`;
const StyledCards = styled.div`
    display: flex;
`;
const StyledCard = styled.div`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 1rem;
    height: 5rem;
    border-radius: 5px;
    width: 5rem;
`;