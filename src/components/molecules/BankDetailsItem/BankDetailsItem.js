import { AppContext } from "AppContext";
import { IbanStatus } from "components/atoms/IbanStatus/IbanStatus";
import { TranfsormStringIntoBoxes } from "components/atoms/TranfsormStringIntoBoxes/TranfsormStringIntoBoxes";
import { elementToTitle } from "lib/elementToTitle";
import { useContext } from "react";
import { BankDetailsItemStyle } from "./BankDetailsItem.styles";

export const BankDetailsItem = ({element, handleClick, value}) => {
    const {
        bankRecord
       } = useContext(AppContext);

    const {bankAccountDetected, bankKeyDetected} = bankRecord.detectInIban()

    return (
        <BankDetailsItemStyle>
            <div className="titleBar">
                <h3 className="title">{elementToTitle(element)}</h3>
                <span className="count">
                    Count: {value === "-" ? "-" : value.length}
                </span>
            </div>
            <button id={element} onClick={handleClick}>
                <TranfsormStringIntoBoxes element={element} details={value} />
            </button>
            {element === "iban" &&  
                <IbanStatus 
                    bankKeyDetected={bankKeyDetected} 
                    bankAccountDetected={bankAccountDetected} 
                    className="ibanStatsBar" 
                />}
        </BankDetailsItemStyle>
    )
}