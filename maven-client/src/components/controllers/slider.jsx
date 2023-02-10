import React,{useState} from 'react'
import Slider from '@mui/material/Slider';

function SliderControl({props}) {

  function valuetext(value) {
    return `${value}${props.units}`;
  }
  const [lableValue, setLableValue] = useState("");
  return (
    <div>
    <div contentEditable="true" onChange={(event)=>{setLableValue(event.target.value)}}>{lableValue}</div>
    <Slider
    aria-label="Temperature"
    defaultValue={30}
    getAriaValueText={lableValue}
    color="secondary"
/> 
    </div>
 )
}

export default SliderControl