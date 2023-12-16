import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "searchTerm",
    initialState: "",
    reducers: {
        changeSearchTerm(state,action){
            return action.payload
        }
    }
})

export const searchReducer = searchSlice.reducer;
export const {changeSearchTerm} = searchSlice.actions;