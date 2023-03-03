import { Box, Typography } from "@mui/material";
import { ContactProps } from "../../../../types";
import { styles } from "../../styles";
import { FC } from "react";

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
