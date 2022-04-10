import { useEffect, useState } from "react";
import { defElemValue } from "types/defElemValue";
import { OpenIbanStyle } from "./OpenIban.style";
// https://openiban.com/

interface ApiResp {
    valid: string;
    messages: string[];
    iban: string;
    bankData: {
        bankCode: string,
        name: string,
        zip: string,
        city: string,
        bic: string,
    }
}

export const OpenIban = ({iban}: {iban: string}) => {
    const [data, setData] = useState<ApiResp | null>(null);

    useEffect(()=>{
        (async (): Promise<void> => {
            try {
                const res = await fetch(`https://openiban.com/validate/${iban}?getBIC=true&validateBankCode=true`);
                const data: ApiResp = await res.json();
                setData(data);
            } catch(error) {
                console.error(error);
            }
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
                <p>API: {data?.bankData?.bic ?? "Cannot get BIC from OpenIban"}</p>}
        </OpenIbanStyle>
    )
}