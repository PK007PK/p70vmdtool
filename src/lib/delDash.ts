import { BankRecord } from "records/bank.record";

export function delDash(record: BankRecord, updateFunction: Function) {
    record.bankAccount = record.bankAccount.replaceAll("-","");
    updateFunction();
}