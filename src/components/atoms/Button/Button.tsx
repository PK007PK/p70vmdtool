import { CommonProps } from "types/CommonProps";
import { ButtonStyle } from "./Button.style";

export interface ButtonProps extends CommonProps{
    absolute?: boolean,
    as?: React.ElementType,
    href?: string,
    target?: string,
    title?: string,
}

export const Button: React.FunctionComponent<ButtonProps> = (props): JSX.Element => {
    const {
        absolute, 
        as, 
        className, 
        children, 
        href, 
        onClick, 
        style, 
        target,
        title,
    } = props
    
    return (
        <ButtonStyle
            absolute={absolute} 
            as={as}
            className={className}
            href={href}
            onClick={onClick}
            style={style} 
            target={target}
            title={title}
        >
            {children}
        </ButtonStyle>
    )
}