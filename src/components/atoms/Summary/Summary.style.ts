import styled from "styled-components";

export const SummaryStyle = styled.div`
    padding: var(--componentsPaddings);
    width: var(--mainWidth);
    box-shadow: var(--bs);
    padding-top: 15px;
    position: relative;

    .titleBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: -50px;
        right: 0px;
        width: 100%;
    }

    .title {
        color: var(--mainTextColor);
    }

    form {
        color: var(--mainTextColor);
    }

    .display {
        padding: 5px;
        color: black;
        background-color: white;
    }
`