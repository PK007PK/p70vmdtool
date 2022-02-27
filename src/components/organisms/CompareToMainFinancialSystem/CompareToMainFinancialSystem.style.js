import styled from "styled-components";

export const CompareToMainFinancialSystemStyle = styled.div`
    border: var(--componentsBorder);
    max-width: var(--mainWidth);
    margin: var(--componentsMargins);
    padding: var(--componentsPaddings);
    color: var(--mainTextColor);
    position: relative;

    .title {
        margin: 0;
        font-size: 1.6rem;
        font-weight: normal;
        position: absolute;
        top: -25px;
        left: 5px;
    }
`