import React from 'react'
import styled from 'styled-components';
import { StyledH1, StyledInput, StyledLabel, StyledButton } from './SolOne';

function SolTwo() {
    return (
        <>
            <StyledH1>SolTwo</StyledH1>
            <hr />
            <StyledDiv>
                <Styled_h2>Login</Styled_h2>
                <StyledLabel htmlFor='email'>Email</StyledLabel>
                <StyledInput id="email" type="email" />
                <StyledLabel htmlFor='password'>Password</StyledLabel>
                <StyledInput id='password'/>
                <LoginButton>Login</LoginButton>
                <SpanForgotPassword>Forgot Password?</SpanForgotPassword>
            </StyledDiv>
            <hr />
        </>
    )
}

export default SolTwo

const Styled_h2 = styled.h2`
    font-size: 1.5rem;
`;
const StyledDiv = styled.div`
    width: 300px;
    border-radius: 5px;
    margin: 1rem auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;
const LoginButton = styled(StyledButton)`
    background: #017bff;
`;
const SpanForgotPassword = styled.span`
    color: #017bff;
    font-weight: bold;
    margin: 1rem;
`;