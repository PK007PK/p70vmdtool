import { useCallback, useContext, useState } from "react";
import { AppContext } from "AppContext";
import { BankRecordDetails } from "types/BankRecordDetails";

import { BankRecordBoxStyle } from "./BankRecordBox.style";
import { BankDetailsItem } from "components/molecules/BankDetailsItem/BankDetailsItem";
import { DocumentTypeChange } from "components/atoms/DocumentTypeChange/DocumentTypeChange";

export const BankRecordBox = ({i = 0}) => {

  const {
       bankRecord, forceUpdate
      } = useContext(AppContext);

  console.log(bankRecord);
  const handleClick = (e) => {
      navigator.clipboard.readText()
        .then(text => {
          if (text === "") {
            return;
          }
          bankRecord.insert(e.target.id, text.toString());
          forceUpdate(); 
        })
      navigator.clipboard.writeText("");
    };
   
  return (
    <BankRecordBoxStyle>
      <DocumentTypeChange className="docTypeChanger" />
      {Object.entries(bankRecord)
        .filter(item => item[0] in BankRecordDetails)
        .map(([key,value]) => 
          <BankDetailsItem 
            key={key} 
            element={key} 
            value={value} 
            handleClick={handleClick}
          />
        )
      }
    </BankRecordBoxStyle>
  )}
