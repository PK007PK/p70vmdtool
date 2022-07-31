import { AppContext } from "AppContext";
import { Button } from "components";
import { useContext} from "react";
import { CommonProps } from "types/CommonProps";
import { defElemValue } from "types/defElemValue";

export const BankCodesLink: React.FunctionComponent<CommonProps> = ({className}): JSX.Element | null => {
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