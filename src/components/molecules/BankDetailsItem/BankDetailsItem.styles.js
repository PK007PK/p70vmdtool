import styled from "styled-components";

export const BankDetailsItemStyle = styled.div`
    margin-bottom: 20px;

    .titleBar {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--mainTextColor);
    }

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

    .mainButton {
        display: flex;
        flex-wrap: wrap;
        padding: 2px;
        background-color: #455A64;
        margin-top: 2px;
        border: none; 
    }

    .ibanStatsBar {
        display: flex;
        justify-content: space-between;
        color: var(--mainTextColor);
    }

    &:hover .buttonBar {
        display: flex;
    }
`