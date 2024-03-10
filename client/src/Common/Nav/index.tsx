import { FC } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

export const Nav: FC = () => {
  return (
    <section style={{ borderBottom: "2px solid #000" }}>
      <nav className={styles.nav_root}>
        <Link href="/" className={styles.logo}>
          <img src="/img/logo.png" width={100} height={100} className={styles.logo_img}/>
        </Link>
        <ul className={styles.ul}>
          <Link href="/matches">
            <li className={styles.li}>Matches</li>
          </Link>
          <Link href="/teams">
            <li className={styles.li}>Teams</li>
          </Link>
          <Link href="/competitions">
            <li className={styles.li}>Competitions</li>
          </Link>
          <Link href="/players">
            <li className={styles.li}>Players</li>
          </Link>
          <Link href="/auth" className={styles.btn}>
            Sign Up
          </Link>
        </ul>
      </nav>
    </section>
  );
};
