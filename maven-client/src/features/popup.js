import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {isOpen:false};

export const popupSlice = createSlice({
    name: "popup",
    initialState: { value: initialStateValue },
    reducers: {
        openpopup: (state, action) => {
            state.value = action.payload;
        },
        closePopup: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { openpopup } = popupSlice.actions;

export default popupSlice.reducer