import styled from "styled-components";

export const ButtonStyle = styled.button`
    position: ${({absolute}) => absolute ? 'absolute' : 'static'};
    background: var(--mainTextColor);
    border: none;
    padding: 3px 10px;
    min-width: 70px;
    cursor: pointer;
`
