import styled from "styled-components";

export const SummaryStyle = styled.div`
    /* color: var(--mainTextColor); */
    color: black;
    padding: var(--componentsPaddings);
    padding-top: 15px;
    width: var(--mainWidth);
    /* border: var(--componentsBorder); */
    background-color: white;
    /* margin-bottom: 30px; */
    position: relative;
    box-shadow: var(--bs);

    .title {
        position: absolute;
        top: -50px;
        color: var(--mainTextColor);
    }
`