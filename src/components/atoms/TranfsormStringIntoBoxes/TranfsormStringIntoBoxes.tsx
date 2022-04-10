import { BankRecord } from "records/bank.record";
import { StyledSpan } from "./TranfsormStringIntoBoxes.style";

interface Props {
    bankRecord: BankRecord,
    bankDetailsElementName: string,
    bankDetailsElementValue: string,
    theSameAsMain: boolean,
}

export const TranfsormStringIntoBoxes = (props: Props) => {
    const {
        bankRecord,
        bankDetailsElementName,
        bankDetailsElementValue = '-',
        theSameAsMain,
    } = props;

    const {
        bankKeyPosition: {start: bankKeyStart, end: bankKeyEnd}, 
        bankAccountPosition: {start: bankAccountStart, end: bankAccountEnd},
    } = bankRecord.detectInIban()

    return (
        <>
            {bankDetailsElementValue.split('').map((el, i) => 
                <StyledSpan 
                    id={bankDetailsElementName}
                    theSameAsMain={theSameAsMain}
                    bankDetailsElementName={bankDetailsElementName}
                    bankKeyElement={bankDetailsElementName === "bankKey"}
                    bankAccountElement={bankDetailsElementName === "bankAccount"}
                    isBankKey={bankDetailsElementName==="iban" && i >= bankKeyStart && i <= bankKeyEnd} 
                    isBankAccount={bankDetailsElementName==="iban" && i >= bankAccountStart && i <= bankAccountEnd}
                    key={i}>
                    {el}
                </StyledSpan>
            )}
        </>
    )
}