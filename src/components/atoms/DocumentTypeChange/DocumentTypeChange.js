import { AppContext } from "AppContext";
import { useContext, useState } from "react";
import { DocumentsBase } from "types/documentBase"
import { DocumentTypeChangeStyle } from "./DocumentTypeChangeStyle";

export const DocumentTypeChange = ({className}) => {
    const {
        doc
    } = useContext(AppContext);
    
    const [type, setType] = useState(doc.documentType);

    const handleClick = () => {
        doc.documentType === "SAP" ? 
            doc.insert("documentType", DocumentsBase.Cfin) :
            doc.insert("documentType", DocumentsBase.Sap);
        setType(doc.documentType);
    }

    return (
        <DocumentTypeChangeStyle className={className}>
            Select your main financial system: <button onClick={handleClick}>{type}</button>    
        </DocumentTypeChangeStyle>
    )}