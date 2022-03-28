import { useEffect, useState } from "react";
import { defElemValue } from "types/defElemValue";
import { OpenIbanStyle } from "./OpenIban.style";
// https://openiban.com/

export const OpenIban = ({iban}) => {
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
        return <p>Loading data...</p>
    }

    return (
        <OpenIbanStyle >
            {iban === defElemValue ?
                null :
                <p>API: {data?.bankData?.bic ?? "Cannot get BIC. No information available"}</p>}
        </OpenIbanStyle>
    )
}