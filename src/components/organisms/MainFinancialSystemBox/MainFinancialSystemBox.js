import { useContext } from "react";
import { AppContext } from "AppContext";
import { BankRecordDetails } from "types/BankRecordDetails";
import { MainFinancialSystemBoxStyle } from "./MainFinancialSystemBoxStyle.style";
import { BankDetailsItem } from "components/molecules/BankDetailsItem/BankDetailsItem";
import { DocumentTypeChange } from "components/atoms/DocumentTypeChange/DocumentTypeChange";
import { handleClick } from "lib/handleClick";
import { Button } from "components/atoms/Button/Button";
import { SwiftRefLink } from "components/molecules/SwiftRefLink/SwiftRefLink";

export const MainFinancialSystemBox = () => {

  const {
       bankRecord, resetBankRecord,
       forceUpdate, 
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
    <MainFinancialSystemBoxStyle>
      <DocumentTypeChange className="docTypeChanger" />
      <AllBankDetails />
      <div className="bottomButtonBar">
        <SwiftRefLink />
        <Button>Reset All</Button>
        <Button onClick={resetBankRecord}>Reset</Button>
      </div>
    </MainFinancialSystemBoxStyle>
  )}
