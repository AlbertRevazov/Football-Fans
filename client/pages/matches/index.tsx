import React from "react";
import { MatchesPage } from "../../src/components/Matches";
import { Layout } from "../../src/components/Layout";
import { Box } from "@mui/material";

const Index = () => {
  return (
    <>
      {/*  sx={{
       background: "url(/images/pitch-bg.jpg)",
       backgroundSize: "cover",
       backgroundPosition: "sticky",
       backgroundAttachment: "fixed",
       backgroundRepeat: "no-repeat",
     }} */}
      <Layout>
        <MatchesPage />
      </Layout>
    </>
  );
};
export default Index;
