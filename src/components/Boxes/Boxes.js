import { StyledSpan } from "./Boxes.style";

export const Boxes = ({reference, arr, name}) => 
        <>
            {arr.map((el, i) => 
                <StyledSpan isOk={(reference === null || reference[i]===el) ? true : false} data-type={name} key={i}>{el}</StyledSpan>)
            }
        </>