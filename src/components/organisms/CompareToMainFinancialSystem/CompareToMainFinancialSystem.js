import { AppContext } from "AppContext";
import { useContext, useEffect, useState } from "react";
import { CompareToMainFinancialSystemStyle } from "./CompareToMainFinancialSystem.style";

export const CompareToMainFinancialSystem = ({title}) => {
    const {
        doc
    } = useContext(AppContext);

    const [, updateState] = useState();

    useEffect(() => updateState(),[doc]);
    console.log(doc.documentType);
    
    return (
        <CompareToMainFinancialSystemStyle>
            <h3 className="title">Compare {title} to {doc.documentType}</h3>
        </CompareToMainFinancialSystemStyle>
    )}