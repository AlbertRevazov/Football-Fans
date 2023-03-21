import Box from "@mui/material/Box";
import Image from "next/image";
import React, { FC } from "react";
import { styles } from "./styles";

export const Loading: FC = () => {
  return (
    <Box sx={styles.loading}>
      <Image
        alt="loading"
        width={300}
        height={300}
        src="/gif/loading.gif"
        style={{ background: "none" }}
      />
    </Box>
  );
};
