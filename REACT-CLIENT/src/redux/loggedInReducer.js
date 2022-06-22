//THE REDUCER SLICE HERE
// The reducer slice is created using createSlice from redux tool kit

import { createSlice } from "@reduxjs/toolkit";

export const loggedInSlice = createSlice({
  name: "loggedIn",
  initialState: {
    value: false,
  },
  reducers: {
    logIn: (state) => {
      state.value = !state.value;
    },
    logOut: (state) => {
      state.value = !state.value;
    },
  },
});

const loggedInReducer = loggedInSlice.reducer;

// Action creators are generated for each case reducer function
export const { logIn, logOut } = loggedInSlice.actions;

// export default loggedInSlice.reducer;
export default loggedInReducer;
