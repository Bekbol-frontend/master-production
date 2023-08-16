import { Link } from "react-router-dom";
import { AppLink, SwitchTheme } from "@shared/ui";
import styles from "./header.module.scss";

import { appLinks } from "./links";

export function Header() {

  const testClikc = (num:number) => {
    console.log(`Click: ${num}`)
  }

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.headerInner}>
          <Link to="/" className={styles.logo}>
            React | Featured
          </Link>
          <div className={styles.headerRight}>
            {appLinks.map(({ to, linkName }) => (
              <AppLink key={to} to={to}>
                {linkName}
              </AppLink>
            ))}
            <SwitchTheme />
          </div>
        </div>
      </div>
    </header>
  );
}
