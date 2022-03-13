import { cleanString } from 'lib/cleanString';
import { elementToTitle } from 'lib/elementToTitle';
import { AcceptedDocuments } from 'types/AcceptedDocuments';
import {v4 as uuid} from 'uuid';

type ComparedDoc = {
    refDocId: string;
    docType: AcceptedDocuments;
    docValue: string;
}

export class AnaliticsRecord {
    public recordId?: string;
    public type: string;
    public benchmark: string;
    public allComparedDocs: ComparedDoc[];

    constructor(obj: Omit<AnaliticsRecord, 'updateBenchmark' | 'createComparingDoc' | 'updateComparingDoc' >) {
        const {recordId, type, benchmark, allComparedDocs} = obj;
        this.recordId = recordId ?? uuid();
        this.type = type;
        this.benchmark = benchmark;
        this.allComparedDocs = allComparedDocs ?? [];
    }

    createComparingDoc(newDoc: ComparedDoc) {
        this.allComparedDocs.push(newDoc);
    }

    readTitle() {
        return elementToTitle(this.type);
    }

    updateBenchmark(value: string) {
        this.benchmark = cleanString(value);
    }

    updateComparingDoc(docId: string, docType: AcceptedDocuments, docValue: string) {
        if (!docId) {
            return;
        }
        const index = this.allComparedDocs.findIndex(doc => doc.refDocId === docId);
        if (docType) {
            this.allComparedDocs[index].docType = docType;
        }
        if (docValue) {
            this.allComparedDocs[index].docValue = docValue;
        }
    }

    deleteComparingDoc(docId: string) {
        const index = this.allComparedDocs.findIndex(doc => doc.refDocId === docId);
        this.allComparedDocs.splice(index, 1);
    }
}
