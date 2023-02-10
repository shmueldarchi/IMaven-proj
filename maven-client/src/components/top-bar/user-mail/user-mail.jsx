import React ,{useState} from "react";
import { useSelector } from 'react-redux';
import '../top-bar.css'
//{props.mail}
export default function UserDetails (props){
    const user = useSelector(((state) => state.user.value));
    return (
    <div>
<div> 
<div className="mail-icon">

</div>
<div  className="mail-header">
{user.email}
</div>
 <div className="user-avatar">

 </div>

<div className="user-wellcome">
    <div>
    Wellcome
    </div>
    <div>
    {user.name}
    </div>

</div>
<div className="user-name">

</div>
</div>
    </div>
    );
  }