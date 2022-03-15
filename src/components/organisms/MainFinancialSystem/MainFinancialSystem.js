import { useContext } from "react";
import { AppContext } from "AppContext";
import { BankRecordParts } from "types/BankRecordParts";
import { BankDetailsItem } from "components/molecules/BankDetailsItem/BankDetailsItem";
import { DocumentTypeChange } from "components/atoms/DocumentTypeChange/DocumentTypeChange";
import { handleClick } from "lib/handleClick";
import { Button } from "components/atoms/Button/Button";
import { SwiftRefLink } from "components/molecules/SwiftRefLink/SwiftRefLink";
import { MainFinancialSystemStyle } from "./MainFinancialSystem.style";

export const MainFinancialSystem = () => {

  const {
       bankRecord, resetBankRecord,
       forceUpdate, 
      } = useContext(AppContext);

  const AllBankDetails = () => 
  <>
    {Object.entries(bankRecord)
      .filter(item => item[0] in BankRecordParts)
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
    <MainFinancialSystemStyle>
      <DocumentTypeChange className="docTypeChanger" />
      <AllBankDetails />
      <div className="bottomButtonBar">
        <SwiftRefLink />
        <Button>Reset All</Button>
        <Button onClick={resetBankRecord}>Reset</Button>
      </div>
    </MainFinancialSystemStyle>
  )}
