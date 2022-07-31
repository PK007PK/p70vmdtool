import { AppContext } from "AppContext";

import { useContext} from "react";
import { CommonProps } from "types/CommonProps";
import { defElemValue } from "types/defElemValue";

import { Button } from "components";

export const BankCodeNet: React.FunctionComponent<CommonProps> = ({className}): JSX.Element | null => {
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