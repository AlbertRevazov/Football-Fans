import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React, { FC } from "react";
import { styles } from "./styles";

export const NotFound: FC = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Typography sx={styles.title} variant="h1">
          404
        </Typography>
        <Typography sx={styles.subTitle} variant="h2">
          Страница не найдена
        </Typography>
        <Link href={"/"} passHref>
          <Button sx={styles.button} variant="contained" color="primary">
            Вернуться на главную
          </Button>
        </Link>
      </Box>
    </Box>
  );
};
