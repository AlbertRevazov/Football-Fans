import { Box, Typography } from "@mui/material";
import { styles } from "./styles";
import { FC } from "react";
import Image from "next/image";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.content}>
        <Box sx={styles.links}>
          <Box sx={styles.title}>
            <Typography sx={[styles.font, { fontSize: "24px" }]}>
              Revazov
            </Typography>
            <Typography sx={[styles.font, { fontSize: "20px" }]}>
              © 2023 Copyright
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <Box sx={styles.contacts}>
            <Image src="/images/vk.png" alt="avatar" width={60} height={60} />
          </Box>
          <Box sx={styles.contacts}>
            <Image
              src="/images/github.png"
              alt="avatar"
              width={60}
              height={60}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
