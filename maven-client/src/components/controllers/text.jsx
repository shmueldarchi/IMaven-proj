import React from 'react'
import TextareaAutosize from '@mui/material/TextareaAutosize';

function TextControl() {
  return (
    <div> 
<TextareaAutosize
      aria-label="maximum height"
      placeholder="Maximum 4 rows"
      defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua."
      style={{ width: "93%" }}
    />    </div>
  )
}

export default TextControl