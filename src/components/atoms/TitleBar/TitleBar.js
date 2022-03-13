import { TitleBarStyle } from "./TitleBar.style";
import { FaUserNinja } from 'react-icons/fa';

export const TitleBar = () => {

    return (
        <TitleBarStyle>
            <div className="logoBox">
                <FaUserNinja className="logo"/>
                <h1>IBAN<span>defender</span></h1>
            </div>
        </TitleBarStyle>
    )
}