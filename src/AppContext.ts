import { createContext, useCallback, useState } from 'react';
import { BankRecord } from 'records/bank.record';
import { AcceptedDocuments } from 'types/AcceptedDocuments';

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [allBankRecords, setAllBankRecords] = useState([
    new BankRecord({documentType: AcceptedDocuments.Sap}),
    new BankRecord({documentType: AcceptedDocuments.Document}),
    new BankRecord({documentType: AcceptedDocuments.Cfin}),
  ]);
  
  const resetAll = () => setAllBankRecords([
    new BankRecord({documentType: AcceptedDocuments.Sap}),
    new BankRecord({documentType: AcceptedDocuments.Document}),
    new BankRecord({documentType: AcceptedDocuments.Cfin}),
  ]);

  const changeMainFsBetweenRecords = () => {
    if (allBankRecords[0].documentType === AcceptedDocuments.Cfin) {
      setAllBankRecords((prev)=>[
        ...prev,
        allBankRecords[0].documentType = AcceptedDocuments.Sap,
        allBankRecords[2].documentType = AcceptedDocuments.Cfin,
        ]
      )
    } else {
      setAllBankRecords((prev)=>[
        ...prev,
        allBankRecords[0].documentType = AcceptedDocuments.Cfin,
        allBankRecords[2].documentType = AcceptedDocuments.Sap,
        ]
      )
    }
  }

  return (
    <AppContext.Provider value={{
      allBankRecords, 
      resetAll,
      forceUpdate,
      changeMainFsBetweenRecords
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
