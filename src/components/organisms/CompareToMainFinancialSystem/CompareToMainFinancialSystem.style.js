import styled from "styled-components";

export const CompareToMainFinancialSystemStyle = styled.div`
    border: var(--componentsBorder);
    max-width: var(--mainWidth);
    margin: var(--componentsMargins);
    padding: var(--componentsPaddings);
    color: var(--mainTextColor);
    position: relative;

    .title {
        position: absolute;
        top: -30px;
        left: -2px;
        margin: 0;
        font-size: 1.6rem;
        font-weight: normal;
    }
`