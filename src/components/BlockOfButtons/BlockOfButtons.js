import { Boxes } from "components/Boxes/Boxes"
import { Button } from "components/Button/Button.styles"
import { arrayEquals } from "lib/arrayEquals";
import { useState } from "react";
import { BlockOfButtonsStyle } from "./BlockOfButtons.style";

export const BlockOfButtons = ({name}) => {
    const [values, setValues] = useState({
        value1: ["-", "-", "-", "-"],
        value2: ["-", "-", "-", "-"],
        value3: ["-", "-", "-", "-"],
      });
    
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
    <BlockOfButtonsStyle allOk={(arrayEquals(values.value1,values.value2) && arrayEquals(values.value2,values.value3)) ? true : false}>
        <h3 className="title">{name}</h3>
        <div>
            <Button data-type="value1" onClick={handleClick}>
                <Boxes name={"value1"} reference={null} arr={values.value1}/>
            </Button>
        </div>
        <div>
            <Button data-type="value2" onClick={handleClick}>
                <Boxes name={"value2"} reference={values.value1} arr={values.value2}/>
            </Button>
        </div>
        <div>
            <Button data-type="value3" onClick={handleClick}>
                <Boxes name={"value3"} reference={values.value1} arr={values.value3}/>
            </Button>
        </div>
    </BlockOfButtonsStyle>
    )
}