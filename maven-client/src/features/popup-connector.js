import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {isOpen:false, tamplateKind:""};

export const popupConnectorSlice = createSlice({
    name: "popupConnector",
    initialState: { value: initialStateValue },
    reducers: {
        openpopup: (state, action) => {
            console.log("updated");
            state.value = action.payload;
        }
    }
})

export const { openpopup } = popupConnectorSlice.actions;

export default popupConnectorSlice.reducer