import { Box, Link, Typography } from "@mui/material";
import { styles } from "./styles";

// add styles.ts for this component

export const Footer: React.FC = () => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.content}>
        <Box sx={styles.links}>
            {/* I don't like using <img/> I need to think about what will be better */}
            <img
              style={{ width: "90px", height: "90px" }}
              src="/images/juve.png"
            />
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
              <img style={styles.contactIcon} src="/images/vk.png" />
            </Box>

            <Box sx={styles.contacts}>
              <img style={styles.contactIcon} src="/images/github.png" />
            </Box>
        </Box>
      </Box>
    </Box>
  );
};
