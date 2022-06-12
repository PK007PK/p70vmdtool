import { AppContext } from "AppContext";
import { Button } from "components/atoms/Button/Button";
import { useContext} from "react";
import { CommonProps } from "types/CommonProps";
import { defElemValue } from "types/defElemValue";

export const SwiftRefLink: React.FunctionComponent<CommonProps> = ({className}): JSX.Element | null => {
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
                title="Check in https://www.swiftrefdata.com, inject IBAN to fast check it"
            >
                SwiftRef
            </Button>
            : null
    )
}