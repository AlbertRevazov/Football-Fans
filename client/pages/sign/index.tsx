import React, { FC } from "react";
import { Sign } from "../../src/Site/Sign";
import { Layout } from "../../src/Site/Layout";
import { Box } from "@mui/material";

const Index: FC = () => {
  return (
    <Box
      sx={{
        background: "url('/images/pitch.jpg')",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        overflow: "hidden",
        overflowY: "scroll",
      }}
    >
      <Layout>
        <Sign />
      </Layout>
    </Box>
  );
};
export default Index;
