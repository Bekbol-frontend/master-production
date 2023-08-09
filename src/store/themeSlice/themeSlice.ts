import { ThemeType } from "@model/model";
import { createSlice } from "@reduxjs/toolkit";
import { themeLocalStorage } from "./themeLocalStorage";

interface IState {
  theme: ThemeType;
}

const initialState: IState = {
  theme: themeLocalStorage,
};

const themeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    handleTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const { handleTheme } = themeSlice.actions;

export default themeSlice.reducer;
