import React, { FC } from "react";
import { CompetitionPage } from "../../../src/Site/Competitions";
import { Layout } from "../../../src/Site/Layout";

const CompetitionIdPage: FC = () => {
  return (
    <>
      <Layout>
        <CompetitionPage />
      </Layout>
    </>
  );
};
export default CompetitionIdPage;
