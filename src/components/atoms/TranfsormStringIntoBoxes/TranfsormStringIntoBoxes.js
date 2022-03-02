import { AppContext } from "AppContext";
import { useContext } from "react";
import { StyledSpan } from "./TranfsormStringIntoBoxes.style";

export const TranfsormStringIntoBoxes = ({bankDetailsElementName, bankDetailsElementValue = ['-']}) => {
    const {
        bankRecord
       } = useContext(AppContext);

    const {
        bankKeyPosition: {start: bankKeyStart, end: bankKeyEnd}, 
        bankAccountPosition: {start: bankAccountStart, end: bankAccountEnd},
    } = bankRecord.detectInIban()

    return (
        <>
            {bankDetailsElementValue.split('').map((el, i) => 
                <StyledSpan 
                    id={bankDetailsElementName} 
                    bankKeyElement={bankDetailsElementName === "bankKey" ? true : false}
                    bankAccountElement={bankDetailsElementName === "bankAccount" ? true : false}
                    isBankKey={bankDetailsElementName==="iban" && i >= bankKeyStart && i <= bankKeyEnd ? true : false} 
                    isBankAccount={bankDetailsElementName==="iban" && i >= bankAccountStart && i <= bankAccountEnd ? true : false}
                    key={i}>
                    {el}
                </StyledSpan>)
            }
        </>
    )}