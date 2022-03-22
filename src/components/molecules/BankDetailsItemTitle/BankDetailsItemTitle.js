import { copyToClipboard } from "lib/copyToClipboard"
import { elementToTitle } from "lib/elementToTitle"
import { readAloud } from "lib/readAloud"
import { AiFillSound } from "react-icons/ai"
import { MdOutlineContentCopy, MdOutlineGppGood } from "react-icons/md"
import { defElemValue } from "types/defElemValue"

export const BankDetailsItemTitle = (props) => {
    const {
        bankDetailsElementName, 
        bankDetailsElementValue,
    } = props
    
    return (
        <div className="titleBar">
            <h3 className="title">{elementToTitle(bankDetailsElementName)}</h3>
            <div className="buttonBar">
                <button 
                    onClick={()=>readAloud(bankDetailsElementValue)}
                    disabled={bankDetailsElementValue === defElemValue ? true : false}
                >
                    <AiFillSound />
                </button>
                <button 
                    onClick={()=>copyToClipboard(bankDetailsElementValue)}
                >
                    <MdOutlineContentCopy />
                </button>
                <button>
                    <MdOutlineGppGood />
                </button>
            </div>
        </div>
    )
}