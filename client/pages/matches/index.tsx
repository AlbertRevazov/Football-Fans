import React, { FC } from "react";
import { MatchesPage } from "../../src/Site/Matches";
import { Layout } from "../../src/Site/Layout";

const Index: FC = () => {
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
