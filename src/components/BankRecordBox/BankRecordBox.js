import { useCallback, useContext, useState } from "react";
import { AppContext } from "AppContext";
import { BankRecordDetails } from "types/BankRecordDetails";
import { Button } from "components/Button/Button";

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
    <div>
      {Object.entries(doc)
        .filter(item => item[0] in BankRecordDetails)
        .map(([key,value]) => <Button key={key} element={key} value={value} handleClick={handleClick}/>)
      }
    </div>
  )}
