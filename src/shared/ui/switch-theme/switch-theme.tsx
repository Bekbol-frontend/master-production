import { IconsSVG } from "@shared/assets";
import { useAppDispatch } from "@app/store/hooks";
import { handleTheme } from "@app/store/themeSlice/themeSlice";
import styles from "./switch-theme.module.scss";

export function SwitchTheme() {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(handleTheme())} className={styles.themeBtn}>
      <IconsSVG icon="theme-icon" />
    </button>
  );
}
