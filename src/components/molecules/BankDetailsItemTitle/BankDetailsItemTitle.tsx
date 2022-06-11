import { copyFromMainFinSystem } from "lib/copyFromMainFinSystem"
import { copyToClipboard } from "lib/copyToClipboard"
import { elementToTitle } from "lib/elementToTitle"
import { readAloud } from "lib/readAloud"
import { AiFillSound } from "react-icons/ai"
import { MdOutlineContentCopy, MdOutlineGppGood } from "react-icons/md"
import { BankRecord } from "records/bank.record"
import { CommonProps } from "types/CommonProps"
import { defElemValue } from "types/defElemValue"
import { BankCodeNet } from "../BankCodeNet/BankCodeNet"
import { BankCodesLink } from "../BankCodesLink/BankCodesLink"
import { SwiftRefLink } from "../SwiftRefLink/SwiftRefLink"
import { BankDetailsItemStyle } from "./BankDetailsItemTitleStyle"

interface Props extends CommonProps{
    mainRecord: BankRecord,
    currentRecord: BankRecord,
    bankDetailsElementName: keyof Omit<BankRecord, 'insert' | 'detectInIban' | 'reset' | 'documentType'>, 
    bankDetailsElementValue: string,
    system: string,
    forceUpdate: () => void,
}

export const BankDetailsItemTitle = (props: Props) => {
    const {
        bankDetailsElementName, 
        bankDetailsElementValue,
        system,
        className,
        currentRecord,
        mainRecord,
        forceUpdate
    } = props;

    return (
        <BankDetailsItemStyle className={className}>
            <h3 className="title">{elementToTitle(bankDetailsElementName)}</h3>
            <div className="buttonBar">
                {bankDetailsElementValue !== defElemValue &&
                    <button 
                        onClick={()=>readAloud(bankDetailsElementValue)}
                        title="Read it loud"
                        className="smallButton"
                    >
                        <AiFillSound />
                    </button>
                }
                {bankDetailsElementValue !== defElemValue &&
                    <button 
                        onClick={()=>copyToClipboard(bankDetailsElementValue)}
                        title="Copy to clipboard"
                        className="smallButton"
                    >
                        <MdOutlineContentCopy />
                    </button>
                }
                {system !== mainRecord.documentType && mainRecord[bankDetailsElementName] !== defElemValue &&
                    <button
                        title="Copy from SAP"
                        className="smallButton"
                        onClick={()=> copyFromMainFinSystem(mainRecord, currentRecord, bankDetailsElementName, forceUpdate)}
                    >
                        <MdOutlineGppGood />
                    </button>
                }
                {system === mainRecord.documentType && bankDetailsElementName === "iban" &&
                    <>
                        <SwiftRefLink className="smallButton" />
                        <BankCodesLink className="smallButton" />
                        <BankCodeNet className="smallButton" />
                    </>
                }
            </div>
        </BankDetailsItemStyle>
    )
}