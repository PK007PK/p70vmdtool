import { AppContext } from "AppContext";
import { useContext } from "react";
import { StyledSpan } from "./TranfsormStringIntoBoxes.style";

export const TranfsormStringIntoBoxes = ({details = ['-'], element}) => {
    const {
        doc
       } = useContext(AppContext);

    const {
        bankAccountDetected, 
        bankKeyPosition: {start: bankKeyStart, end: bankKeyEnd}, 
        bankKeyDetected, 
        bankAccountPosition: {start: bankAccountStart, end: bankAccountEnd},
    } = doc.detectInIban()

    return (
        <>
            {details.split('').map((el, i) => 
                <StyledSpan 
                    id={element} 
                    bankKeyElement={element === "bankKey" ? true : false}
                    bankAccountElement={element === "bankAccount" ? true : false}
                    isBankKey={element==="iban" && i >= bankKeyStart && i <= bankKeyEnd ? true : false} 
                    isBankAccount={element==="iban" && i >= bankAccountStart && i <= bankAccountEnd ? true : false}
                    key={i}>
                    {el}
                </StyledSpan>)
            }
        </>
    )}