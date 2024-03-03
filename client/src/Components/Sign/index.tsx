import React, { useState } from "react";
import { AuthForm } from "../../Common/AuthForm";

export const Auth = () => {
  const [toogle, setToogle] = useState<boolean>(false);

  return (
    <section>
      <AuthForm isSign={toogle} />
      <div>
        Вы так же можете
        <div onClick={() => setToogle(!toogle)}>
          {toogle ? "Войти" : "Зарегистрироваться"}
        </div>
      </div>
    </section>
  );
};
