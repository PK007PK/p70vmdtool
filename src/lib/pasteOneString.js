export const pasteOneString = (e, record, updateFunction) => {
    navigator.clipboard.readText()
      .then(text => {
        if (text === "") {
          return;
        }
        record.insert(e.target.id, text.toString());
        updateFunction(); 
      })
    navigator.clipboard.writeText("");
  };