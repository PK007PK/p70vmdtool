import styled from "styled-components";
import {ButtonProps} from './Button'

export const ButtonStyle = styled.button<ButtonProps>`
    position: ${({absolute}) => absolute ? 'absolute' : 'static'};
    background: var(--mainTextColor);
    border: none;
    padding: 3px 10px;
    cursor: pointer;
    font-size: var(--fontSizeSmall);
    line-height: 20px;
    display: inline;

    &:hover {
        background-color: var(--colorOk);
        text-decoration: none;
        color: var(--mainTextColor);
    }
`

