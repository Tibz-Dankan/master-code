// STORE IS CREATED HERE
// Using configureStore from redux tool kit

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterReducer";
import loggedInReducer from "./loggedInReducer";

export default configureStore({
  reducer: {
    counter: counterReducer,
    loggedIn: loggedInReducer,
  },
});
