import { Box, Typography } from "@mui/material";
import React, { FC } from "react";
import { errorsData } from "../../utils/constants";
import { styles } from "./styles";

interface errorProps {
  errorMessage: string;
}

export const Error: FC<errorProps> = ({ errorMessage }) => {
  return (
    <Box sx={styles.error}>
      <Typography sx={[styles.font]}>
        {errorsData[`${errorMessage}`]}
      </Typography>
    </Box>
  );
};
