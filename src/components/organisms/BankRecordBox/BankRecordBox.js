import { useCallback, useContext, useState } from "react";
import { AppContext } from "AppContext";
import { BankRecordDetails } from "types/BankRecordDetails";

import { BankRecordBoxStyle } from "./BankRecordBox.style";
import { BankDetailsItem } from "components/molecules/BankDetailsItem/BankDetailsItem";

export const BankRecordBox = ({i = 0}) => {
    
  const [, updateState] = useState();

  const {
       doc
      } = useContext(AppContext);
  
  const forceUpdate = useCallback(() => updateState({}), []);

  const handleClick = (e) => {
    console.log(e);
      navigator.clipboard.readText()
        .then(text => {
          if (text === "") {
            return;
          }
          doc.insert(e.target.id, text.toString());
          forceUpdate(); 
        })
      navigator.clipboard.writeText("");
    };
   
  return (
    <BankRecordBoxStyle>
      {Object.entries(doc)
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
