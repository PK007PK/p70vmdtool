import styled from "styled-components";

export const BankDetailsItemStyle = styled.div`
    margin-bottom: 20px;

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
        animation: var(--animation);
    }
`