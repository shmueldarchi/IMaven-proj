import React, { useState } from 'react'
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';

function RadiobuttonControl() {
  const [lableValue, setLableValue] = useState("");
  return (
    <div>
      <div contentEditable="true" onChange={(event)=>{setLableValue(event.target.value)}}>lable</div>
    <FormControlLabel value={lableValue} control={<Radio />} label={lableValue} />
    </div>

  )
}

export default RadiobuttonControl