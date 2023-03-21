import React, { FC } from "react";
import { MatchesPage } from "../../src/Site/Matches";
import { Layout } from "../../src/Site/Layout";
import { Box } from "@mui/material";

const Index: FC = () => {
  return (
    <Box
      sx={{
        background: "url(/images/matches-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "sticky",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Layout>
        <MatchesPage />
      </Layout>
    </Box>
  );
};
export default Index;
