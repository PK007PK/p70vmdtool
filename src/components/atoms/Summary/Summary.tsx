import { AppContext } from "AppContext";
import { copyToClipboard } from "lib/copyToClipboard";
import { useContext, useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import { defElemValue } from "types/defElemValue";
import { Button } from "../Button/Button";
import { SummaryStyle } from "./Summary.style";

export const Summary = () => {

    const {
        allBankRecords, 
       } = useContext(AppContext);

    const [ccProblem, setCCProblem ] = useState<boolean>(false)
    const ccProblemToogle = () => setCCProblem(prev => !prev);
    const [pbProblem, setPbProblem ] = useState<boolean>(false)
    const pbProblemToogle = () => setPbProblem(prev => !prev);
    const [replicationProblem, setReplicationProblem ] = useState<boolean>(false)
    const replicationProblemToogle = () => setReplicationProblem(prev => !prev);
    

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
        ${allBankRecords[0].documentType}: ${allBankRecords[0].swift}.
        ${allBankRecords[2].documentType}: ${allBankRecords[2].swift}.
        ` : ``

    const ccProblemReport = ccProblem ? `The company code is missing in the local system. Data will not be replicated to CFIN. The supplier does not receive payment.
    ` : "";
    const pbProblemReport = pbProblem ? `There is posting block in the local system. Data will not be replicated to CFIN. The supplier does not receive payment.
    ` : "";
    const replicationProblemReport = replicationProblem ? `For technical reasons, data replication did not take place. We will analyse the situation and if necessary JIRA will be set up. .
    ` : "";

    const errorReport = `${ccProblemReport}${pbProblemReport}${replicationProblemReport}${docAccountCheck}${docIbanCheck}${docSwiftCheck}${crossSystemsBankKeyCheck}${crossSystemsAccountCheck}${crossSystemsIbanCheck}${crossSystemsSwiftCheck}`

    return (
        <SummaryStyle>
            <div className="titleBar">
                <h3 className="title">Errors detected:</h3>
                <Button 
                    title="Copy Report to clipboard" 
                    onClick={()=>copyToClipboard(errorReport)}
                >
                    <MdOutlineContentCopy />
                </Button>
            </div>
            <form>
                <label>
                    <input type="checkbox" checked={ccProblem} onChange={ccProblemToogle} /> Lack of cc
                </label><br/>
                <label>
                    <input type="checkbox" checked={pbProblem} onChange={pbProblemToogle} /> Posting block
                </label><br/>
                <label>
                    <input type="checkbox" checked={replicationProblem} onChange={replicationProblemToogle} /> Lack of replication due to technical reasons
                </label>
            </form>
            <div className="display">
                <p>{errorReport !=="" ? errorReport : "No problems detected"}</p>
            </div>
        </SummaryStyle>
    )
}