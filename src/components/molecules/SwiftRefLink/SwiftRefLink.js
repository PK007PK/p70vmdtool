import { AppContext } from "AppContext";
import { Button } from "components/atoms/Button/Button";
import { useContext} from "react";

export const SwiftRefLink = ({className}) => {
    const {
        allBankRecords
       } = useContext(AppContext);

    const link = `https://www.swiftrefdata.com/new/en/iban#validation/`
    
    return (
        allBankRecords[0].iban !== "-" 
            ? <Button 
                href={`${link}${allBankRecords[0].iban}`}
                as="a" 
                target="blank" 
                className={className} 
            >
                Check in SwiftRef
            </Button>
            : null
    )
}