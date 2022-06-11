import { AppContext } from 'AppContext';
import { insertSampleData } from 'lib/insertSampleData';
import { useContext } from 'react';
import { BsShield } from 'react-icons/bs';
import { AppLogoBarStyle } from "./AppLogoBar.style";

export const AppLogoBar = () => {
    const {
        resetAll,
        allBankRecords,
        forceUpdate,
    } = useContext(AppContext);

    return (
        <AppLogoBarStyle>
            <div className='logoBar'>
                <BsShield className="logo"/>
                <h1 className="sign">IBAN
                <span>defender</span></h1>
            </div>
            <div className="sampleDataBar">
                <button className='smallButton' onClick={()=>resetAll()}>Reset all</button>
                <button className='smallButton' onClick={()=>insertSampleData("ok", allBankRecords, forceUpdate)}>Sample data: no error</button>
                <button className='smallButton' onClick={()=>insertSampleData("err", allBankRecords, forceUpdate)}>Sample data: error</button>
            </div>
        </AppLogoBarStyle>
    )
}