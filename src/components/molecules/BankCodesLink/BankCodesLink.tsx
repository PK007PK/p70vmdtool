import { AppContext } from "AppContext";
import { Button } from "components/atoms/Button/Button";
import { useContext} from "react";
import { defElemValue } from "types/defElemValue";

export const BankCodesLink = ({className}: {className: string}) => {
    const {
        allBankRecords
       } = useContext(AppContext);

    const link = `https://bank.codes/iban/validate/`
    
    return (
        allBankRecords[0].iban !== defElemValue 
            ? <Button 
                href={`${link}`}
                as="a" 
                target="blank" 
                className={className}
                title="Check in https://bank.codes/, can get SWIFT Code"
            >
                Bank.Codes
            </Button>
            : null
    )
}