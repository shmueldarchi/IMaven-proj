import React, { useEffect, useState } from "react";
import './left-menu.css'
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useSelector } from 'react-redux';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import TuneIcon from '@mui/icons-material/Tune';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useDispatch } from 'react-redux';
import { openpopup } from '../../features/popup';
import { viewNames,tamplateNames } from '../../models/view-names.ts'
import {updateCurrentView} from '../../features/view';
import{updateQuestionTamplateView} from '../../features/tamplates'
import { useNavigate } from "react-router-dom";

export default function LeftMenu() {
  const drawerWidth = 240;

  const navigate = useNavigate();

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
      }),
    }),
  );

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    }),
  }));

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',

  }));

  const dispatch = useDispatch();

  const list = useSelector(((state) => state.leftMenu.value));

  const view = useSelector(((state) => state.view.value));

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [menu, setMenu] = useState();

  //let menu = "";
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const useStyles = styled({
    list: {
      width: 250
    },
    fullList: {
      width: "auto"
    },
    paper: {
      background: "blue"
    }
  });

  const initialState = {
    top: false,
    left: false,
    bottom: false,
    right: false
  };

  useEffect(() => {
    //alert();
    // initialFlow()
    switch (view.viewName) {
      case viewNames.QUESTIONS:
        setMenu(questionsMenu());
        break;
      case viewNames.QUESTIONCREATOR:
        setMenu(menuQuestionMaker());
        break;
      default:
        setMenu(defaultMenu());
        break;
    }
  }, [view.viewName])

  const menuQuestionMaker = () => {
    return (<div className="left-menu">

      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        classes={{ paper: classes.paper }}
      >
        <div style={{ display: "flex", backgroundColor: "white" }}>
          <div style={{ width: "3vw" }}></div>
          <div className="maven-header" style={{ height: "8vh", display: "flex" }}>Imaven</div>
        </div>

        <Divider />
        <div className="left-menu">
          <List
            component="nav"
          >
            <div onClick={() => { dispatch(updateQuestionTamplateView({ tamplateNmae: tamplateNames.CHECKBOX })) }}>
              <ListItem button>
                <ListItemIcon>
                  <CheckBoxIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Check Boxes"} />
              </ListItem>
            </div>
            <div onClick={() => { dispatch(updateQuestionTamplateView({tamplateNmae: tamplateNames.RADIOBUTTON })) }}>
              <ListItem button>
                <ListItemIcon>
                  <RadioButtonCheckedIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Radio Buttons"} />
              </ListItem>
            </div>
            <div onClick={() => { dispatch(updateQuestionTamplateView({ tamplateNmae: tamplateNames.SLIDER })) }}>
              <ListItem button>
                <ListItemIcon>
                  <TuneIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Sliders"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <ModeEditIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Edit"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Account"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <LogoutIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>
            </div>
          </List>
        </div>
      </Drawer>
    </div>)
  }
  const questionsMenu = () => {
    return (<div className="left-menu">
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        classes={{ paper: classes.paper }}
      >
        <div style={{ display: "flex", backgroundColor: "white" }}>
          <div style={{ width: "3vw" }}></div>
          <div className="maven-header" style={{ height: "8vh", display: "flex" }}>Imaven</div>
        </div>

        <Divider />
        <div className="left-menu">
          <List
            component="nav"
          >
            <div style={{backgroundColor :"black", marginTop:"-1vh"}} onClick={() => {
               dispatch(updateCurrentView({ viewName: viewNames.QUESTIONCREATOR }));
               navigate("/QuestionCreator", { replace: true });
            }}>
              <ListItem button>
                <ListItemIcon>
                  <AddCircleIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Create New"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Advice"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <ListAltIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Projects"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <ModeEditIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Edit"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Account"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <LogoutIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>
            </div>
            {/* {list.map(({ key, label, icon: Icon, functionallity }) => {
            return (
              <div key={key} onClick={functionallity}>
                <ListItem button>
                  <ListItemIcon>
                    <Icon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              </div>
            );
          })} */}
          </List>
        </div>
      </Drawer>
    </div>)
  }
  const defaultMenu = () => {
    return (<div className="left-menu">
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        classes={{ paper: classes.paper }}
      >
        <div style={{ display: "flex", backgroundColor: "white" }}>
          <div style={{ width: "3vw" }}></div>
          <div className="maven-header" style={{ height: "8vh", display: "flex" }}>Imaven</div>
        </div>

        <Divider />
        <div className="left-menu">
          <List
            component="nav"
          >
            <div onClick={() => { dispatch(openpopup({ isOpen: true })) }}>
              <ListItem button>
                <ListItemIcon>
                  <AddCircleIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Create New"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <HomeIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Advice"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <ListAltIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Projects"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <ModeEditIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Edit"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Account"} />
              </ListItem>
            </div>
            <div onClick={console.log("")}>
              <ListItem button>
                <ListItemIcon>
                  <LogoutIcon style={{ color: 'white' }} />
                </ListItemIcon>
                <ListItemText primary={"Logout"} />
              </ListItem>
            </div>
            {/* {list.map(({ key, label, icon: Icon, functionallity }) => {
            return (
              <div key={key} onClick={functionallity}>
                <ListItem button>
                  <ListItemIcon>
                    <Icon style={{ color: 'white' }} />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              </div>
            );
          })} */}
          </List>
        </div>
      </Drawer>
    </div>)
  }
  const classes = useStyles();
  return (
    <div>
      {menu}
    </div>

    // <div className="left-menu">
    //   <Drawer
    //     variant="permanent"
    //     sx={{
    //       width: drawerWidth,
    //       flexShrink: 0,
    //       [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    //     }}
    //     classes={{ paper: classes.paper }}
    //   >
    //     <div style={{ display: "flex", backgroundColor: "white" }}>
    //       <div style={{ width: "3vw" }}></div>
    //       <div className="maven-header" style={{ height: "8vh", display: "flex" }}>Imaven</div>
    //     </div>

    //     <Divider />
    //     <div className="left-menu">
    //       <List
    //         component="nav"
    //       >
    //         <div onClick={() => { dispatch(openpopup({ isOpen: true })) }}>
    //           <ListItem button>
    //             <ListItemIcon>
    //               <AddCircleIcon style={{ color: 'white' }} />
    //             </ListItemIcon>
    //             <ListItemText primary={"Create New"} />
    //           </ListItem>
    //         </div>
    //         <div onClick={console.log("")}>
    //           <ListItem button>
    //             <ListItemIcon>
    //               <HomeIcon style={{ color: 'white' }} />
    //             </ListItemIcon>
    //             <ListItemText primary={"Advice"} />
    //           </ListItem>
    //         </div>
    //         <div onClick={console.log("")}>
    //           <ListItem button>
    //             <ListItemIcon>
    //               <ListAltIcon style={{ color: 'white' }} />
    //             </ListItemIcon>
    //             <ListItemText primary={"Projects"} />
    //           </ListItem>
    //         </div>
    //         <div onClick={console.log("")}>
    //           <ListItem button>
    //             <ListItemIcon>
    //               <ModeEditIcon style={{ color: 'white' }} />
    //             </ListItemIcon>
    //             <ListItemText primary={"Edit"} />
    //           </ListItem>
    //         </div>
    //         <div onClick={console.log("")}>
    //           <ListItem button>
    //             <ListItemIcon>
    //               <SettingsIcon style={{ color: 'white' }} />
    //             </ListItemIcon>
    //             <ListItemText primary={"Account"} />
    //           </ListItem>
    //         </div>
    //         <div onClick={console.log("")}>
    //           <ListItem button>
    //             <ListItemIcon>
    //               <LogoutIcon style={{ color: 'white' }} />
    //             </ListItemIcon>
    //             <ListItemText primary={"Logout"} />
    //           </ListItem>
    //         </div>
    //         {/* {list.map(({ key, label, icon: Icon, functionallity }) => {
    //           return (
    //             <div key={key} onClick={functionallity}>
    //               <ListItem button>
    //                 <ListItemIcon>
    //                   <Icon style={{ color: 'white' }} />
    //                 </ListItemIcon>
    //                 <ListItemText primary={label} />
    //               </ListItem>
    //             </div>
    //           );
    //         })} */}
    //       </List>
    //     </div>
    //   </Drawer>
    // </div>
  );
}