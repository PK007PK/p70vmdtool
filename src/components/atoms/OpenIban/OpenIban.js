import { useEffect, useState } from "react";
import { OpenIbanStyle } from "./OpenIban.style";
// https://openiban.com/

export const OpenIban = ({iban, swift}) => {
    const [data, setData] = useState(null);

    useEffect(()=>{
        (async () => {
            const res = await fetch(`https://openiban.com/validate/${iban}?getBIC=true&validateBankCode=true`);
            const data = await res.json();
            setData(data);
        })()
    }, [iban]);

    console.log(data);
    if (!data) {
        return <p>Loading data</p>
    }

    return (
        <OpenIbanStyle >
            <p>API: {data.bankData.bic}</p>
        </OpenIbanStyle>
    )
}