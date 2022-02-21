import styled from "styled-components";

export const BankDetailsItemStyle = styled.div`
    padding: 10px;

    .titleBar {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--mainTextColor);
    }

    .title {
        margin: 0;
    }

    .count {}

    .ibanStatsBar {
        display: flex;
        justify-content: space-between;
        color: var(--mainTextColor);
    }

    p {}
    button {
        display: flex;
        flex-wrap: wrap;
        padding: 2px;
        background-color: #455A64;
        margin-top: 2px;
        border: none; 
    }
`