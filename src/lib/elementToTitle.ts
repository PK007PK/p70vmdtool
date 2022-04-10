import { BankRecord } from "records/bank.record";

export function elementToTitle(element: keyof Omit<BankRecord, 'insert' | 'detectInIban' | 'reset' | 'documentType'>) {
    let title;
    switch (element) {
        case "bankKey":
            title = "Bank key";
            break;
        case "bankAccount":
            title = "Bank account";
            break;
        case "iban":
            title = "Iban";
            break;
        case "swift":
            title = "SWIFT code";
            break; 
        default:
            break;
    }
    return title;
}