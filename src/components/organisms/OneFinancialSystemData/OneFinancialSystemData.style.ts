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

    max-width: var(--mainWidth);
    padding: var(--componentsPaddings);
    background-color: var(--componentsBackground);
    position: relative;
    margin-bottom: 75px;
    box-shadow: var(--bs);

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
        display: flex;
        align-items: center;

        & > * {
            margin-right: 5px;
        }
    }

    .buttonsBar {
        display: none;
    }


    .apiBar {
        align-items: center;
    }

    &:hover .buttonsBar {
        animation: var(--animation); 
        display: flex;
    }

`