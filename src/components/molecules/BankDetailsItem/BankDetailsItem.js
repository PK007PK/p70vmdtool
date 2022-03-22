import { AppContext } from "AppContext";
import { IbanStatus } from "components/atoms/IbanStatus/IbanStatus";
import { TranfsormStringIntoBoxes } from "components/atoms/TranfsormStringIntoBoxes/TranfsormStringIntoBoxes";
import { elementToTitle } from "lib/elementToTitle";
import { useContext } from "react";
import { BankDetailsItemStyle } from "./BankDetailsItem.styles";
import { AiFillSound } from 'react-icons/ai';
import { MdOutlineContentCopy } from 'react-icons/md';
import { MdOutlineGppGood } from 'react-icons/md';
import { BiMicrophone } from 'react-icons/bi';
import { readAloud } from "lib/readAloud";

export const BankDetailsItem = (props) => {
    const {
        bankDetailsElementName, 
        bankDetailsElementValue, 
        handleClick, 
        bankRecord,
    } = props;

    const {
        bankAccountDetected, 
        bankKeyDetected
    } = bankRecord.detectInIban()

    const {
        allBankRecords
    } = useContext(AppContext);

    const theSameAsMain = bankRecord[bankDetailsElementName] === allBankRecords[0][bankDetailsElementName];

    const TitleBar = () =>             
        <div className="titleBar">
            <h3 className="title">{elementToTitle(bankDetailsElementName)}</h3>
        </div>

    return (
        <BankDetailsItemStyle>
            <TitleBar />
            <button id={bankDetailsElementName} onClick={handleClick}>
                <TranfsormStringIntoBoxes 
                    bankDetailsElementName={bankDetailsElementName} 
                    bankDetailsElementValue={bankDetailsElementValue}
                    bankRecord={bankRecord}
                    theSameAsMain={theSameAsMain}
                />
            </button>
            <div className="buttonBar">
                <button onClick={()=>readAloud(bankDetailsElementValue)}><AiFillSound /></button>
                <button ><BiMicrophone /></button>
                <button ><MdOutlineContentCopy /></button>
                <button ><MdOutlineGppGood /></button>
                {/* <span className="count">
                    Characters: {bankDetailsElementValue === "-" ? "-" : bankDetailsElementValue.length}
                </span> */}
            </div>
 
            {bankDetailsElementName === "iban" && 
                <IbanStatus 
                    bankKeyDetected={bankKeyDetected} 
                    bankAccountDetected={bankAccountDetected} 
                    className="ibanStatsBar" 
                />
            }
        </BankDetailsItemStyle>
    )
}