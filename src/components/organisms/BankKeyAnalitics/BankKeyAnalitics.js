import { AppContext } from "AppContext";
import { useContext } from "react";
import { CompareToMainFinancialSystem } from "../CompareToMainFinancialSystem/CompareToMainFinancialSystem";

export const BankKeyAnalitics = () => {
    const {
        bankRecord, allAnaliticRecords
    } = useContext(AppContext);

    return (
        <>
            {allAnaliticRecords.map((element, i) => {
                element.benchmark = bankRecord[element.type]
                return (
                        <CompareToMainFinancialSystem 
                            key={element.type} 
                            record={element}
                        />
                    )
                }
            )}
        </>
    )
}