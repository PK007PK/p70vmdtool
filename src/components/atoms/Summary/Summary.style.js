import styled from "styled-components";

export const SummaryStyle = styled.div`
    /* color: var(--mainTextColor); */
    color: black;
    padding: var(--componentsPaddings);
    width: var(--mainWidth);
    /* border: var(--componentsBorder); */
    background-color: white;
    margin-bottom: 50px;
    position: absolute;

    .title {
        position: absolute;
        top: -50px;
        color: var(--mainTextColor);
    }
`