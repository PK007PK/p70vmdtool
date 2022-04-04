import styled from "styled-components";

export const AppLogoBarStyle = styled.div`
    display: flex;
    position: relative;
    /* justify-content: space-between; */
    /* align-items: center; */
    width: var(--mainWidth);
    color: var(--mainTextColor);
    margin-bottom: 50px;
    /* height: 70px; */
    width: 90px;
    height: 90px;
    margin-top: 10px;
    /* background: white; */

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