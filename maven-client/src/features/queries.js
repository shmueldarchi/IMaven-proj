import { createSlice } from '@reduxjs/toolkit';

const initialStateValue = {queries:[]};

export const queriesSlice = createSlice({
    name: "queries",
    initialState: { value: initialStateValue },
    reducers: {
        updateQueries: (state, action) => {
            state.value = action.payload;
        },
        addQuestion: (state, action) => {
console.log(JSON.stringify(action));
state.value.queries[0].questions.push(action.payload.question);

     state.value.queries.map((query)=>{
     console.log('-------------',JSON.stringify(query));
    if(query.id == action.payload.id){
     query.questions.push(action.payload.question);
}
            })
        },
    }
})

export const { updateQueries, addQuestion } = queriesSlice.actions;

export default queriesSlice.reducer