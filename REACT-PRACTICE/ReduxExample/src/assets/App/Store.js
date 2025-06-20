import { configureStore } from "@reduxjs/toolkit";
import  Pageslice  from "../../components/PageSlice";

export const store = configureStore({
  reducer: {
    user : Pageslice,
  },
});