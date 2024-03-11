import React, { useState } from "react";
import { Sign } from "@/Common/Form/SignForm";
import { Login } from "@/Common/Form/LoginForm";
import styles from "./Auth.module.scss";

export const Auth = () => {
  const [toogle, setToogle] = useState<boolean>(false);

  return (
    <section className={styles.container}>
      {toogle ? <Sign /> : <Login />}
      <div className={styles.toogle_title}>
        {toogle ? "У меня есть аккаунт" : "У меня нет аккаунта ?"}
        <span
          className={styles.toogle_subtitle}
          onClick={() => setToogle(!toogle)}
        >
          {toogle ? "Войти" : "Создать сейчас"}
        </span>
      </div>
    </section>
  );
};
