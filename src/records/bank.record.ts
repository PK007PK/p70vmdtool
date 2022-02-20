import { BankRecordDetails } from 'types/BankRecordDetails';
import { DocumentsBase } from 'types/documentBase';
import {v4 as uuid} from 'uuid';

export class BankRecord {
    public id?: string;
    public documentType?: DocumentsBase;
    public bankKey?: string;
    public bankAccount?: string;
    public iban?: string;
    public swift?: string;

    constructor(obj: Omit<BankRecord, 'insert' | '...'>) {

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
        this[key] = value.replaceAll(/\s/g,'');
    }
}
