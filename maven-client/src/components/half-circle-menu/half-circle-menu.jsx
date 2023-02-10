import React, { useState } from 'react';
import Edit from '../../assets/menu-half-circle/edit.png';
import Close from '../../assets/menu-half-circle/Close.png';
import Connector from '../../assets/menu-half-circle/Connector.png';
import {Settings} from '../../assets/menu-half-circle/Settings.png';
import {Trash} from '../../assets/menu-half-circle/Trash.png';

import './half-circle-menu.css';
function HalfCircleMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);



  return (
    <div >
      <a class='button ctrl' href='#' tabindex='1'>★</a>
<ul class='tip ctrl'>
	<li class='slice'><div><img src={Edit}/></div></li>
	<li class='slice'><div><img src={Edit}/></div></li>
	<li class='slice'><div><img src={Edit}/></div></li>
	<li class='slice'><div><img src={Edit}/></div></li>
	<li class='slice'><div><img src={Edit}/></div></li>
</ul>

    </div>
  );
}

export default HalfCircleMenu;
