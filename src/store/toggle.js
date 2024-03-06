import { createSlice } from "@reduxjs/toolkit"

const initial = { toggle: false }

//createSlice
export const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState: initial,
  reducers: {
    //object
    setToggle(state) {
      return { ...state, toggle: !state.toggle}
    }
  }
})

export const toggleActions = toggleSlice.actions
