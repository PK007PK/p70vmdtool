import styled from "styled-components";

interface StyledSpanProps {
    isBankKey: boolean, 
    isBankAccount: boolean, 
    bankAccountElement: boolean, 
    bankKeyElement: boolean,
    bankDetailsElementName: string,
    iSNotTheSame: boolean;
}

export const StyledSpan = styled.span<StyledSpanProps>`
    display: flex;
    width: 45px;
    height: 45px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    border: 1px solid gray;
    cursor: copy;
    background-color: ${({isBankKey, isBankAccount, bankAccountElement, bankKeyElement, iSNotTheSame}) => 
        !iSNotTheSame ? 'white'
        : isBankKey ? '#006064' 
        : isBankAccount ? 'var(--colorBankAccount)' 
        : bankAccountElement ? 'var(--colorBankAccount)'
        : bankKeyElement ? '#006064'
        : 'var(--colorOk)'
    };

    color: ${({iSNotTheSame}) => iSNotTheSame ? "var(--mainTextColor)" : "red" };

    margin-top: 3px;
    :nth-child(4n) {
        margin-right: 5px;
    }

    &:hover {
        color: white;
        background-color: black;
    }
`