import { BankRecordElements } from "types/BankRecordElements"

export const sampleRecordOk = {
    [BankRecordElements.bankKey]: "37040044",
    [BankRecordElements.bankAccount]: "0532013000",
    [BankRecordElements.iban]: "DE89370400440532013000",
    [BankRecordElements.swift]: "COBADEFF3701",
}

export const sampleRecordError = {
    [BankRecordElements.bankKey]: "37041044",
    [BankRecordElements.bankAccount]: "0532013200",
    [BankRecordElements.iban]: "DE89370410440532013020",
    [BankRecordElements.swift]: "COBA1EFF3701",
}