import { BankRecord } from "records/bank.record";


export const copyFromMainFinSystem = (
        mainRecord: BankRecord, 
        currentRecord: BankRecord, 
        element: keyof Omit<BankRecord, 'insert' | 'detectInIban' | 'reset' | 'documentType'>, 
        forceUpdate: Function,
    ) => {
        currentRecord[element] = mainRecord[element];
        forceUpdate();
    }