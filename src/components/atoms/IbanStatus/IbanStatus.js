import { IbanStatusStyle } from "./IbanStatus.style";

export const IbanStatus = ({className, bankKeyDetected, bankAccountDetected}) => 
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