import styled from "styled-components";

export const BlockOfButtonsStyle = styled.div`
    /* border: 1px solid black; */
    padding: 20px 10px;
    width: var(--mainWidth);
    margin-bottom: 50px;
    position: relative;
    background-color: ${({allOk}) => allOk ? "#B2DFDB" : "#546E7A" };
    /* background-color: #B2DFDB; */

    .title {
        position: absolute;
        top: -50px;
        left: 10px;
        display: block;
        background-color: black;
        color: #ECEFF1;
        padding: 3px 10px;
    }
`