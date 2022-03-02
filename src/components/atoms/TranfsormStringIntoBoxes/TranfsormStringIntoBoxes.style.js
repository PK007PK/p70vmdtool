import styled from "styled-components";

export const StyledSpan = styled.span`
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    background-color: ${({isBankKey, isBankAccount, bankAccountElement, bankKeyElement}) => 
        isBankKey ? 'var(--colorBankKey)' 
        : isBankAccount ? 'var(--colorBankAccount)' 
        : bankAccountElement ? 'var(--colorBankAccount)'
        : bankKeyElement ? 'var(--colorBankKey)'
        : 'var(--colorOk)'
    };

    border: 1px solid gray;
    color: var(--mainTextColor);

    &:hover {
        color: white;
        background-color: black;
    }

    /* .isBankKey {
        background-color: blue;
    }

    .isBankAccount {
        background-color: red
    } */
`