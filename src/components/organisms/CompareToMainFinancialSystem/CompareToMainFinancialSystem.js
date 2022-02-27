import { AppContext } from "AppContext";
import { useContext, useEffect, useState } from "react";
import { CompareToMainFinancialSystemStyle } from "./CompareToMainFinancialSystem.style";

export const CompareToMainFinancialSystem = ({title}) => {
    const {
        bankRecord
    } = useContext(AppContext);

    const [, updateState] = useState();

    useEffect(() => updateState(),[bankRecord]);
    
    return (
        <CompareToMainFinancialSystemStyle>
            <h3 className="title">Compare {title} to {bankRecord.documentType}</h3>
        </CompareToMainFinancialSystemStyle>
    )}