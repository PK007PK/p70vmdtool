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
            <h3 className="title">{elementToTitle(bankDetailsElementName)} analitics</h3>
            In {bankRecord.documentType}:
            <BankDetailsItem 
                bankDetailsElementName={bankDetailsElementName} 
                bankDetailsElementValue={bankRecord[bankDetailsElementName]} 
            />
            On comparing document:
        </CompareToMainFinancialSystemStyle>
    )}