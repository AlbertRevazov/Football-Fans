import React, { FC } from "react";
import { MapPage } from "../../src/Site/Map";
import { Layout } from "../../src/Site/Layout";

const Index: FC = () => {
  return (
    <>
      <Layout>
        <MapPage />
      </Layout>
    </>
  );
};
export default Index;
