import React, { FC, ReactNode } from "react";
import { Accordion, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import styles from "./Accordion.module.scss";

interface CustomAccordionProps {
  competitionName: string;
  emblemSrc: string;
  children: ReactNode;
}

export const CustomAccordion: FC<CustomAccordionProps> = ({
  competitionName,
  emblemSrc,
  children,
}) => {
  return (
    <Box>
      <Accordion className={styles.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
        >
          <Typography className={styles.font}>
            <img src={emblemSrc} className={styles.emblem} />
            {competitionName}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Box>
  );
};
