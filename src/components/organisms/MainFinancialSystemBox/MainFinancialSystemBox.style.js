import styled from "styled-components";

export const MainFinancialSystemBoxStyle = styled.div`
    border: 1px solid black;
    max-width: 386px;
    position: relative;
    padding: var(--componentsPaddings);
    margin-bottom: 75px;

    .docTypeChanger {
        position: absolute;
        top: -32px;
        left: 0;
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