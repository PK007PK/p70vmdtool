import { AppContext } from "AppContext";
import { useContext, useState } from "react";
import { DocumentsBase } from "types/documentBase"
import { DocumentTypeChangeStyle } from "./DocumentTypeChangeStyle";

export const DocumentTypeChange = ({className}) => {
    const {
        bankRecord
    } = useContext(AppContext);
    
    const [type, setType] = useState(bankRecord.documentType);

    const handleClick = () => {
        bankRecord.documentType === "SAP" ? 
        bankRecord.insert("documentType", DocumentsBase.Cfin) :
        bankRecord.insert("documentType", DocumentsBase.Sap);
        setType(bankRecord.documentType);
    }

    return (
        <DocumentTypeChangeStyle className={className}>
            Select your main financial system: <button onClick={handleClick}>{type}</button>    
        </DocumentTypeChangeStyle>
    )}