import React, { createContext, useState } from 'react';
import { BankRecord } from 'records/bank.record.ts';

export const AppContext = createContext();

const AppProvider = ({ children }) => {

const doc = new BankRecord({});


return (
    <AppContext.Provider value={{doc}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;

// const initialValues = {
//   bankKey: ["-", "-", "-", "-"],
//   account: ["-", "-", "-", "-"],
//   iban: ["-", "-", "-", "-"],
//   swift: ["-", "-", "-", "-"],
// }
// const [bankDetails, setBankDetails] = useState(initialValues);
// const updateBD = (position, value) => setBankDetails({...bankDetails, [position]: value});
