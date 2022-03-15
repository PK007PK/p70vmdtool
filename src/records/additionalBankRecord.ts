import { elementToTitle } from 'lib/elementToTitle';
import { AcceptedDocuments } from 'types/AcceptedDocuments';
import { BankRecordParts } from 'types/BankRecordParts';

export class AdditionalBankRecord {
    public document: AcceptedDocuments;
    public type: BankRecordParts;
    public value: string;

    constructor(obj: Omit<AdditionalBankRecord, ''>) {
        const {document, type, value} = obj;
        this.document = document;
        this.type = type;
        this.value = value;
    }

    readTitle() {
        return elementToTitle(this.type)
    }
}
