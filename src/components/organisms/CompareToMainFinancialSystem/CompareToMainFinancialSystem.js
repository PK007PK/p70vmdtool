import { AppContext } from "AppContext";
import { BankDetailsItem } from "components/molecules/BankDetailsItem/BankDetailsItem";
import { elementToTitle } from "lib/elementToTitle";
import { useContext } from "react";
import { CompareToMainFinancialSystemStyle } from "./CompareToMainFinancialSystem.style";

export const CompareToMainFinancialSystem = ({bankDetailsElementName}) => {
    const {
        bankRecord
    } = useContext(AppContext);

    return (
        <CompareToMainFinancialSystemStyle>
            <h3 className="title">Comparing other sources to {bankRecord.documentType}: {elementToTitle(bankDetailsElementName)}</h3>
            <BankDetailsItem 
                bankDetailsElementName={bankDetailsElementName} 
                bankDetailsElementValue={bankRecord[bankDetailsElementName]} 
            />
        </CompareToMainFinancialSystemStyle>
    )}