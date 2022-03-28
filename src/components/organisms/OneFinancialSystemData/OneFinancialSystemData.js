import { useContext } from "react";
import { AppContext } from "AppContext";
import { BankRecordElements } from "types/BankRecordElements";
import { BankDetailsItem } from "components/molecules/BankDetailsItem/BankDetailsItem";
import { pasteOneString } from "lib/pasteOneString";
import { Button } from "components/atoms/Button/Button";
import { SwiftRefLink } from "components/molecules/SwiftRefLink/SwiftRefLink";
import { OneFinancialSystemDataStyle } from "./OneFinancialSystemData.style";
import { pasteAll } from "lib/pasteAll";
import { OpenIban } from "components/atoms/OpenIban/OpenIban";

export const OneFinancialSystemData = ({main, systemNumber}) => {

  const {
       allBankRecords, 
       forceUpdate,
       resetAll,
      } = useContext(AppContext);

  const bankRecord = allBankRecords[systemNumber];

  const handleReset = () => {
    bankRecord.reset();
    forceUpdate();
  }

  const TitleBar = () =>       
    <div className="componentTitleBar">
      <h3 className="title">{bankRecord.documentType}</h3>
      <div className="buttonsBar">
        {main && <Button onClick={resetAll}>Reset All</Button>}
        <Button onClick={handleReset}>Reset</Button>
        <Button onClick={ ()=> pasteAll(bankRecord, forceUpdate)}>Paste All</Button>
      </div>
    </div>

  const AllBankDetails = () => 
    <>
      {Object.entries(bankRecord)
        .filter(item => item[0] in BankRecordElements)
        .map(([bankDetailsElementName,bankDetailsElementValue]) => 
            <BankDetailsItem 
              key={bankDetailsElementName} 
              bankRecord={bankRecord}
              bankDetailsElementName={bankDetailsElementName} 
              bankDetailsElementValue={bankDetailsElementValue} 
              handleClick={(e) => pasteOneString(e, bankRecord, forceUpdate)}
            />
        )
      }
    </>

  const bottomBar = main &&
    <div className="apiBar">
      <OpenIban iban={bankRecord.iban}/>
    </div>

  return (
    <OneFinancialSystemDataStyle>
      <TitleBar />
      <AllBankDetails />
      {bottomBar}
    </OneFinancialSystemDataStyle>
  )}
