import { copyFromMainFinSystem } from "lib/copyFromMainFinSystem"
import { copyToClipboard } from "lib/copyToClipboard"
import { elementToTitle } from "lib/elementToTitle"
import { readAloud } from "lib/readAloud"
import { AiFillSound } from "react-icons/ai"
import { MdOutlineContentCopy, MdOutlineGppGood } from "react-icons/md"
import { defElemValue } from "types/defElemValue"
import { SwiftRefLink } from "../SwiftRefLink/SwiftRefLink"
import { BankDetailsItemStyle } from "./BankDetailsItemTitleStyle"

export const BankDetailsItemTitle = (props) => {
    const {
        bankDetailsElementName, 
        bankDetailsElementValue,
        system,
        className,
        currentRecord,
        mainRecord,
        forceUpdate
    } = props

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
                {system !== "SAP" && mainRecord[bankDetailsElementName] !== defElemValue &&
                    <button
                        title="Copy from SAP"
                        className="smallButton"
                        onClick={()=>copyFromMainFinSystem(mainRecord, currentRecord, bankDetailsElementName, forceUpdate)}
                    >
                        <MdOutlineGppGood />
                    </button>
                }
                {system === "SAP" && bankDetailsElementName === "iban" &&
                    <SwiftRefLink className="smallButton" />
                }
            </div>
        </BankDetailsItemStyle>
    )
}