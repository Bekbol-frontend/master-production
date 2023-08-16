import { NavLink, LinkProps } from "react-router-dom";
import { classNames } from "@shared/lib";
import styles from "./app-link.module.scss";

export function AppLink(props: LinkProps) {
  const { children } = props;
  return (
    <NavLink
      className={({ isActive }) =>
        classNames(styles.appLink, { [styles.active]: isActive })
      }
      {...props}
      end
    >
      {children}
    </NavLink>
  );
}
