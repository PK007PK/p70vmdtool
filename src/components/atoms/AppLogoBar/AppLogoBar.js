import { FaUserNinja } from 'react-icons/fa';
import { AppLogoBarStyle } from "./AppLogoBar.style";

export const AppLogoBar = () => {

    return (
        <AppLogoBarStyle>
            <div className="logoBox">
                <FaUserNinja className="logo"/>
                <h1>IBAN<span>defender</span></h1>
            </div>
        </AppLogoBarStyle>
    )
}