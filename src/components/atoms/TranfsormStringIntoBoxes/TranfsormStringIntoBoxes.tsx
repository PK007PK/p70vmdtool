import { AppContext } from "AppContext";
import { useContext } from "react";
import { BankRecord } from "records/bank.record";
import { defElemValue } from "types/defElemValue";
import { StyledSpan } from "./TranfsormStringIntoBoxes.style";

interface Props {
    bankRecord: BankRecord,
    bankDetailsElementName: string,
    bankDetailsElementValue: string,
}

export const TranfsormStringIntoBoxes: React.FunctionComponent<Props> = (props): JSX.Element => {

    const {
        bankRecord,
        bankDetailsElementName,
        bankDetailsElementValue = '-',
    } = props;

    const {
        bankKeyPosition: {start: bankKeyStart, end: bankKeyEnd}, 
        bankAccountPosition: {start: bankAccountStart, end: bankAccountEnd},
    } = bankRecord.detectInIban()

    const {
        allBankRecords,
    } = useContext(AppContext);

    return (
        <>
            {bankDetailsElementValue.split('').map((el, i) =>
                <StyledSpan 
                    id={bankDetailsElementName}
                    bankDetailsElementName={bankDetailsElementName}
                    bankKeyElement={bankDetailsElementName === "bankKey"}
                    bankAccountElement={bankDetailsElementName === "bankAccount"}
                    isBankKey={bankDetailsElementName==="iban" && i >= bankKeyStart && i <= bankKeyEnd} 
                    isBankAccount={bankDetailsElementName==="iban" && i >= bankAccountStart && i <= bankAccountEnd}
                    iSNotTheSame={
                        bankRecord[bankDetailsElementName as keyof object][i] === allBankRecords[0][bankDetailsElementName as keyof object][i] || 
                        bankRecord[bankDetailsElementName as keyof object][i] === defElemValue
                    }
                    key={i}>
                    {el}
                </StyledSpan>
            )}
        </>
    )
}