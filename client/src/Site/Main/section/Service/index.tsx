import React, { FC } from "react";
import { Title } from "./section/Title";
import { ServiceList } from "./section/ServiceList";
import styles from "./Service.module.scss";

export const Service: FC = () => {
  return (
    <div className={styles.root__about}>
      <Title />
      <ServiceList />
      <a href="/matches" className={styles.button}>
        Ближайшие игры
      </a>
    </div>
  );
};
