import styled from "styled-components";

export const OneFinancialSystemDataStyle = styled.div`
    @keyframes emerge {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

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

    .buttonsBar {
        display: none;
    }

    .apiBar {
        align-items: center;
    }

    &:hover .buttonsBar {
        display: flex;
        animation: var(--animation); 
    }

`