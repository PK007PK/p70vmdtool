import { AppContext } from "AppContext";
import { Button } from "components/atoms/Button/Button";
import { useContext} from "react";
import { defElemValue } from "types/defElemValue";

export const SwiftRefLink = ({className}: {className: string}) => {
    const {
        allBankRecords
       } = useContext(AppContext);

    const link = `https://www.swiftrefdata.com/new/en/iban#validation/`
    
    return (
        allBankRecords[0].iban !== defElemValue 
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