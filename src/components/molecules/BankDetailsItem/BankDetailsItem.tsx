import { AppContext } from "AppContext";
import { IbanStatus } from "components/atoms/IbanStatus/IbanStatus";
import { TranfsormStringIntoBoxes } from "components/atoms/TranfsormStringIntoBoxes/TranfsormStringIntoBoxes";
import { useContext } from "react";
import { BankDetailsItemStyle } from "./BankDetailsItem.styles";
import { BankDetailsItemTitle } from "../BankDetailsItemTitle/BankDetailsItemTitle";
import { defElemValue } from "types/defElemValue";
import { BankRecord } from "records/bank.record";
import { AcceptedDocuments } from "types/AcceptedDocuments";

interface Props {
    bankRecord: BankRecord,
    bankDetailsElementName: string,
    bankDetailsElementValue: string, 
    handleClick: (e: React.MouseEvent<HTMLElement>) => void, 
}

export const BankDetailsItem: React.FunctionComponent<Props> = (props): JSX.Element => {
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

    return (
        <BankDetailsItemStyle>
            <BankDetailsItemTitle 
                bankDetailsElementName={bankDetailsElementName as keyof Omit<BankRecord, 'insert' | 'detectInIban' | 'reset' | 'documentType'>}
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
                />
            </button>
            {bankDetailsElementName === "iban" && 
             bankDetailsElementValue !== defElemValue &&
             bankRecord.documentType !== AcceptedDocuments.Document &&
                <IbanStatus 
                    bankKeyDetected={bankKeyDetected} 
                    bankAccountDetected={bankAccountDetected} 
                    className="ibanStatsBar" 
                />
            }
        </BankDetailsItemStyle>
    )
}