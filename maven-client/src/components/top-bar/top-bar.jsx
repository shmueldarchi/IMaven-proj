import React ,{useState} from "react";
import UserDetails from "./user-mail/user-mail";
import CustomizedBreadcrumbs from "../Bredcrumbs/bredcrumbs";
import './top-bar.css';

export default function TopBar (){
    const [auth, setAuth] = React.useState(true);
    const [appTitle, setAppTitle] = useState("Imaven");
    const [rightMenuOpen, setRightMenuOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setRightMenuOpen(true);
      };
    const handleChange = (event) => {
      setAuth(event.target.checked);
    };
  
    return (
    <div className="top-bar">
<div className="maven-header"> 
    Imaven
</div>
{/* <CustomizedBreadcrumbs></CustomizedBreadcrumbs> */}
<UserDetails></UserDetails>
    </div>
    );
  }