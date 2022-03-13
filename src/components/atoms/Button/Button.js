import { ButtonStyle } from "./Button.style";

export const Button = (props) => {
    const {style, className, onClick, children, absolute, as, href, target} = props
    return (
        <ButtonStyle
            target={target}
            href={href}
            as={as}
            style={style} 
            className={className}
            absolute={absolute} 
            onClick={onClick}>
            {children}
        </ButtonStyle>
    )
}