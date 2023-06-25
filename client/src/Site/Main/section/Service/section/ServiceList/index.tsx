import React, { FC } from "react";
import { Icon } from "@/Common/Icon";
import styles from "./ServiceList.module.scss";

export const ServiceList: FC = () => {
  return (
    <div className={styles.service__wrapper}>
      <div className={styles.service__item}>
        <Icon
          className={styles.service__icon}
          src="/images/next_game.png"
          alt=""
          width={100}
          height={100}
        />
        <div className={styles.service__description}>
          <h3>Ближайшие матчи</h3>
          <h5>Просмотр всех ближайших матчей в доступных чемпионатах</h5>
        </div>
      </div>
      <div className={styles.service__item}>
        <Icon
          className={styles.service__icon}
          src="/images/table.png"
          alt=""
          width={100}
          height={100}
        />
        <div className={styles.service__description}>
          <h3>Турнирная таблица</h3>
          <h5>Турнирная таблица всех доступных чемпионатов и кубков</h5>
        </div>
      </div>
      <div className={styles.service__item}>
        <Icon
          className={styles.service__icon}
          src="/images/calendar.png"
          alt=""
          width={100}
          height={100}
        />
        <div className={styles.service__description}>
          <h3>Календарь</h3>
          <h5>Календарь игр команды, и полный состав</h5>
        </div>
      </div>
    </div>
  );
};
