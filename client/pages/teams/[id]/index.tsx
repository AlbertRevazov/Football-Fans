import React, { FC } from "react";
import { TeamsPage } from "../../../src/Site/Teams";
import { Layout } from "../../../src/Site/Layout";

const index: FC = () => {
  return (
    <>
      <Layout>
        <TeamsPage />
      </Layout>
    </>
  );
};
export default index;
