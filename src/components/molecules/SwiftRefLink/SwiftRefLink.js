import { AppContext } from "AppContext";
import { Button } from "components/atoms/Button/Button";
import { useContext, useEffect, useState } from "react";

export const SwiftRefLink = () => {
    const {
        bankRecord
       } = useContext(AppContext);

    const link = `https://www.swiftrefdata.com/new/en/iban#validation/`
    
    return (
        bankRecord.iban !== "-" 
            ? <Button as="a" href={`${link}${bankRecord.iban}`}>Check in SwiftRef</Button> 
            : null
    )
}