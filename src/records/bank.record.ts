import { cleanString } from 'lib/cleanString';
import { AcceptedDocuments } from 'types/AcceptedDocuments';
import { BankElementStartEnd } from 'types/BankElementStartEnd';
import { BankRecordElements } from 'types/BankRecordElements';
import {v4 as uuid} from 'uuid';

const defaultValue = "-";

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
        this.bankKey = bankKey ?? defaultValue;
        this.bankAccount = bankAccount ?? defaultValue;
        this.iban = iban ?? defaultValue;
        this.swift = swift ?? defaultValue;
    }

    insert(key: BankRecordElements, value: string) {
        // Cleaning data from fin systems can prevent fin sys error detectiong
        if (this.documentType === AcceptedDocuments.Document) {
            this[key] = cleanString(value)
        } else {
            this[key] = value;
        };
        
    }

    detectInIban() {
        const bankKeyPosition : BankElementStartEnd = {
            start: defaultValue,
            end: defaultValue,
        };

        if (this.iban.includes(this.bankKey)) {
            bankKeyPosition.start = this.iban.indexOf(this.bankKey);
            bankKeyPosition.end = bankKeyPosition.start + this.bankKey.length - 1;
        }

        const bankAccountPosition : BankElementStartEnd = {
            start: defaultValue,
            end: defaultValue,
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

    reset() {
        this.bankKey = defaultValue;
        this.bankAccount = defaultValue;
        this.iban = defaultValue;
        this.swift = defaultValue;
    }
}
