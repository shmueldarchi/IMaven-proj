import React from 'react'
import { useSelector, useDispatch } from 'react-redux';


function DropDown(props) {
  const queriesList = useSelector(((state) => state.queries.value));
  return (
    <div style={{display:"inline-block"}}>
<div contentEditable="true" style={{display:"inline-block", width: '13vw'}}>Radio button {props.index}  </div>
<div style={{display:"inline-block"}}>
<select className='classic'>
      {
          queriesList?.queries[0].questions?.map((option)=>{
            return <option value={option.title}>{option.title}</option>
                    })
        }
    </select>
</div>

  </div>
  )
}

export default DropDown;