import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {isOpen:false, tamplateKind:""};

export const popupTamplateSlice = createSlice({
    name: "popupTamplate",
    initialState: { value: initialStateValue },
    reducers: {
        openpopup: (state, action) => {
            state.value = action.payload;
        },
        tamplateKind: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { openpopup, tamplateKind } = popupTamplateSlice.actions;

export default popupTamplateSlice.reducer