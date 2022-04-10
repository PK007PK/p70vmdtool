import { AppContext } from "AppContext";
import { IbanStatus } from "components/atoms/IbanStatus/IbanStatus";
import { TranfsormStringIntoBoxes } from "components/atoms/TranfsormStringIntoBoxes/TranfsormStringIntoBoxes";
import { useContext } from "react";
import { BankDetailsItemStyle } from "./BankDetailsItem.styles";
import { BankDetailsItemTitle } from "../BankDetailsItemTitle/BankDetailsItemTitle";
import { defElemValue } from "types/defElemValue";
import { BankRecord } from "records/bank.record";

interface Props {
    bankRecord: BankRecord,
    bankDetailsElementName: string,
    bankDetailsElementValue: string, 
    handleClick: (e: React.MouseEvent<HTMLElement>) => void, 
}

export const BankDetailsItem = (props: Props) => {
    const {
        bankDetailsElementName, 
        bankDetailsElementValue, 
        handleClick, 
        bankRecord,
    } = props;

    const {
        bankAccountDetected, 
        bankKeyDetected,
    } = bankRecord.detectInIban()

    const {
        allBankRecords,
        forceUpdate,
    } = useContext(AppContext);

    const theSameAsMain = bankRecord[bankDetailsElementName as keyof BankRecord] === allBankRecords[0][bankDetailsElementName as keyof BankRecord];

    return (
        <BankDetailsItemStyle>
            <BankDetailsItemTitle 
                bankDetailsElementName={bankDetailsElementName as keyof BankRecord}
                bankDetailsElementValue={bankDetailsElementValue}
                system={bankRecord.documentType}
                className="titleBar"
                currentRecord={bankRecord}
                mainRecord={allBankRecords[0]}
                forceUpdate={forceUpdate}
            />
            <button 
                id={bankDetailsElementName} 
                onClick={handleClick}
                className="mainButton"
                title="Click to insert data from clipboard"
            >
                <TranfsormStringIntoBoxes 
                    bankDetailsElementName={bankDetailsElementName} 
                    bankDetailsElementValue={bankDetailsElementValue}
                    bankRecord={bankRecord}
                    theSameAsMain={theSameAsMain}
                />
            </button>
            {bankDetailsElementName === "iban" && 
             bankDetailsElementValue !== defElemValue &&
                <IbanStatus 
                    bankKeyDetected={bankKeyDetected} 
                    bankAccountDetected={bankAccountDetected} 
                    className="ibanStatsBar" 
                />
            }
        </BankDetailsItemStyle>
    )
}