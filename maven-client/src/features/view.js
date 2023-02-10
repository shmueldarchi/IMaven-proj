import { createSlice } from '@reduxjs/toolkit';
import {viewNames} from '../models/view-names.ts';

const initialStateValue = {viewName:"start", tamplateNmae:"CheckBox"};
export const viewSlice = createSlice({
    name: "view",
    initialState: { value: initialStateValue },
    reducers: {
        updateCurrentView: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { updateCurrentView } = viewSlice.actions;

export default viewSlice.reducer