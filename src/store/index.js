//
import {  configureStore } from "@reduxjs/toolkit";


import { toggleSlice } from "./toggle";
import { nameSlice } from "./nameSlice";


//configStore
export const store = configureStore({
   reducer: {
    toggleSlice: toggleSlice.reducer, //pointing to the initial state
    nameSlice: nameSlice.reducer,
  }
})