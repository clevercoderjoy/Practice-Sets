import React from 'react';
import styled from 'styled-components';

function SolOne() {
    return (
        <>
            <hr />
            <StyledH1>Solution 1</StyledH1>
            <StyledForm action="/">
                <StyledLabel htmlFor="name">Name:</StyledLabel>
                <StyledInput type="text" id="name" />
                <StyledLabel htmlFor="email">Email:</StyledLabel>
                <StyledInput type="email" id="email" />
                <StyledLabel htmlFor="message">Message:</StyledLabel>
                <StyledTextArea id="message" />
                <StyledButton>Submit</StyledButton>
            </StyledForm>
            <hr />
        </>
    )
}

export default SolOne

export let StyledH1 = styled.h1`
    font-size: 2rem;
`
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    margin: 1rem;
    padding: 1rem;
    border-radius: 5px;
`
export const StyledLabel = styled.label`
    text-align: left;
    margin: 1rem 0;
    font-size: 1rem;
`
export const StyledInput = styled.input`
    border-radius: 5px;
    border: 1px solid black;
    padding: 0.5rem;
`
const StyledTextArea = styled(StyledInput)`
    resize: none;
    height: 5rem;
`
export const StyledButton = styled.button`
    margin: 1rem 0;
    padding: 0.5rem;
    border-radius: 5px;
    border: none;
    color: white;
    background: #323232;
    font-size: 20px;
`