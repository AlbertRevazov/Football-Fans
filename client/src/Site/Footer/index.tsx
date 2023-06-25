import { Box, Typography } from "@mui/material";
import styles from "./Footer.module.scss";
import { FC } from "react";
import Image from "next/image";

interface FooterProps {}

export const Footer: FC<FooterProps> = () => {
  return (
    <footer className={styles.root}>
      <Box className={styles.links}>
        <Box className={styles.title}>
          <p>
            Copyright
            <a href="revaz.vercel.app" target="_blank">
              A.Revazov
            </a>
          </p>
          <p>2023 All Right Reserved</p>
        </Box>
      </Box>
    </footer>
  );
};
