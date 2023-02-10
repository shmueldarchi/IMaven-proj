import { createSlice } from '@reduxjs/toolkit';
import HomeIcon from '@mui/icons-material/Home';
import ListAltIcon from '@mui/icons-material/ListAlt';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';


const initialStateValue = [
    {
      key: "create New",
      label: "Create New",
      icon: AddCircleIcon,
      functionallity: ()=>{
        createNewHandler(true);
      }
    },
    {
      key: "advice",
      label: "Advice",
      icon: HomeIcon
    },
    {
      key: "projects",
      label: "Projects",
      icon: ListAltIcon
    },
    {
      key: "edit",
      label: "Edit",
      icon: ModeEditIcon
    },
    {
      key: "account",
      label: "Account",
      icon: SettingsIcon
    },
    {
      key: "logout",
      label: "Logout",
      icon: LogoutIcon
    }
  ];

export const leftMenuSlice = createSlice({
    name: "leftMenu",
    initialState: { value: initialStateValue },
    reducers: {
        changeLeftMenu: (state, action) => {
            state.value = action.payload;
        },
        createNewHandler: (state, action) => {
            // alert();
            state.value = action.payload;
        }
    }
})

export const { changeLeftMenu ,createNewHandler} = leftMenuSlice.actions;

export default leftMenuSlice.reducer