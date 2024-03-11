import React, { FC } from "react";
import styles from "./Main.module.scss";
import Image from "next/image";

export const Main: FC = () => {
  return (
    <div className={styles.main_root}>
      <div className={styles.main_container}>
        <div>
          <img
            src="/img/welc-back.jpg"
            alt="background pitch"
            loading="lazy"
            style={{ width: "800px", height: "440px" }}
          />
        </div>
        Main
      </div>
    </div>
  );
};
