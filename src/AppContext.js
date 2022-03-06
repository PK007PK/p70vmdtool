import React, { createContext, useCallback, useState } from 'react';
import { BankRecord } from 'records/bank.record.ts';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

const [bankRecord, setBankRecord] = useState(new BankRecord({}));
const [, updateState] = useState();
const forceUpdate = useCallback(() => updateState({}), []);



return (
    <AppContext.Provider value={{bankRecord, setBankRecord, forceUpdate}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
