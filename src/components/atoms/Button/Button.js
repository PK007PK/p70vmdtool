import { ButtonStyle } from "./Button.style";

export const Button = ({style, className, onClick, children, absolute}) => 
    <ButtonStyle
        style={style} 
        className={className}
        absolute={absolute} 
        onClick={onClick}>
        {children}
    </ButtonStyle>