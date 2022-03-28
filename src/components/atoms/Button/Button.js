import { ButtonStyle } from "./Button.style";

export const Button = (props) => {
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
            onClick={onClick}>
            {children}
        </ButtonStyle>
    )
}