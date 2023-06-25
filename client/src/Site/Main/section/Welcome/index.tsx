import React from "react";
import styles from "./Main.module.scss";
import { Button } from "@mui/material";

export const Welcome = () => {
  return (
    <div className={styles.welcome__root}>
      <h4 className={styles.title}>Football Fans</h4>
      <h1 className={styles.title}>Сервис для футбольных болельщиков</h1>
      <a href='#' className={styles.button} >
        Открыть
      </a>
    </div>
  );
};
