import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "../themeSlice/themeSlice";
import collepsedSlice from "../collepsedSlice/collepsedSlice";

export const rootReducer = combineReducers({
  themeSlice,
  collepsedSlice,
});
