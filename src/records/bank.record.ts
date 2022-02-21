import { BankRecordDetails } from 'types/BankRecordDetails';
import { DocumentsBase } from 'types/documentBase';
import {v4 as uuid} from 'uuid';

export class BankRecord {
    public id?: string;
    public documentType?: DocumentsBase;
    public bankKey: string;
    public bankAccount: string;
    public iban: string;
    public swift: string;

    constructor(obj: Omit<BankRecord, 'insert' | 'detectInIban'>) {

        const {id, documentType, bankKey, bankAccount, iban, swift} = obj;
        
        //tests
        this.id = id ?? uuid();
        this.documentType = documentType ?? DocumentsBase.Sap;
        this.bankKey = bankKey ?? "-";
        this.bankAccount = bankAccount ?? "-";
        this.iban = iban ?? "-";
        this.swift = swift ?? "-";
    }

    insert(key: BankRecordDetails, value: string) {
        // this[key] = value.replaceAll(/\s/g,'');
        this[key] = value.replaceAll(" ", "").replaceAll("-", "").replaceAll("/", "");
    }

    detectInIban() {
        const bankKeyPosition = {
            start: 0,
            end: 0,
        };

        if (this.iban.includes(this.bankKey)) {
            bankKeyPosition.start = this.iban.indexOf(this.bankKey);
            bankKeyPosition.end = bankKeyPosition.start + this.bankKey.length - 1;
        }

        const bankAccountPosition = {
            start: 0,
            end: 0,
        };

        if (this.iban.includes(this.bankAccount)) {
            bankAccountPosition.start = this.iban.indexOf(this.bankAccount);
            bankAccountPosition.end = bankAccountPosition.start + this.bankAccount.length - 1;
        }

        return {
            bankKeyDetected: this.iban.includes(this.bankKey),
            bankKeyPosition,
            bankAccountDetected: this.iban.includes(this.bankAccount),
            bankAccountPosition,
        }
    }
}
