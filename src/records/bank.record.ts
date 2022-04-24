import { cleanString } from 'lib/cleanString';
import { AcceptedDocuments } from 'types/AcceptedDocuments';
import { BankElementStartEnd } from 'types/BankElementStartEnd';
import { BankRecordElements } from 'types/BankRecordElements';
import { defElemValue } from 'types/defElemValue';

interface BankRecordEntity {
    documentType: AcceptedDocuments,
    bankKey: string,
    bankAccount: string,
    iban: string,
    swift: string,
}

export class BankRecord implements BankRecordEntity {
    public documentType: AcceptedDocuments;
    public bankKey: string;
    public bankAccount: string;
    public iban: string;
    public swift: string;

    constructor(obj: Omit<BankRecord, 'insert' | 'detectInIban' | 'reset'>) {

        const {documentType, bankKey, bankAccount, iban, swift} = obj;
        
        this.documentType = documentType ?? AcceptedDocuments.Sap;
        this.bankKey = bankKey ?? defElemValue;
        this.bankAccount = bankAccount ?? defElemValue;
        this.iban = iban ?? defElemValue;
        this.swift = swift ?? defElemValue;
    }

    insert(key: BankRecordElements, value: string) {
        // Cleaning data from fin systems can prevent fin sys error detectiong
        if (this.documentType === AcceptedDocuments.Document) {
            this[key] = cleanString(value)
        } else {
            this[key] = `${value}`;
        };
        
    }

    detectInIban() {
        const bankKeyPosition : BankElementStartEnd = {
            start: defElemValue,
            end: defElemValue,
        };

        if (this.iban.includes(this.bankKey)) {
            bankKeyPosition.start = this.iban.indexOf(this.bankKey);
            bankKeyPosition.end = bankKeyPosition.start + this.bankKey.length - 1;
        }

        const bankAccountPosition : BankElementStartEnd = {
            start: defElemValue,
            end: defElemValue,
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
        this.bankKey = defElemValue;
        this.bankAccount = defElemValue;
        this.iban = defElemValue;
        this.swift = defElemValue;
    }
}

export const emptyBankRecord: Omit<BankRecord, 'documentType' | 'insert' | 'detectInIban' | 'reset'> = {
    bankKey: defElemValue,
    bankAccount: defElemValue,
    iban: defElemValue,
    swift: defElemValue,
};