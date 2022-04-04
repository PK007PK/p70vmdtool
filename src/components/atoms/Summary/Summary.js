import { AppContext } from "AppContext";
import { useContext } from "react";
import { defElemValue } from "types/defElemValue";
import { SummaryStyle } from "./Summary.style";

export const Summary = () => {

    const {
        allBankRecords, 
       } = useContext(AppContext);

    //    Most ugly code ever
    const docAccountCheck = allBankRecords[1].bankAccount !== allBankRecords[0].bankAccount && 
       allBankRecords[1].bankAccount !== defElemValue && allBankRecords[0].bankAccount !== defElemValue ? 
       `Bank account in ${allBankRecords[0].documentType} is different from bank account in the confirmation document.
       ${allBankRecords[0].documentType}: ${allBankRecords[0].bankAccount}.
       Document: ${allBankRecords[1].bankAccount}.
       ` : ``

    //    Most ugly code ever
    const docIbanCheck = allBankRecords[1].iban !== allBankRecords[0].iban && 
        allBankRecords[1].iban !== defElemValue && allBankRecords[0].iban !== defElemValue ? 
        `IBAN in ${allBankRecords[0].documentType} is different from IBAN in the confirmation document.
        ${allBankRecords[0].documentType}: ${allBankRecords[0].iban}.
        Document: ${allBankRecords[1].iban}.
        ` : ``

    //    Most ugly code ever
    const docSwiftCheck = allBankRecords[1].swift !== allBankRecords[0].swift && 
        allBankRecords[1].swift !== defElemValue && allBankRecords[0].swift !== defElemValue ? 
        `SWIFT code in ${allBankRecords[0].documentType} is different than document's SWIFT code.
        ${allBankRecords[0].documentType}: ${allBankRecords[0].swift}.
        Document: ${allBankRecords[1].swift}.
        ` : ``

    //    Most ugly code ever
    const crossSystemsAccountCheck = allBankRecords[2].bankAccount !== allBankRecords[0].bankAccount && 
        allBankRecords[2].bankAccount !== defElemValue && allBankRecords[0].bankAccount !== defElemValue ? 
        `Bank account in ${allBankRecords[0].documentType} is different from bank account in ${allBankRecords[2].documentType}.
        ${allBankRecords[0].documentType}: ${allBankRecords[0].bankAccount}.
        ${allBankRecords[2].documentType}: ${allBankRecords[2].bankAccount}.
        ` : ``
 
    //    Most ugly code ever
    const crossSystemsBankKeyCheck = allBankRecords[2].bankKey !== allBankRecords[0].bankKey && 
        allBankRecords[2].bankKey !== defElemValue && allBankRecords[0].bankKey !== defElemValue ? 
        `Bank key in ${allBankRecords[0].documentType} is different from bank key in ${allBankRecords[2].documentType}.
        ${allBankRecords[0].documentType}: ${allBankRecords[0].bankKey}.
        ${allBankRecords[2].documentType}: ${allBankRecords[2].bankKey}.
        ` : ``

    //    Most ugly code ever
    const crossSystemsIbanCheck = allBankRecords[2].iban !== allBankRecords[0].iban && 
        allBankRecords[2].iban !== defElemValue && allBankRecords[0].iban !== defElemValue ? 
        `IBAN in ${allBankRecords[0].documentType} is different from IBAN in ${allBankRecords[2].documentType}.
        ${allBankRecords[0].documentType}: ${allBankRecords[0].iban}.
        ${allBankRecords[2].documentType}: ${allBankRecords[2].iban}.
        ` : ``

    const crossSystemsSwiftCheck = allBankRecords[2].swift !== allBankRecords[0].swift && 
        allBankRecords[2].swift !== defElemValue && allBankRecords[0].swift !== defElemValue ? 
        `SWIFT in ${allBankRecords[0].documentType} is different from SWIFT in ${allBankRecords[2].documentType}.
        ${allBankRecords[0].documentType}: ${allBankRecords[0].iban}.
        ${allBankRecords[2].documentType}: ${allBankRecords[2].iban}.
        ` : ``

    const errorReport = `${docAccountCheck}${docIbanCheck}${docSwiftCheck}${crossSystemsBankKeyCheck}${crossSystemsAccountCheck}${crossSystemsIbanCheck}${crossSystemsSwiftCheck}`

    console.log(errorReport);

    return (
        <SummaryStyle>
            <h3 className="title">Errors detected:</h3>
            <p>{errorReport !=="" ? errorReport : "No problems detected"}</p>
        </SummaryStyle>
    )
}