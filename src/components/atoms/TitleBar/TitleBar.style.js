import styled from "styled-components";

export const TitleBarStyle = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    width: var(--mainWidth);
    color: var(--mainTextColor);
    margin-bottom: 10px;

    .logo {
        width: 21px;
        height: 21px;
        margin-right: 7px
    }

    span {
        font-weight: 100;
        font-size: 15px;
    }

`