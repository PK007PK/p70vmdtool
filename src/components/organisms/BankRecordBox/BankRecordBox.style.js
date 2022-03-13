import styled from "styled-components";

export const BankRecordBoxStyle = styled.div`
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

    .reset {
        position: absolute;
        bottom: -30px;
        right: 5px;
    }
`