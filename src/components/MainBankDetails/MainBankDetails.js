import { AppContext } from "AppContext";
import { Boxes2 } from "components/Boxes2/Boxes2";
import { useContext } from "react";
import { MainBankDetailsStyle } from "./MainBankDetails.style";

export const MainBankDetails = () => {
    const {
        bankDetails, updateBD, documentsBase
      } = useContext(AppContext);

      console.log(documentsBase);
      
      const log = () => console.log(documentsBase)
      const update = () => updateBD("bankKey", "XXX");

      const handleClick = (e) => {
        navigator.clipboard.readText()
          .then(text => {
            if (text === "") {
              return;
            }
            setValues({...values, [e.target.dataset.type]: text.trim().split('')})
          })
        navigator.clipboard.writeText("");
      };

    return (
        <MainBankDetailsStyle>
            <div>
                <h3>Bank key</h3>
                <button onClick={log}><Boxes2 /></button>
            </div>
            <div>
                <h3>Account</h3>
                <button onClick={log}>Bank key</button>
            </div>
            <div>
                <h3>IBAN</h3>
                <button onClick={log}>Bank key</button>
            </div>
            <div>
                <h3>SWIFT</h3>
                <button onClick={log}>Bank key</button>
            </div>
        </MainBankDetailsStyle>
    )
}