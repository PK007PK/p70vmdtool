import styled from "styled-components";

export const TitleBarStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--mainWidth);
    color: var(--mainTextColor);
    margin-bottom: 10px;

    .logoBox {
        display: flex;
        align-items: center;
    }

    .logo {
        width: 21px;
        height: 21px;
        margin-right: 7px
    }

    span {
        font-weight: 100;
        font-size: 15px;
    }

    .setWidthButton {
        display: flex;
        flex-direction: column;
        
        & > * {
            margin: 1px;
            width: 2px;
            height: 5px;
            background-color: red;
        }
    }

`