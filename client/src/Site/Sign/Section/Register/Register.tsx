import { Box, TextField, Typography, Button } from "@mui/material";
import React, { FC } from "react";
import { useAppSelector } from "../../../../hooks/hooks";
import { MainPage } from "../../../Main";
import { useAuthHook } from "../../hooks";
import { styles } from "../../styles";

interface RegisterProps {
  toogle: boolean;
  setToogle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Register: FC<RegisterProps> = React.memo(
  ({ toogle, setToogle }) => {
    const { user } = useAppSelector((state) => state.users);
    const { formik, handleSubmit } = useAuthHook(toogle);

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
            <Box sx={[styles.root, { minHeight: "600px" }]}>
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
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <TextField
                sx={styles.textField}
                color="warning"
                id="phone"
                name="phone"
                label="Phone"
                type="tel"
                required
                value={formik.values.phone || ""}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
              <TextField
                sx={styles.textField}
                color="warning"
                id="name"
                name="name"
                label="name"
                type="name"
                required
                value={formik.values.name || ""}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
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
  }
);
