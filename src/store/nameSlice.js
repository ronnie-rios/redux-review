import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
  firstName: "",
  lastName: "",
  fullName: ""
 }

 export const nameSlice = createSlice({
  name:"nameSlice",
  initialState,
  reducers: {
    getFirstName(state, action) { //takes in payload
      return {
        ...state, 
        firstName: action.payload
      }
    },
    getLastName(state, action) { //takes in payload
      return {
        ...state, 
        lastName: action.payload
      }
    },
    getFullName(state) { //takes in payload
      state.fullName =`${state.firstName} ${state.lastName}`
      state.firstName= ""
      state.lastName= ""
      return state
    },
    defaultName(state) { //takes in payload
      state.firstName= ""
      state.lastName= ""
      state.fullName =``
      return state
    }
  }
 })

 export const nameActions = nameSlice.actions //points to the methods