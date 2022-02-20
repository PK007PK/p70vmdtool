import { DisplayDetails } from "components/DisplayDetails/DisplayDetails";
import { ButtonStyle } from "./Button.styles";

export const Button = ({element, handleClick, value}) =>
    <ButtonStyle id={element} onClick={handleClick}>
        <div className="placeholder" />
        <DisplayDetails element={element} details={value} />
    </ButtonStyle>