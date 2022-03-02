import { AppContext } from "AppContext";
import { elementToTitle } from "lib/elementToTitle";
import { useContext } from "react";
import { CompareToMainFinancialSystemStyle } from "./CompareToMainFinancialSystem.style";

export const CompareToMainFinancialSystem = ({element}) => {
    const {
        bankRecord
    } = useContext(AppContext);

    return (
        <CompareToMainFinancialSystemStyle>
            <h3 className="title">Comparing other sources to {bankRecord.documentType}: {elementToTitle(element)}</h3>
            <p>{}</p>
        </CompareToMainFinancialSystemStyle>
    )}