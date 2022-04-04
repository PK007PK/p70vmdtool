import styled from "styled-components";

export const StyledSpan = styled.span`
    display: flex;
    width: 45px;
    height: 45px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: copy;
    background-color: ${({isBankKey, isBankAccount, bankAccountElement, bankKeyElement}) => 
        isBankKey ? 'var(--colorBankKey)' 
        : isBankAccount ? 'var(--colorBankAccount)' 
        : bankAccountElement ? 'var(--colorBankAccount)'
        : bankKeyElement ? 'var(--colorBankKey)'
        : 'var(--colorOk)'
    };

    border: 1px solid gray;
    color: ${({theSameAsMain}) => theSameAsMain ? "var(--mainTextColor)" : "red" };

    margin-top: 2px;
    :nth-child(4n) {
        margin-right: 2px;
    }

    &:hover {
        color: white;
        background-color: black;
    }
`