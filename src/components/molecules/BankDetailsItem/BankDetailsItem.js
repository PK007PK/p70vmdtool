import { AppContext } from "AppContext";
import { IbanStatus } from "components/atoms/IbanStatus/IbanStatus";
import { TranfsormStringIntoBoxes } from "components/atoms/TranfsormStringIntoBoxes/TranfsormStringIntoBoxes";
import { elementToTitle } from "lib/elementToTitle";
import { useContext } from "react";
import { BankDetailsItemStyle } from "./BankDetailsItem.styles";

export const BankDetailsItem = ({bankDetailsElementName, bankDetailsElementValue, handleClick, isTitle}) => {
    const {
        bankRecord
       } = useContext(AppContext);

    const {bankAccountDetected, bankKeyDetected} = bankRecord.detectInIban()

    const isTitleBar = (check) => check &&            
        <div className="titleBar">
            <h3 className="title">{elementToTitle(bankDetailsElementName)}</h3>
            <span className="count">
                Count: {bankDetailsElementValue === "-" ? "-" : bankDetailsElementValue.length}
            </span>
        </div>

    return (
        <BankDetailsItemStyle>
            {isTitleBar(isTitle)}
            <button id={bankDetailsElementName} onClick={handleClick}>
                <TranfsormStringIntoBoxes bankDetailsElementName={bankDetailsElementName} bankDetailsElementValue={bankDetailsElementValue} />
            </button>
            {bankDetailsElementName === "iban" &&  
                <IbanStatus 
                    bankKeyDetected={bankKeyDetected} 
                    bankAccountDetected={bankAccountDetected} 
                    className="ibanStatsBar" 
                />}
        </BankDetailsItemStyle>
    )
}