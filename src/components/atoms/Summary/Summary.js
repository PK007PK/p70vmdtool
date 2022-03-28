import { AppContext } from "AppContext";
import { useContext } from "react";
import { defElemValue } from "types/defElemValue";
import { SummaryStyle } from "./Summary.style";

export const Summary = () => {

    const {
        allBankRecords, 
       } = useContext(AppContext);

    const docAccountCheck = allBankRecords[1].bankAccount !== allBankRecords[0].bankAccount && 
       allBankRecords[1].bankAccount !== defElemValue && allBankRecords[0].bankAccount !== defElemValue ? 
       `Bank account in ${allBankRecords[0].documentType} is different from bank account on the confirmation document.
       ${allBankRecords[0].documentType}: ${allBankRecords[0].bankAccount}.
       Document: ${allBankRecords[1].bankAccount}.
       ` : ``

    const docIbanCheck = allBankRecords[1].iban !== allBankRecords[0].iban && 
        allBankRecords[1].iban !== defElemValue && allBankRecords[0].iban !== defElemValue ? 
        `IBAN in ${allBankRecords[0].documentType} is different from IBAN on the confirmation document.
        ${allBankRecords[0].documentType}: ${allBankRecords[0].iban}.
        Document: ${allBankRecords[1].iban}.
        ` : ``

    const docSwiftCheck = allBankRecords[1].swift !== allBankRecords[0].swift && 
        allBankRecords[1].swift !== defElemValue && allBankRecords[0].swift !== defElemValue ? 
        `SWIFT code in ${allBankRecords[0].documentType} is different than document's SWIFT code.
        ${allBankRecords[0].documentType}: ${allBankRecords[0].swift}.
        Document: ${allBankRecords[1].swift}.
        ` : ``

        const crossSystemsAccountCheck = allBankRecords[2].bankAccount !== allBankRecords[0].bankAccount && 
        allBankRecords[2].bankAccount !== defElemValue && allBankRecords[0].bankAccount !== defElemValue ? 
        `Bank account in ${allBankRecords[0].documentType} is different from bank account on ${allBankRecords[2].documentType}.
        ${allBankRecords[0].documentType}: ${allBankRecords[0].bankAccount}.
        ${allBankRecords[2].documentType}: ${allBankRecords[2].bankAccount}.
        ` : ``
 
     const crossSystemsIbanCheck = allBankRecords[1].iban !== allBankRecords[0].iban && 
         allBankRecords[1].iban !== defElemValue && allBankRecords[0].iban !== defElemValue ? 
         `IBAN in ${allBankRecords[0].documentType} is different from IBAN on the confirmation document.
         ${allBankRecords[0].documentType}: ${allBankRecords[0].iban}.
         Document: ${allBankRecords[1].iban}.
         ` : ``
 
     const crossSystemsSwiftCheck = allBankRecords[1].swift !== allBankRecords[0].swift && 
         allBankRecords[1].swift !== defElemValue && allBankRecords[0].swift !== defElemValue ? 
         `SWIFT code in ${allBankRecords[0].documentType} is different than document's SWIFT code.
         ${allBankRecords[0].documentType}: ${allBankRecords[0].swift}.
         Document: ${allBankRecords[1].swift}.
         ` : ``

    return (
        <SummaryStyle>
            {`
                ${docAccountCheck}
                ${docIbanCheck}
                ${docSwiftCheck}
            `}
        </SummaryStyle>
    )
}