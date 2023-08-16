import { useAppSelector } from "@app/store/hooks";
import { LOCAL_STORAGE_THEME_KEY } from "@shared/models";
import { useEffect } from "react";

export function useTheme() {
  const { theme } = useAppSelector((state) => state.themeSlice);

  localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);

  useEffect(() => {
    const root = document.querySelector(":root") as HTMLElement;

    const elements = [
      "body-bg",
      "header-bg",
      "card-bg",
      "text-primary-color",
      "text-secondary-color",
      "hover-app-link-bg",
    ];

    elements.forEach((el) => {
      root.style.setProperty(`--${el}-default`, `var(--${el}-${theme})`);
    });
  }, [theme]);
}
