import { cleanString } from 'lib/cleanString';
import { AcceptedDocuments } from 'types/AcceptedDocuments';
import { BankElementStartEnd } from 'types/BankElementStartEnd';
import { BankRecordParts } from 'types/BankRecordParts';
import {v4 as uuid} from 'uuid';

export class BankRecord {
    public id?: string;
    public documentType?: AcceptedDocuments;
    public bankKey: string;
    public bankAccount: string;
    public iban: string;
    public swift: string;

    constructor(obj: Omit<BankRecord, 'insert' | 'detectInIban'>) {

        const {id, documentType, bankKey, bankAccount, iban, swift} = obj;
        
        this.id = id ?? uuid();
        this.documentType = documentType ?? AcceptedDocuments.Sap;
        this.bankKey = bankKey ?? "-";
        this.bankAccount = bankAccount ?? "-";
        this.iban = iban ?? "-";
        this.swift = swift ?? "-";
    }

    insert(key: BankRecordParts, value: string) {
        this[key] = cleanString(value);
    }

    detectInIban() {
        const bankKeyPosition : BankElementStartEnd = {
            start: "-",
            end: "-",
        };

        if (this.iban.includes(this.bankKey)) {
            bankKeyPosition.start = this.iban.indexOf(this.bankKey);
            bankKeyPosition.end = bankKeyPosition.start + this.bankKey.length - 1;
        }

        const bankAccountPosition : BankElementStartEnd = {
            start: "-",
            end: "-",
        }

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
