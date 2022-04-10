import styled from "styled-components";

export const AppLogoBarStyle = styled.div`
    display: flex;
    position: relative;
    width: var(--mainWidth);
    color: var(--mainTextColor);
    margin-bottom: 50px;
    width: 90px;
    height: 90px;
    margin-top: 20px;

    .logo {
        width: 90px;
        height: 90px;
    }

    .sign {
        width: 90px;
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        background-color: var(--darkBackground);
        line-height: 100%;
        text-align: center;
    }

    span {
        display: block;
        font-weight: 100;
        font-size: 15px;
    }
`