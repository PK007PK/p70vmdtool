import styled from "styled-components";
import { ButtonProps } from './Button'

export const ButtonStyle = styled.button<ButtonProps>`
    position: ${({absolute}) => absolute ? 'absolute' : 'static'};
    background: var(--mainTextColor);
    border: none;
    padding: 3px 10px;
    cursor: ${({disabled}) => !disabled && "pointer"};
    font-size: var(--fontSizeSmall);
    line-height: 20px;
    display: inline;

    &:hover {
        text-decoration: none;
        background-color: ${({disabled}) => !disabled && "var(--colorOk)"};
        color: ${({disabled}) => !disabled && "var(--mainTextColor)"};
    }
`

