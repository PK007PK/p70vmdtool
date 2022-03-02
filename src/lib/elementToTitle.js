export function elementToTitle(element) {
    let title;
    switch (element) {
        case "bankKey":
            title = "Bank key";
            break;
        case "bankAccount":
            title = "Bank account";
            break;
        case "iban":
            title = "Iban";
            break;
        case "swift":
            title = "Swift";
            break; 
        default:
            break;
    }
    return title;
}