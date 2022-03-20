import { useContext } from "react";
import { AppContext } from "AppContext";
import { BankRecordElements } from "types/BankRecordElements";
import { BankDetailsItem } from "components/molecules/BankDetailsItem/BankDetailsItem";
import { handleClick } from "lib/handleClick";
import { Button } from "components/atoms/Button/Button";
import { SwiftRefLink } from "components/molecules/SwiftRefLink/SwiftRefLink";
import { MainFinancialSystemStyle } from "./MainFinancialSystem.style";

export const MainFinancialSystem = ({main, documentNumber}) => {

  const {
       allBankRecords, 
       forceUpdate,
       resetAll,
      } = useContext(AppContext);

  const handleReset = () => {
    allBankRecords[documentNumber].reset();
    forceUpdate();
  }

  const handleResetAll = () => {
    resetAll();
    forceUpdate();
  }

  const TitleBar = () =>       
    <div className="componentTitleBar">
      <h3 className="title">{allBankRecords[documentNumber].documentType}</h3>
      <div>
        {main && <Button onClick={resetAll}>Reset All</Button>}
        <Button onClick={handleReset}>Reset</Button>
        <Button>Paste All</Button>
      </div>
    </div>

  const AllBankDetails = () => 
    <>
      {Object.entries(allBankRecords[documentNumber])
        .filter(item => item[0] in BankRecordElements)
        .map(([bankDetailsElementName,bankDetailsElementValue]) => 
          <BankDetailsItem 
            key={bankDetailsElementName} 
            documentNumber={documentNumber}
            bankRecord={allBankRecords[documentNumber]}
            bankDetailsElementName={bankDetailsElementName} 
            bankDetailsElementValue={bankDetailsElementValue} 
            handleClick={(e) => handleClick(e, allBankRecords[documentNumber], forceUpdate)}
          />
        )
      }
    </>

  const bottomBar = main &&
    <div className="bottomButtonBar">
      <SwiftRefLink />
    </div>

  return (
    <MainFinancialSystemStyle>
      <TitleBar />
      <AllBankDetails />
      {bottomBar}
    </MainFinancialSystemStyle>
  )}
