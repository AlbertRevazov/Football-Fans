import { Box, Button, TextField, Input, Typography } from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import { MainPage } from "../../../Main";
import { useAuthHook } from "../../hooks";
import { styles } from "../../styles";

interface LoginProps {
  toogle: boolean;
  setToogle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Login: FC<LoginProps> = React.memo(({ toogle, setToogle }) => {
  const { user, token } = useAppSelector((state) => state.users);
  const { formik, handleSubmit, status } = useAuthHook(toogle);

  return (
    <Box sx={styles.container}>
      {user?.id ? (
        <MainPage />
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Box sx={[styles.root, { minHeight: "400px" }]}>
            <TextField
              sx={styles.textField}
              color="warning"
              id="email"
              name="email"
              label="Email"
              type="tel"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              sx={styles.textField}
              color="warning"
              id="password"
              name="password"
              label="Password"
              type={"password"}
              required
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Box sx={styles.toogleBox}>
              <Typography onClick={() => setToogle(!toogle)} sx={styles.font}>
                {toogle ? "войти" : "зарегистрироваться"}
              </Typography>
            </Box>
            <Box>
              <Button
                color="warning"
                variant="outlined"
                sx={styles.button}
                type="submit"
                onClick={handleSubmit}
              >
                {toogle ? "зарегистрироваться" : "войти"}
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </Box>
  );
});
