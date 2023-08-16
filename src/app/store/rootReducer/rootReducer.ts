import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "../themeSlice/themeSlice";

export const rootReducer = combineReducers({
  themeSlice,
});
