import { ButtonStyle } from "./Button.style";

export const Button = ({style, className, onClick, children, absolute, as}) =>
    <ButtonStyle
        as={as}
        style={style} 
        className={className}
        absolute={absolute} 
        onClick={onClick}>
        {children}
    </ButtonStyle>