import styled from "styled-components";

export const StyledSpan = styled.span`
    display: block;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    font-size: 20px;
    background-color: ${({isOk}) => isOk ? '#C8E6C9' : "#FFCCBC"};
    /* color: ${({isOk}) => isOk ? 'black' : 'white'}; */
`