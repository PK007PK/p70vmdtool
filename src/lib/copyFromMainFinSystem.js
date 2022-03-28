export const copyFromMainFinSystem = (mainRecord, currentRecord, element, forceUpdate) => {
    currentRecord[element] = mainRecord[element];
    forceUpdate();
}