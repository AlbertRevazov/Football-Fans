import { Box, Typography } from "@mui/material";

import { FC } from "react";
import { styles } from "../../../styles";
import { Club } from "../../../types";
interface ContactProps {
  data: Club;
}
export const ContactDetails: FC<ContactProps> = ({ data }) => {
  const { address, website } = data;

  return (
    <Box sx={[styles.sectionBox, { marginTop: "32px", height: "400px" }]}>
      <>
        <Typography sx={styles.font}> address - {address}</Typography>
        <Typography sx={styles.font}>website - {website}</Typography>
      </>
    </Box>
  );
};
