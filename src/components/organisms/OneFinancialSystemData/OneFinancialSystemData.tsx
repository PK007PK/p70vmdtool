import { useContext, useMemo, useState } from "react";
import { AppContext } from "AppContext";
import { BankRecordElements } from "types/BankRecordElements";
import { BankDetailsItem } from "components/molecules/BankDetailsItem/BankDetailsItem";
import { pasteOneString } from "lib/pasteOneString";
import { Button } from "components/atoms/Button/Button";
import { OneFinancialSystemDataStyle } from "./OneFinancialSystemData.style";
import { pasteAll } from "lib/pasteAll";
import { OpenIban } from "components/atoms/OpenIban/OpenIban";
import { HiOutlineSwitchVertical } from 'react-icons/hi';
import { AcceptedDocuments } from "types/AcceptedDocuments";

export const OneFinancialSystemData = ({main, systemNumber}: {main: boolean, systemNumber: number}) => {

  const {
       allBankRecords, 
       forceUpdate,
       resetAll,
       changeMainFsBetweenRecords,
      } = useContext(AppContext);

  const bankRecord = allBankRecords[systemNumber];

  const [isVisible, setIsVisible] = useState<Boolean>(true);

  const handleReset = () => {
    bankRecord.reset();
    forceUpdate();
  }

  const TitleBar = () =>       
    <div className="componentTitleBar">
      <div className="title">
        <h3>
        {main && "Main fs: "}{bankRecord.documentType}
        </h3>
        {bankRecord.documentType !== AcceptedDocuments.Document && 
          <button 
            onClick={changeMainFsBetweenRecords}
            title="Choose which financial system is main"  
          >
            <HiOutlineSwitchVertical />
          </button>}
      </div>
      <div className="buttonsBar">
        {main && <Button onClick={()=>resetAll()} title="Reset app">Reset All</Button>}
        <Button onClick={handleReset} title="Reset current financial system">Reset</Button>
        {bankRecord.documentType !== AcceptedDocuments.Document &&
          <Button 
            onClick={ ()=> pasteAll(bankRecord, forceUpdate)}
            title="Paste data from clipboard copied form fin sys, with kayword recognition"
          >
            OCR paste
          </Button>
        }
        <Button className="hideButton" onClick={()=>setIsVisible(false)}>X</Button>
      </div>
    </div>

  const AllBankDetails = () => 
    <>
      {Object.entries(bankRecord)
        .filter(item => item[0] in BankRecordElements)
        .map(([bankDetailsElementName,bankDetailsElementValue]) => {
            if (bankRecord.documentType === AcceptedDocuments.Document && bankDetailsElementName === BankRecordElements.bankKey) {
              return null;
            }
            if (bankRecord.documentType === AcceptedDocuments.Document && bankDetailsElementName === BankRecordElements.bankAccount) {
              return null;
            }
            return (
            <BankDetailsItem 
              key={bankDetailsElementName} 
              bankRecord={bankRecord}
              bankDetailsElementName={bankDetailsElementName} 
              bankDetailsElementValue={bankDetailsElementValue} 
              handleClick={(e: React.MouseEvent<HTMLElement>) => pasteOneString(e, bankRecord, forceUpdate)}
            />
            )
          }
        )
      }
    </>

  const openIbanBar = useMemo(()=> main &&
    <div className="apiBar">
      <OpenIban iban={bankRecord.iban}/>
    </div>
  ,[bankRecord.iban, main])

  if (!isVisible) {
    return null;
  }

  return (
    <OneFinancialSystemDataStyle>
      <TitleBar />
      <AllBankDetails />
      {openIbanBar}
    </OneFinancialSystemDataStyle>
  )}
