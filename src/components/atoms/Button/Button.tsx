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
        style, 
        className, 
        onClick, 
        children, 
        absolute, 
        as, 
        href, 
        target,
        title,
    } = props
    
    return (
        <ButtonStyle
            target={target}
            href={href}
            as={as}
            style={style} 
            className={className}
            absolute={absolute} 
            title={title}
            onClick={onClick}
        >
            {children}
        </ButtonStyle>
    )
}