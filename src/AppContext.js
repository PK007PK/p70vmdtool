import { createContext, useCallback, useState } from 'react';
import { BankRecord } from 'records/bank.record.ts';
import { AcceptedDocuments } from 'types/AcceptedDocuments';

export const AppContext = createContext();

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

  return (
    <AppContext.Provider value={{
      allBankRecords, 
      setAllBankRecords, 
      resetAll,
      forceUpdate
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
