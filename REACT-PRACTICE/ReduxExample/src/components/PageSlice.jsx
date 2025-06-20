import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  color: "lightgreen",
};

const Pageslice = createSlice({
  name: "Page1",
  initialState,
  reducers: {
    greencolor: (state) => {
      state.color = "green";
    },
    redcolor: (state) => {
      state.color = "red";
    },
    orangecolor: (state) => {
      state.color = "orange";
    },
    bluecolor: (state) => {
      state.color = "blue";
    },
  },
});

export const { greencolor, redcolor, orangecolor, bluecolor } =
  Pageslice.actions;
export default Pageslice.reducer;
