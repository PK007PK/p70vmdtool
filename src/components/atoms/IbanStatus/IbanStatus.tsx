import { CommonProps } from "types/CommonProps";
import { IbanStatusStyle } from "./IbanStatus.style";

interface IbanStatusProps extends CommonProps{
    bankKeyDetected: boolean,
    bankAccountDetected: boolean,
}

export const IbanStatus: React.FunctionComponent<IbanStatusProps> = ({className, bankKeyDetected, bankAccountDetected}): JSX.Element => 
    <IbanStatusStyle className={className}>
        <div>Bank key{" "} 
            <span style={!bankKeyDetected ? {fontWeight: "bold", color: "orange"} : {}}>
                {bankKeyDetected ? "detected" : "not detected"}
            </span>
        </div>
        <div>Bank account{" "} 
            <span style={!bankAccountDetected ? {fontWeight: "bold", color: "orange"} : {}}>
                {bankAccountDetected ? "detected" : "not detected"}
            </span>
        </div>
    </IbanStatusStyle>