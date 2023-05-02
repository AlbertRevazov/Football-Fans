import React, { FC, ReactNode } from "react";
import { Accordion, AccordionSummary, Box, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordionDetails from "@mui/material/AccordionDetails";
import { styles } from "../../Site/Matches/styles";

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
      <Accordion
        sx={{
          margin: " 15px 0 15px 0 ",
          borderRadius: "8px",
          background: "none",
          backdropFilter: "blur(19px)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: "#FFFFFF" }} />}
        >
          <Typography sx={styles.font}>
            <img src={emblemSrc} style={styles.emblem} />
            {competitionName}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Accordion>
    </Box>
  );
};
