import { BankRecord } from "records/bank.record";
import { BankRecordElements } from 'types/BankRecordElements';

interface ValuesFoundEntity {
  Key: string,
  "SWIFT/BIC": string, 
  Account: string,
  IBAN: string,
}

type ValuesFoundKey = keyof ValuesFoundEntity;

export const pasteAll = (record: BankRecord, updateFunction: Function) => {
    console.log(record);
    navigator.clipboard.readText()
      .then(text => {
        if (text === "") {
          return;
        }

        const re = /\s|\n|\t|\r/g

        const cleanedTextInTable = text
          .split(re)
          .filter(i => i !== "");

        const ValuesFound: ValuesFoundEntity = {
          Key: "", 
          "SWIFT/BIC": "", 
          Account: "", 
          IBAN: "",
        };

        for (const element of Object.keys(ValuesFound)) {
            for (let i = 0; i < cleanedTextInTable.length; i++) {
                if (element === "IBAN" && element !== cleanedTextInTable[i + 1] && element === cleanedTextInTable[i]) {
                    ValuesFound[element] = cleanedTextInTable[i + 1];
                } else if (element === "Key" && cleanedTextInTable[i - 1] === "Control") {

                } else if (element === cleanedTextInTable[i]) {
                  ValuesFound[element as ValuesFoundKey] = cleanedTextInTable[i + 1];
                }
            }
        }

        if (ValuesFound.Key) {
          record.insert(BankRecordElements.bankKey, ValuesFound.Key)
        };
        if (ValuesFound["SWIFT/BIC"]) {
          record.insert(BankRecordElements.swift, ValuesFound["SWIFT/BIC"])
        }
        if (ValuesFound["Account"]) {
          record.insert(BankRecordElements.bankAccount, ValuesFound["Account"])
        }
        if (ValuesFound["IBAN"]) {
          record.insert(BankRecordElements.iban, ValuesFound["IBAN"])
        }
        updateFunction();
      })

    navigator.clipboard.writeText("");
}