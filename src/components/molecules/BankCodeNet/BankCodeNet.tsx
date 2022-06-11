import { AppContext } from "AppContext";
import { Button } from "components/atoms/Button/Button";
import { useContext} from "react";
import { defElemValue } from "types/defElemValue";

export const BankCodeNet = ({className}: {className: string}) => {
    const {
        allBankRecords
       } = useContext(AppContext);

    const link = `https://bank-code.net/iban-checker?iban=`
    
    return (
        allBankRecords[0].iban !== defElemValue 
            ? <Button 
                href={`${link}${allBankRecords[0].iban}`}
                as="a" 
                target="blank" 
                className={className} 
                title="Check in https://bank-code.net, inject IBAN to fast check it"
            >
                BCodeNet
            </Button>
            : null
    )
}