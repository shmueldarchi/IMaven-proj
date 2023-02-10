import React,{useState} from 'react'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function CheckboxControl() {
  const [lableValue, setLableValue] = useState("LabelEditable");
  return (
    <div>
    <FormControlLabel control={<Checkbox defaultChecked />} label={lableValue} contentEditable="true" onChange={(event)=>{if(event.target.value!="on")setLableValue(event.target.value)}}/>
  </div>
  )
}

export default CheckboxControl