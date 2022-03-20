import { AppContext } from "AppContext";
import { BankDetailsItem } from "components/molecules/BankDetailsItem/BankDetailsItem";
import { useContext } from "react";
import { CompareToMainFinancialSystemStyle } from "./CompareToMainFinancialSystem.style";

export const CompareToMainFinancialSystem = ({record}) => {
    const {
        bankRecord, forceUpdate
    } = useContext(AppContext);
    console.log(record);

    const handleClick = (e, record, updateFunction) => {
        navigator.clipboard.readText()
          .then(text => {
            if (text === "") {
              return;
            }
            record.insert(text.toString());
            updateFunction(); 
          })
        navigator.clipboard.writeText("");
    };

    return (
        <CompareToMainFinancialSystemStyle>
            {record.readTitle()} in {bankRecord.documentType}:
            <BankDetailsItem 
                bankDetailsElementName={record.type} 
                bankDetailsElementValue={bankRecord[record.type]} 
            />
            Copy and click {record.readTitle()} value from comparing document:
            <button onClick={(e) => handleClick(e, record, forceUpdate)}>x</button>
        </CompareToMainFinancialSystemStyle>
    )}