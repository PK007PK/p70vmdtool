import { AppContext } from "AppContext";
import { useContext } from "react";
import { CompareToMainFinancialSystem } from "../CompareToMainFinancialSystem/CompareToMainFinancialSystem";

export const BankKeyAnalitics = () => {
    const {
        analiticRecords
    } = useContext(AppContext);

    return (
        <>
            {analiticRecords.map((element) => 
                <CompareToMainFinancialSystem 
                    key={element.type} 
                    record={element} 
                    title={element.readTitle()} 
                    bankDetailsElementName={element.type} 
                />
            )}
        </>
    )
}