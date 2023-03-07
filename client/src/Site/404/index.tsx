import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { styles } from "./styles";

export const NotFound = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.wrapper}>
        <Typography sx={styles.title}>404</Typography>
        <Typography sx={styles.subTitle}>Страница не найдена</Typography>
        <Link href={"/"} style={styles.nextLink}>
          <Button sx={styles.button}>Вернуться на главную</Button>
        </Link>
      </Box>
    </Box>
  );
};
