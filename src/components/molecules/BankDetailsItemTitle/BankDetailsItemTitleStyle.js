import styled from "styled-components";

export const BankDetailsItemStyle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--mainTextColor);

    .title {
        margin: 0;
        font-size: var(--mainFontSize);
        font-weight: normal;
    }

    .buttonBar {
        display: none;
        justify-content: flex-end;
        align-items: center;
        margin-right: 5px;
        
        & > * {
            margin-left: 5px;
        }
    }

    .smallButton {
        transition: var(--transition);
        cursor: pointer;

        &:hover {
            background-color: var(--colorBankKey);
            color: var(--mainTextColor);
        }
    }
`