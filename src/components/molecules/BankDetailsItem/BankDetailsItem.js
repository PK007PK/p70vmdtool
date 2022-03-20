import { AppContext } from "AppContext";
import { IbanStatus } from "components/atoms/IbanStatus/IbanStatus";
import { TranfsormStringIntoBoxes } from "components/atoms/TranfsormStringIntoBoxes/TranfsormStringIntoBoxes";
import { elementToTitle } from "lib/elementToTitle";
import { useContext } from "react";
import { BankDetailsItemStyle } from "./BankDetailsItem.styles";

export const BankDetailsItem = (props) => {
    const {
        bankDetailsElementName, 
        bankDetailsElementValue, 
        handleClick, 
        bankRecord,
        documentNumber
    } = props;

    const {
        bankAccountDetected, 
        bankKeyDetected
    } = bankRecord.detectInIban()

    const TitleBar = () =>             
        <div className="titleBar">
            <h3 className="title">{elementToTitle(bankDetailsElementName)}</h3>
            <span className="count">
                Count: {bankDetailsElementValue === "-" ? "-" : bankDetailsElementValue.length}
            </span>
        </div>

    // const theSameAsMain = bankRecord[bankDetailsElementName] = "xxx"

    // const {
    //     allBankRecords
    //    } = useContext(AppContext);

    return (
        <BankDetailsItemStyle>
            <TitleBar />
            <button id={bankDetailsElementName} onClick={handleClick}>
                <TranfsormStringIntoBoxes 
                    bankDetailsElementName={bankDetailsElementName} 
                    bankDetailsElementValue={bankDetailsElementValue}
                    bankRecord={bankRecord}
                />
            </button>

            {bankDetailsElementName === "iban" && 
                <IbanStatus 
                    bankKeyDetected={bankKeyDetected} 
                    bankAccountDetected={bankAccountDetected} 
                    className="ibanStatsBar" 
                />
            }
        </BankDetailsItemStyle>
    )
}