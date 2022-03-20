import styled from "styled-components";

export const MainFinancialSystemStyle = styled.div`
    border: 1px solid black;
    max-width: 386px;
    position: relative;
    padding: var(--componentsPaddings);
    margin-bottom: 75px;

    .componentTitleBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: -50px;
        left: 0;
        width: 100%;
    }

    .title {
        color: var(--mainTextColor);
    }

    .bottomButtonBar {
        position: absolute;
        right: 0;
        bottom: -30px;
        display: flex;
        align-items: center;

        & > * {
            margin-left: 4px;
        }
    }
`