import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Footer() {
    return (
        <>
            <StyledH4>Made by <StyledLink to="https://clevercoderjoy.bio.link/" target='_blank'>clevercoderjoy {"{...}"}</StyledLink></StyledH4>
        </>
    )
}

export default Footer

const StyledH4 = styled.h4`
    text-align: center;
    margin: 1rem;
    padding: 1rem;
    background: #013870;
    border-radius: 5px;
    color: white;

`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover{
        color: #01e08f;
    }
`;