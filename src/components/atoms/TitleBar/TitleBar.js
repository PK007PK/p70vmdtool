import { TitleBarStyle } from "./TitleBar.style";
import { FaUserNinja } from 'react-icons/fa';

export const TitleBar = () => <TitleBarStyle>
        <FaUserNinja className="logo"/><h1>IBAN<span>defender</span></h1>
    </TitleBarStyle>