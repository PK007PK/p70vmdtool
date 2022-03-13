import { useContext } from "react";
import { AppContext } from "AppContext";
import { BankRecordDetails } from "types/BankRecordDetails";
import { BankRecordBoxStyle } from "./BankRecordBox.style";
import { BankDetailsItem } from "components/molecules/BankDetailsItem/BankDetailsItem";
import { DocumentTypeChange } from "components/atoms/DocumentTypeChange/DocumentTypeChange";
import { handleClick } from "lib/handleClick";
import { Button } from "components/atoms/Button/Button";

export const BankRecordBox = () => {

  const {
       bankRecord, resetBankRecord,
       forceUpdate, 
       analiticRecords
      } = useContext(AppContext);

  const AllBankDetails = () => 
  <>
    {Object.entries(bankRecord)
      .filter(item => item[0] in BankRecordDetails)
      .map(([bankDetailsElementName,bankDetailsElementValue]) => 
        <BankDetailsItem 
          key={bankDetailsElementName} 
          bankDetailsElementName={bankDetailsElementName} 
          bankDetailsElementValue={bankDetailsElementValue} 
          handleClick={(e) => handleClick(e, bankRecord, forceUpdate)}
          isTitle={true}
        />
      )
    }
  </>
  
  
  return (
    <BankRecordBoxStyle>
      <DocumentTypeChange className="docTypeChanger" />
      <AllBankDetails />
      <div className="bottomButtonBar">
        <Button onClick={resetBankRecord} className="reset">Reset</Button>
      </div>
    </BankRecordBoxStyle>
  )}
