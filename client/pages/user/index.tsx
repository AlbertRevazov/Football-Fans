import React, { FC } from "react";
import { UserPage } from "../../src/Site/User";
import { Layout } from "../../src/Site/Layout";

const Index: FC = () => {
  return (
    <>
      <Layout>
        <UserPage />
      </Layout>
    </>
  );
};
export default Index;
