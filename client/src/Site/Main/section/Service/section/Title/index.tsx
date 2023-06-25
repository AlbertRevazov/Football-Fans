import React, { FC } from "react";
import styles from "./Title.module.scss";

export const Title: FC = () => {
  return (
    <div className={styles.service__content}>
      <h2 className={styles.service__title}>
        Мы помогаем футбольным болельщикам отслеживать результаты любимой
        команды
      </h2>
      <h3 className={styles.service__subtitle}>
        Доступны следующие чемпионаты:
        <br /> Champions League, Bundesliga, Eredivisie, La Liga, Ligue 1,
        Primeira Liga, <br /> Serie A, Premier League, Copa Libertadores and
        others.
      </h3>
    </div>
  );
};
