import { createContext, useCallback, useState } from 'react';
import { AdditionalBankRecord } from 'records/additionalBankRecord';
import { BankRecord } from 'records/bank.record.ts';
import { BankRecordParts } from 'types/BankRecordParts';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);

  const [bankRecord, setBankRecord] = useState(new BankRecord({}));

  const resetBankRecord = () => setBankRecord(new BankRecord({}));
  
  const [allAnaliticRecords, setAllAnaliticRecords] = useState(
    Object.values(BankRecordParts).map(element => new AdditionalBankRecord({type: element}))
  )

  return (
    <AppContext.Provider value={{
      bankRecord, setBankRecord, resetBankRecord,
      allAnaliticRecords, 
      forceUpdate
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
