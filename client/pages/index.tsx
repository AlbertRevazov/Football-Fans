import React, { FC } from "react";
import { MainPage } from "../src/Site/Main";
import { Layout } from "../src/Site/Layout";

const Index: FC = () => {
  return (
    <>
      <Layout>
        <MainPage />
      </Layout>
    </>
  );
};
export default Index;
