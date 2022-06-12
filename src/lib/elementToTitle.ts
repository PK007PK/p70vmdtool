import { BankRecord } from "records/bank.record";
import { BankRecordElements } from "types/BankRecordElements";

export function elementToTitle(element: keyof Omit<BankRecord, 'insert' | 'detectInIban' | 'reset' | 'documentType'>) {
    let title;
    switch (element) {
        case BankRecordElements.bankKey:
            title = "Bank key";
            break;
        case BankRecordElements.bankAccount:
            title = "Bank account";
            break;
        case BankRecordElements.iban:
            title = "Iban";
            break;
        case BankRecordElements.swift:
            title = "SWIFT code";
            break; 
        default:
            break;
    }
    return title;
}