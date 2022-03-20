import { StyledSpan } from "./TranfsormStringIntoBoxes.style";

export const TranfsormStringIntoBoxes = (props) => {
    const {
        bankRecord,
        bankDetailsElementName,
        bankDetailsElementValue = ['-']
    } = props;

    const {
        bankKeyPosition: {start: bankKeyStart, end: bankKeyEnd}, 
        bankAccountPosition: {start: bankAccountStart, end: bankAccountEnd},
    } = bankRecord.detectInIban()

    return (
            bankDetailsElementValue.split('').map((el, i) => 
                <StyledSpan 
                    id={bankDetailsElementName}
                    bankDetailsElementName={bankDetailsElementName}
                    bankKeyElement={bankDetailsElementName === "bankKey"}
                    bankAccountElement={bankDetailsElementName === "bankAccount"}
                    isBankKey={bankDetailsElementName==="iban" && i >= bankKeyStart && i <= bankKeyEnd} 
                    isBankAccount={bankDetailsElementName==="iban" && i >= bankAccountStart && i <= bankAccountEnd}
                    key={i}>
                    {el}
                </StyledSpan>
            )
        )
}