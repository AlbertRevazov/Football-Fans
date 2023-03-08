import { Box, Button, TextField, Input, Typography } from "@mui/material";
import React, { useEffect, FC } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "../../hooks/hooks";
import { MainPage } from "../Main";
import { useAuthHook } from "./hooks";
import { styles } from "./styles";

export const Sign: FC = () => {
  const [toogle, setToogle] = React.useState(false);
  const { user, token } = useAppSelector((state) => state.users);
  const { formik, handleSubmit, status } = useAuthHook(toogle);

  useEffect(() => {
    if (status) {
      toast(status);
      <MainPage />;
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
        <form
          // style={{ padding: "40px" }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Box sx={[styles.root, { minHeight: toogle ? "600px" : "400px" }]}>
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

            {toogle && (
              <>
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
              </>
            )}
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
};
