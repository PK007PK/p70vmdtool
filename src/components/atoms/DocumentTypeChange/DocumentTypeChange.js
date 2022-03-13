import { AppContext } from "AppContext";
import { useContext, useState } from "react";
import { AcceptedDocuments } from "types/AcceptedDocuments";
import { Button } from "../Button/Button";
import { DocumentTypeChangeStyle } from "./DocumentTypeChangeStyle";

export const DocumentTypeChange = ({className}) => {
    const {
        bankRecord, forceUpdate
    } = useContext(AppContext);
    
    const [type, setType] = useState(bankRecord.documentType);

    const handleClick = () => {
        bankRecord.documentType === "SAP" ? 
        bankRecord.insert("documentType", AcceptedDocuments.Cfin) :
        bankRecord.insert("documentType", AcceptedDocuments.Sap);
        setType(bankRecord.documentType);
        forceUpdate();
    }

    return (
        <DocumentTypeChangeStyle className={className}>
            <h2 className="title">Main financial system analitics:</h2>
            <Button onClick={handleClick}>{type}</Button>
        </DocumentTypeChangeStyle>
    )}