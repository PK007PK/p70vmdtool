import { StyledSpan } from "./DisplayDetails.style";

export const DisplayDetails = ({details = ['-'], element}) => {
    return (
        <>
            {details.split('').map((el, i) => 
                <StyledSpan id={element} isOk={true} key={i}>{el}</StyledSpan>)
            }
        </>
    )}