import { AppContext } from "AppContext";
import { Button } from "components/atoms/Button/Button";
import { useContext} from "react";

export const SwiftRefLink = () => {
    const {
        allBankRecords
       } = useContext(AppContext);

    const link = `https://www.swiftrefdata.com/new/en/iban#validation/`
    
    return (
        allBankRecords[0].iban !== "-" 
            ? <Button as="a" href={`${link}${allBankRecords[0].iban}`}>Check in SwiftRef</Button> 
            : null
    )
}