import { THEME_CONTEXT_KEY } from "@model/model";
import { useEffect } from "react";
import { useAppSelector } from "./useSelectorDispatch";

export function useTheme() {
  const { theme } = useAppSelector((state) => state.themeSlice);

  useEffect(() => {
    localStorage.setItem(THEME_CONTEXT_KEY, theme);

    const root = document.querySelector(":root") as HTMLElement;

    const elements = [
      "body-bg",
      "card-bg",
      "text-primary-color",
      "text-secondary-color",
    ];

    elements.forEach((el) => {
      root.style.setProperty(`--${el}-default`, `var(--${el}-${theme})`);
    });
  }, [theme]);
}
