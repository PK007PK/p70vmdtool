import { sampleRecordError, sampleRecordOk } from "data/sampleData";
import { BankRecord } from "records/bank.record"

type AcceptedArg = "ok" | "err"

export const insertSampleData = (status: AcceptedArg, allBankRecords: BankRecord[], updateFunction: Function) => {
    if (status === "ok") {
        allBankRecords[0].bankKey = sampleRecordOk.bankKey;
        allBankRecords[0].bankAccount = sampleRecordOk.bankAccount;
        allBankRecords[0].iban = sampleRecordOk.iban;
        allBankRecords[0].swift = sampleRecordOk.swift;
        allBankRecords[1].bankAccount = sampleRecordOk.bankAccount;
        allBankRecords[1].iban = sampleRecordOk.iban;
        allBankRecords[2].bankKey = sampleRecordOk.bankKey;
        allBankRecords[2].bankAccount = sampleRecordOk.bankAccount;
        allBankRecords[2].iban = sampleRecordOk.iban;
        allBankRecords[2].swift = sampleRecordOk.swift;
    }
    if (status === "err") {
        allBankRecords[0].bankKey = sampleRecordOk.bankKey;
        allBankRecords[0].bankAccount = "0532113000";
        allBankRecords[0].iban = sampleRecordOk.iban;
        allBankRecords[0].swift = sampleRecordOk.swift;
        allBankRecords[1].bankAccount = sampleRecordError.bankAccount;
        allBankRecords[1].iban = sampleRecordError.iban;
        allBankRecords[2].bankKey = sampleRecordError.bankKey;
        allBankRecords[2].bankAccount = sampleRecordError.bankAccount;
        allBankRecords[2].iban = sampleRecordError.iban;
        allBankRecords[2].swift = sampleRecordError.swift;
    }
    updateFunction();
}