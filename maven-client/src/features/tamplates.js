import { createSlice } from '@reduxjs/toolkit';
import {viewNames} from '../models/view-names.ts';

const initialStateValue = {tamplateNmae:"CheckBox"};
export const tamplatesSlice = createSlice({
    name: "tamplates",
    initialState: { value: initialStateValue },
    reducers: {
        updateQuestionTamplateView: (state, action) => {
            state.value = action.payload;
        },
    }
})

export const { updateQuestionTamplateView} = tamplatesSlice.actions;

export default tamplatesSlice.reducer