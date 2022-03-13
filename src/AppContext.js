import { createContext, useCallback, useState } from 'react';
import { AnaliticsRecord } from 'records/analiticsRecord.record';
import { BankRecord } from 'records/bank.record.ts';
import { BankRecordDetails } from 'types/BankRecordDetails';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

const [, updateState] = useState();
const forceUpdate = useCallback(() => updateState({}), []);

const [bankRecord, setBankRecord] = useState(new BankRecord({}));

const [analiticRecords, setAnaliticRecords] = useState(
  Object.values(BankRecordDetails).map(element => new AnaliticsRecord({type: element}))
)

return (
    <AppContext.Provider value={{bankRecord, setBankRecord, forceUpdate, analiticRecords}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
