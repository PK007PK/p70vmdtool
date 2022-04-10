import { BankRecord } from "records/bank.record";
import {BankRecordElements} from "types/BankRecordElements";

export const pasteOneString = (e: React.MouseEvent<HTMLElement>, record: BankRecord, updateFunction: Function) => {
    navigator.clipboard.readText()
      .then(text => {
        if (text === "") {
          return;
        }
        const target = e.target as HTMLElement;
        record.insert(target.id as BankRecordElements, text.toString());
        updateFunction(); 
      })
    navigator.clipboard.writeText("");
  };