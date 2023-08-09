import { ThemeType, THEME_CONTEXT_KEY } from "@model/model";

export const themeLocalStorage: ThemeType =
  (localStorage.getItem(THEME_CONTEXT_KEY) as ThemeType) || "light";
