import { createSlice } from "@reduxjs/toolkit";
import { LOCAL_STORAGE_THEME_KEY, ThemeType } from "@shared/models";

const getThemeColorLocalStorage: ThemeType =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType) || "light";

interface IInitialState {
  theme: ThemeType;
}

const initialState: IInitialState = {
  theme: getThemeColorLocalStorage,
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

export default themeSlice.reducer;

export const {handleTheme} = themeSlice.actions;
