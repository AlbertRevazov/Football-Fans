import React, { FC } from "react";
import { Sign } from "../../src/Site/Sign";
import { Layout } from "../../src/Site/Layout";
import { Box } from "@mui/material";

const Index: FC = () => {
  const styles = {
    root: {
      background: "url('/images/pitch.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "sticky",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
    },
  };
  return (
    <Box sx={styles.root}>
      <Layout>
        <Sign />
      </Layout>
    </Box>
  );
};
export default Index;
