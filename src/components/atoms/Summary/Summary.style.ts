import styled from "styled-components";

export const SummaryStyle = styled.div`
    padding: var(--componentsPaddings);
    width: var(--mainWidth);
    box-shadow: var(--bs);
    color: black;
    padding-top: 15px;
    background-color: white;
    position: relative;

    .title {
        color: var(--mainTextColor);
        position: absolute;
        top: -50px;
    }
`