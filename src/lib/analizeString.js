export const analizeString = () => {
    navigator.clipboard.readText()
      .then(text => {
        if (text === "") {
          return;
        }
        const cleanedTextInTable = text
            .split(" ")
            .filter(i => i !== "");
        
        const searchingFor = ["Key", "SWIFT/BIC", "Account", "IBAN"];
        const valuesFound = {};

        for (const element of searchingFor) {
            for (let i = 0; i < cleanedTextInTable.length; i++) {
                if (element === "IBAN" && element !== cleanedTextInTable[i + 1] && element === cleanedTextInTable[i]) {
                    valuesFound[element] = cleanedTextInTable[i];
                } else if (element === cleanedTextInTable[i]) {
                    valuesFound[element] = cleanedTextInTable[i + 1]
                }
            }
        }
        console.log(valuesFound);
      })

    navigator.clipboard.writeText("");
}