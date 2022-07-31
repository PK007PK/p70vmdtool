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

interface Props {
    iban: string
}

export const OpenIban: React.FunctionComponent<Props> = ({iban}): JSX.Element => {

    const [data, setData] = useState<ApiResp | null>(null);

    useEffect(()=>{
        (async (): Promise<void> => {
            try {
                const res = await fetch(`https://openiban.com/validate/${iban}?getBIC=true&validateBankCode=true`);
                const respData: ApiResp = await res.json();
                setData(respData);
            } catch(error) {
                console.error(error);
            }
        })()
    }, [iban]);

    if (data) {
        return (
            <OpenIbanStyle >
                {
                    iban === defElemValue ? null :
                    <p>API: {data?.bankData?.bic ?? "No data in OpenIban"}</p>
                }
            </OpenIbanStyle>
        )
    }

    return <></>
}