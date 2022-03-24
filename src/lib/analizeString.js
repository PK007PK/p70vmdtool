export const analizeString = () => {
    navigator.clipboard.readText()
      .then(text => {
        if (text === "") {
          return;
        }
        const cleanedTextInTable = text
            .split(" ")
            .filter(i => i !== "");
        
        const searchingFor = ["Bank Key", "SWIFT/BIC", "Bank Account", "IBAN"];
        const valuesFound = {};

        for (const element of searchingFor) {
            for (let i = 0; i < cleanedTextInTable.length; i++) {
                if (element === "IBAN" && element !== cleanedTextInTable[i + 1] && element === cleanedTextInTable[i]) {
                    let ibanValue = "";
                        for (let k = 1; k <= 8; k++) {
                            if (cleanedTextInTable[i + k]) ibanValue = ibanValue + cleanedTextInTable[i + k];
                        }
                    valuesFound[element] = ibanValue;
                } else if (element === cleanedTextInTable[i]) {
                    valuesFound[element] = cleanedTextInTable[i + 1]
                }
            }
        }
        console.log(valuesFound);
      })

    navigator.clipboard.writeText("");
}