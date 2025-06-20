import { configureStore } from '@reduxjs/toolkit';
import PageSlice from "../../Components/PageSlice";

export const store = configureStore({
    reducer : {
        user : PageSlice,
    }
})