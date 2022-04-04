export const pasteAll = (record, updateFunction) => {
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

        const searchingFor = ["Key", "SWIFT/BIC", "Account", "IBAN"];
        const valuesFound = {};

        for (const element of searchingFor) {
            for (let i = 0; i < cleanedTextInTable.length; i++) {
                if (element === "IBAN" && element !== cleanedTextInTable[i + 1] && element === cleanedTextInTable[i]) {
                    valuesFound[element] = cleanedTextInTable[i + 1];
                } else if (element === cleanedTextInTable[i]) {
                    valuesFound[element] = cleanedTextInTable[i + 1]
                }
            }
        }

        if (valuesFound.Key) {
          record.insert("bankKey", valuesFound.Key)
        };
        if (valuesFound["SWIFT/BIC"]) {
          record.insert("swift", valuesFound["SWIFT/BIC"])
        }
        if (valuesFound["Account"]) {
          record.insert("bankAccount", valuesFound["Account"])
        }
        if (valuesFound["IBAN"]) {
          record.insert("iban", valuesFound["IBAN"])
        }
        updateFunction();
      })

    navigator.clipboard.writeText("");
}