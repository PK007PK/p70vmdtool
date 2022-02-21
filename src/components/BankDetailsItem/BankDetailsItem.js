import { AppContext } from "AppContext";
import { DisplayDetails } from "components/DisplayDetails/DisplayDetails";
import { useContext } from "react";
import { BankDetailsItemStyle } from "./BankDetailsItem.styles";

export const BankDetailsItem = ({element, handleClick, value}) => {
    const {
        doc
       } = useContext(AppContext);

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

    const {bankAccountDetected, bankKeyDetected} = doc.detectInIban()

    const IbanStats = () => <div className="ibanStatsBar">
        <div>Bank key{" "} 
            <span style={!bankKeyDetected ? {fontWeight: "bold", color: "orange"} : {}}>
                {bankKeyDetected ? "detected" : "not detected"}
            </span>
        </div>
        <div>Bank account{" "} 
            <span style={!bankAccountDetected ? {fontWeight: "bold", color: "orange"} : {}}>
                {bankAccountDetected ? "detected" : "not detected"}
            </span>
        </div>
    </div>

    return (
        <BankDetailsItemStyle>
            <div className="titleBar">
                <h3 className="title">{title}</h3>
                <span className="count">Count: {value === "-" ? "-" : value.length}</span>
            </div>
            <button id={element} onClick={handleClick}>
                <DisplayDetails element={element} details={value} />
            </button>
            {element === "iban" &&  <IbanStats />}
        </BankDetailsItemStyle>
    )
}