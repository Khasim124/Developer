import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    color :"lightgreen",
}

export const PageSlice = createSlice({
    name :"page1",
    initialState,
    reducers : {
        greencolor :(state) =>{
            state.color = "green";
        },
        redcolor : (state) =>{
            state.color = "red";
        },
        bluecolor : (state) =>{
            state.color = "blue";
        },
        blackcolor :(state) =>{
            state.color = "black"
        },
    },
});


export const {greencolor,redcolor,bluecolor,blackcolor} = 
PageSlice.actions;
export default PageSlice.reducer;