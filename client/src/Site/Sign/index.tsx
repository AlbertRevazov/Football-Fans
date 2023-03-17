import { Box } from "@mui/material";
import React, { useEffect, FC } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "../../hooks/hooks";
import { MainPage } from "../Main";
import { useAuthHook } from "./hooks";
import { Login } from "./Section/Login/Login";
import { Register } from "./Section/Register/Register";
import { styles } from "./styles";

export const Sign: FC = () => {
  const [toogle, setToogle] = React.useState(false);
  const { user } = useAppSelector((state) => state.users);
  const { status } = useAuthHook(toogle);

  useEffect(() => {
    if (status) {
      toast(status);
    }
    if (status === "Регистрация успешна!") {
      setToogle(false);
    }
  }, [status]);

  return (
    <Box sx={styles.container}>
      {user?.id ? (
        <MainPage />
      ) : (
        <>
          {toogle ? (
            <Register toogle={toogle} setToogle={setToogle} />
          ) : (
            <Login toogle={toogle} setToogle={setToogle} />
          )}
        </>
      )}
    </Box>
  );
};
