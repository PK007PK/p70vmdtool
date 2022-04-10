import { createContext, useCallback, useState } from 'react';
import { BankRecord, emptyBankRecord } from 'records/bank.record';
import { AcceptedDocuments } from 'types/AcceptedDocuments';

const initialBankRecords = [
  new BankRecord({
    ...emptyBankRecord,
    documentType: AcceptedDocuments.Sap
  }),
  new BankRecord({
    ...emptyBankRecord,
    documentType: AcceptedDocuments.Document
  }),
  new BankRecord({
    ...emptyBankRecord,
    documentType: AcceptedDocuments.Cfin
  }),
]

export const AppContext = createContext({
  allBankRecords: [...initialBankRecords],
  resetAll: () => {},
  forceUpdate: () => {},
  changeMainFsBetweenRecords: () => {},
});

const AppProvider = ({children}: {children: React.ReactNode}) => {

  const [, updateState] = useState({});
  const forceUpdate = useCallback(() => updateState({}), []);

  const [allBankRecords, setAllBankRecords] = useState<BankRecord[]>(
    [...initialBankRecords]
  );
  
  const resetAll = () => setAllBankRecords(
    [...initialBankRecords]
  );

  const changeMainFsBetweenRecords = () => {
    if (allBankRecords[0].documentType === AcceptedDocuments.Cfin) {
      setAllBankRecords((prev): BankRecord[] => {
        const modifiedRecords = [...prev];
        modifiedRecords[0].documentType = AcceptedDocuments.Sap;
        modifiedRecords[2].documentType = AcceptedDocuments.Cfin;
        return modifiedRecords;
      })
    } else {
      setAllBankRecords((prev): BankRecord[] => {
        const modifiedRecords = [...prev];
        modifiedRecords[0].documentType = AcceptedDocuments.Cfin;
        modifiedRecords[2].documentType = AcceptedDocuments.Sap;
        return modifiedRecords;
      })
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
