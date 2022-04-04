import { BsShield } from 'react-icons/bs';
import { AppLogoBarStyle } from "./AppLogoBar.style";

export const AppLogoBar = () => {

    return (
        <AppLogoBarStyle>
                {/* <FaUserNinja className="logo"/> */}
                <BsShield className="logo"/>
                <h1 className="sign">IBAN
                <span>defender</span></h1>
        </AppLogoBarStyle>
    )
}